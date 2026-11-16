import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { connection } from "next/server";
import { redirect } from "next/navigation";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import { createClient } from "@/lib/supabase/server";
import { formatPrice } from "@/lib/currency";

type OrderItem = {
  id: string;
  product_name: string;
  product_image: string | null;
  product_slug: string | null;
  size: string | null;
  color: string | null;
  quantity: number;
  unit_price: number;
  line_total: number;
};

type Order = {
  id: string;
  order_number: string;
  status: string;
  payment_status: string;
  subtotal: number;
  shipping_cost: number;
  total: number;
  currency: string;
  created_at: string;
  tracking_number: string | null;
  tracking_url: string | null;
  order_items: OrderItem[];
};

function formatMoney(amount: number) {
  return formatPrice(amount);
}

function statusStyle(status: string) {
  switch (status.toLowerCase()) {
    case "delivered":
      return "bg-green-50 text-green-800";
    case "shipped":
      return "bg-blue-50 text-blue-800";
    case "processing":
      return "bg-amber-50 text-amber-800";
    case "cancelled":
      return "bg-red-50 text-red-800";
    default:
      return "bg-stone-100 text-stone-700";
  }
}

async function OrdersContent() {
  await connection();

  const supabase = await createClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect("/account");
  }

  const { data, error } = await supabase
    .from("orders")
    .select(`
      id,
      order_number,
      status,
      payment_status,
      subtotal,
      shipping_cost,
      total,
      currency,
      created_at,
      tracking_number,
      tracking_url,
      order_items (
        id,
        product_name,
        product_image,
        product_slug,
        size,
        color,
        quantity,
        unit_price,
        line_total
      )
    `)
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  const orders = (data ?? []) as unknown as Order[];

  return (
    <main className="min-h-screen bg-pearl">
      <AnnouncementBar />
      <Header />

      <div className="mx-auto max-w-[1250px] px-5 pb-24 pt-12 sm:px-8 lg:px-12">
        <Link
          href="/account/profile"
          className="text-[9px] font-semibold tracking-[0.2em] text-chrome transition hover:text-black"
        >
          ← BACK TO MY ACCOUNT
        </Link>

        <div className="mb-10 mt-8 border-b border-black/10 pb-8">
          <p className="text-[9px] font-semibold tracking-[0.3em] text-chrome">
            MIVRA / YOUR PURCHASES
          </p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <h1 className="font-display text-5xl sm:text-6xl">
              My orders<span className="text-taupe">.</span>
            </h1>
            <p className="text-xs text-chrome">
              Your order history and delivery updates.
            </p>
          </div>
        </div>

        {error ? (
          <section className="border border-red-200 bg-white p-8">
            <h2 className="font-display text-2xl">Unable to load orders</h2>
            <p className="mt-3 text-sm text-chrome">
              We couldn't retrieve your orders right now. Please try again later.
            </p>
          </section>
        ) : orders.length === 0 ? (
          <section className="bg-white px-6 py-20 text-center sm:px-12">
            <p className="text-[9px] font-semibold tracking-[0.3em] text-chrome">
              YOUR MIVRA JOURNEY STARTS HERE
            </p>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl">
              No orders yet.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-chrome">
              Your purchases will appear here once you place your first order.
              Explore the collection and find your next essential.
            </p>
            <Link
              href="/new-arrivals"
              className="mt-9 inline-block bg-obsidian px-9 py-4 text-[9px] font-semibold tracking-[0.2em] text-white transition hover:bg-carbon"
            >
              EXPLORE NEW ARRIVALS
            </Link>
          </section>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-black/10 pb-4">
              <p className="text-[10px] font-semibold tracking-[0.2em]">
                ORDER HISTORY
              </p>
              <p className="text-xs text-chrome">
                {orders.length} {orders.length === 1 ? "ORDER" : "ORDERS"}
              </p>
            </div>

            {orders.map((order) => (
              <article
                key={order.id}
                className="border border-black/10 bg-white p-5 sm:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-5 border-b border-black/10 pb-6">
                  <div>
                    <p className="text-[9px] font-semibold tracking-[0.2em] text-chrome">
                      ORDER NUMBER
                    </p>
                    <h2 className="mt-2 font-display text-2xl">
                      {order.order_number}
                    </h2>
                    <p className="mt-2 text-xs text-chrome">
                      {new Date(order.created_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>

                  <div className="flex flex-col items-start gap-3 sm:items-end">
                    <span
                      className={`inline-block px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.15em] ${statusStyle(order.status)}`}
                    >
                      {order.status}
                    </span>
                    <p className="text-xs text-chrome">
                      Payment:{" "}
                      <span className="font-medium capitalize text-black">
                        {order.payment_status}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="divide-y divide-black/10">
                  {(order.order_items ?? []).map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 py-5"
                    >
                      <div className="relative h-28 w-20 shrink-0 overflow-hidden bg-[#EAE7E1]">
                        {item.product_image ? (
                          <Image
                            src={item.product_image}
                            alt={item.product_name}
                            fill
                            unoptimized
                            sizes="80px"
                            className="object-cover"
                          />
                        ) : null}
                      </div>

                      <div className="flex min-w-0 flex-1 flex-col justify-center">
                        <h3 className="text-sm font-medium">
                          {item.product_name}
                        </h3>
                        <p className="mt-2 text-[10px] text-chrome">
                          {item.size ? `Size: ${item.size}` : ""}
                          {item.size && item.color ? " / " : ""}
                          {item.color ? `Color: ${item.color}` : ""}
                        </p>
                        <p className="mt-2 text-[10px] text-chrome">
                          Quantity: {item.quantity}
                        </p>
                      </div>

                      <p className="shrink-0 self-center text-xs font-medium">
formatMoney(item.line_total)                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-end justify-between gap-5 border-t border-black/10 pt-6">
                  <div className="space-y-2 text-xs">
                    <p className="text-chrome">
                      Subtotal: {}formatMoney(order.subtotal)
                    </p>
                    <p className="text-chrome">
                      Shipping: {formatMoney(order.shipping_cost)}
                    </p>
                    <p className="pt-1 font-semibold text-black">
                      Total: {formatMoney(order.total)}
                    </p>
                  </div>

                  {order.tracking_url && (
                    <a
                      href={order.tracking_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-black/20 px-5 py-3 text-[9px] font-semibold tracking-[0.15em] transition hover:bg-black hover:text-white"
                    >
                      TRACK SHIPMENT →
                    </a>
                  )}
                </div>

                {order.tracking_number && (
                  <p className="mt-5 text-[10px] text-chrome">
                    Tracking number: {order.tracking_number}
                  </p>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default function OrdersPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-pearl">
          <AnnouncementBar />
          <Header />
          <div className="py-32 text-center text-[10px] tracking-[0.2em] text-chrome">
            LOADING YOUR ORDERS...
          </div>
        </main>
      }
    >
      <OrdersContent />
    </Suspense>
  );
}
