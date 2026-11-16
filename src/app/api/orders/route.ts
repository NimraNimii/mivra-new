
import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { products } from "@/data/products";

const PAYMENT_METHODS = [
  "cod",
  "jazzcash",
  "easypaisa",
  "bank_transfer",
] as const;

type PaymentMethod = (typeof PAYMENT_METHODS)[number];

type OrderRequest = {
  paymentMethod: PaymentMethod;
  fullName: string;
  phone: string;
  address: string;
  city: string;
  state?: string;
  postalCode: string;
  country: string;
  deliveryNote?: string;
};

type RequestedItem = {
  productId: string;
  size: string;
  color: string;
  quantity: number;
};

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
      // Keep real order creation disabled until MIVRA is ready.
  if (process.env.MIVRA_ORDERS_ENABLED !== "true") {
    return NextResponse.json(
      {
        error: "Order placement is temporarily disabled. Checkout is currently in preview mode.",
      },
      { status: 503 }
    );
  }
  try {
    const supabase = await createClient();

    // Verify the authenticated customer
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        { error: "Please sign in before placing an order." },
        { status: 401 }
      );
    }

    const body = await request.json();

    const order = body.order as OrderRequest;
    const requestedItems = body.items as RequestedItem[];

    if (!order || !Array.isArray(requestedItems) || requestedItems.length === 0) {
      return NextResponse.json(
        { error: "Invalid order information." },
        { status: 400 }
      );
    }

    if (requestedItems.length > 30) {
      return NextResponse.json(
        { error: "Too many items in one order." },
        { status: 400 }
      );
    }

    // Validate payment method
    if (!PAYMENT_METHODS.includes(order.paymentMethod)) {
      return NextResponse.json(
        { error: "Invalid payment method." },
        { status: 400 }
      );
    }

    // Validate delivery information
    const fullName = clean(order.fullName);
    const phone = clean(order.phone);
    const address = clean(order.address);
    const city = clean(order.city);
    const state = clean(order.state);
    const postalCode = clean(order.postalCode);
    const country = clean(order.country);
    const deliveryNote = clean(order.deliveryNote);

    if (
      !fullName ||
      !phone ||
      !address ||
      !city ||
      !postalCode ||
      !country
    ) {
      return NextResponse.json(
        { error: "Please complete all required delivery fields." },
        { status: 400 }
      );
    }

    // Build order items using trusted server-side catalogue data
    const orderItems = [];

    for (const requested of requestedItems) {
      const product = products.find(
        (item) =>
          item.id === requested.productId ||
          item.slug === requested.productId
      );

      if (!product) {
        return NextResponse.json(
          { error: "An item in your bag is no longer available." },
          { status: 400 }
        );
      }

      const quantity = Number(requested.quantity);
      const size = clean(requested.size);
      const color = clean(requested.color);

      if (
        !Number.isInteger(quantity) ||
        quantity < 1 ||
        quantity > 99
      ) {
        return NextResponse.json(
          { error: `Invalid quantity for ${product.name}.` },
          { status: 400 }
        );
      }

      if (!product.sizes.includes(size)) {
        return NextResponse.json(
          { error: `Invalid size for ${product.name}.` },
          { status: 400 }
        );
      }

      const validColor = product.colors.find(
        (item) => item.name === color
      );

      if (!validColor) {
        return NextResponse.json(
          { error: `Invalid colour for ${product.name}.` },
          { status: 400 }
        );
      }

      if (!Number.isFinite(product.price) || product.price < 0) {
        return NextResponse.json(
          { error: `Invalid catalogue price for ${product.name}.` },
          { status: 400 }
        );
      }

      orderItems.push({
        product_id: product.id,
        product_slug: product.slug,
        product_name: product.name,
        product_image: product.image,
        size,
        color,
        quantity,
        unit_price: product.price,
      });
    }

    // Email is taken from the authenticated account, not the browser
    const { data, error } = await supabase.rpc("create_mivra_order", {
      p_order: {
        payment_method: order.paymentMethod,
        shipping_name: fullName,
        shipping_email: user.email ?? "",
        shipping_phone: phone,
        shipping_address: address,
        shipping_city: city,
        shipping_state: state,
        shipping_postal_code: postalCode,
        shipping_country: country,
        delivery_note: deliveryNote,
        shipping_cost: 0,
      },
      p_items: orderItems,
    });

    if (error) {
      console.error("MIVRA order creation failed:", error);

      return NextResponse.json(
        { error: "We could not create your order. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        order: data,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("MIVRA orders API error:", error);

    return NextResponse.json(
      { error: "An unexpected error occurred while creating your order." },
      { status: 500 }
    );
  }
}
