"use client";

import { useEffect, useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useBag, type BagItem } from "@/context/BagContext";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/currency";

type CheckoutFormProps = {
  customerEmail: string;
};

export default function CheckoutForm({
  customerEmail,
}: CheckoutFormProps) {
const { items: bagItems, isLoaded } = useBag();
const searchParams = useSearchParams();
const isBuyNow = searchParams.get("mode") === "buy-now";

const [message, setMessage] = useState("");
type PaymentMethod = "cod" | "jazzcash" | "easypaisa" | "bank_transfer";

const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("cod");
const [hasMounted, setHasMounted] = useState(false);
const [buyNowItem, setBuyNowItem] = useState<BagItem | null>(null);
const [buyNowLoaded, setBuyNowLoaded] = useState(false);

const buyNowProduct = isBuyNow && buyNowItem
  ? products.find((product) => product.id === buyNowItem.productId)
  : null;

const returnHref = isBuyNow && buyNowProduct
  ? `/products/${buyNowProduct.slug}`
  : "/cart";

const returnLabel = isBuyNow
  ? "RETURN TO PRODUCT"
  : "RETURN TO BAG";

useEffect(() => {
  setHasMounted(true);

  if (isBuyNow) {
    try {
      const storedItem = sessionStorage.getItem("mivra-buy-now");

      if (storedItem) {
        setBuyNowItem(JSON.parse(storedItem) as BagItem);
      }
    } catch {
      setBuyNowItem(null);
    }

    setBuyNowLoaded(true);
  }
}, [isBuyNow]);

const items = isBuyNow
  ? buyNowItem
    ? [buyNowItem]
    : []
  : bagItems;

const subtotal = items.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);

const itemCount = items.reduce(
  (total, item) => total + item.quantity,
  0
);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(
      "Your details have been checked in this preview. Payment is not connected yet, and no order has been placed."
    );
  }

  if (
  !hasMounted ||
  !isLoaded ||
  (isBuyNow && !buyNowLoaded)
) {
    return (
      <main className="min-h-[60vh] flex items-center justify-center">
        <p className="text-xs uppercase tracking-[0.2em]">
          Loading your bag...
        </p>
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
        <h1 className="font-serif text-3xl">Your bag is empty</h1>
        <p className="mt-3 text-sm text-neutral-500">
          Add something from the collection before checking out.
        </p>
        <Link
          href="/collections/men"
          className="mt-7 bg-black px-8 py-4 text-xs tracking-[0.18em] text-white"
        >
          EXPLORE COLLECTION
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-[#F4F2EE] px-5 py-12 md:px-10 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 border-b border-neutral-300 pb-7">
          <p className="text-[10px] tracking-[0.28em] text-neutral-500">
            MIVRA / YOUR BAG / CHECKOUT
          </p>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl">
            Delivery details
          </h1>
          <p className="mt-3 text-sm text-neutral-600">
            Complete your details for home delivery through a MIVRA partner store.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.85fr]">
          <form onSubmit={handleSubmit} className="space-y-10">
            <section>
              <div className="mb-6 flex items-center justify-between border-b border-neutral-300 pb-4">
                <h2 className="font-serif text-2xl">Contact information</h2>
                <span className="text-[10px] tracking-widest text-neutral-500">
                  01
                </span>
              </div>

              <label className="mb-2 block text-xs tracking-wide">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                name="email"
                defaultValue={customerEmail}
                required
                readOnly
                className="w-full border border-neutral-300 bg-transparent px-4 py-4 text-sm outline-none"
              />
              <p className="mt-2 text-xs text-neutral-500">
                Your account email address.
              </p>
            </section>

            <section>
              <div className="mb-6 flex items-center justify-between border-b border-neutral-300 pb-4">
                <h2 className="font-serif text-2xl">Delivery address</h2>
                <span className="text-[10px] tracking-widest text-neutral-500">
                  02
                </span>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-xs tracking-wide">
                    FULL NAME
                  </label>
                  <input
                    name="full_name"
                    autoComplete="name"
                    required
                    placeholder="Your full name"
                    className="w-full border border-neutral-300 bg-white px-4 py-4 text-sm outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs tracking-wide">
                    PHONE NUMBER
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    placeholder="+1 000 000 0000"
                    className="w-full border border-neutral-300 bg-white px-4 py-4 text-sm outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs tracking-wide">
                    COUNTRY
                  </label>
                  <select
                    name="country"
                    autoComplete="country-name"
                    required
                    defaultValue="Pakistan"
                    className="w-full border border-neutral-300 bg-white px-4 py-4 text-sm outline-none focus:border-black"
                  >
                    <option>United States</option>
                    <option>Pakistan</option>
                    <option>United Arab Emirates</option>
                    <option>United Kingdom</option>
                    <option>Canada</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-xs tracking-wide">
                    STREET ADDRESS
                  </label>
                  <input
                    name="address"
                    autoComplete="street-address"
                    required
                    placeholder="House number and street name"
                    className="w-full border border-neutral-300 bg-white px-4 py-4 text-sm outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs tracking-wide">
                    CITY
                  </label>
                  <input
                    name="city"
                    autoComplete="address-level2"
                    required
                    placeholder="City"
                    className="w-full border border-neutral-300 bg-white px-4 py-4 text-sm outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs tracking-wide">
                    STATE / REGION
                  </label>
                  <input
                    name="state"
                    autoComplete="address-level1"
                    placeholder="State or region"
                    className="w-full border border-neutral-300 bg-white px-4 py-4 text-sm outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs tracking-wide">
                    POSTAL CODE
                  </label>
                  <input
                    name="postal_code"
                    autoComplete="postal-code"
                    required
                    placeholder="ZIP / postal code"
                    className="w-full border border-neutral-300 bg-white px-4 py-4 text-sm outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs tracking-wide">
                    DELIVERY NOTE (OPTIONAL)
                  </label>
                  <input
                    name="delivery_note"
                    placeholder="Landmark or instructions"
                    className="w-full border border-neutral-300 bg-white px-4 py-4 text-sm outline-none focus:border-black"
                  />
                </div>
              </div>
            </section>

            <section className="border border-neutral-300 bg-white p-5 md:p-6">
              <p className="text-[10px] tracking-[0.22em] text-neutral-500">
                MIVRA PARTNER-STORE DELIVERY
              </p>
              <h3 className="mt-3 font-serif text-xl">
                Delivered to your doorstep
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-600">
                Your delivery address will be used to identify the nearest
                participating MIVRA partner store. The parcel will be sent
                to that store, and its team will arrange delivery to your
                location.
              </p>
              <p className="mt-3 text-xs leading-6 text-neutral-500">
                Store assignment, delivery availability, delivery charges
                and estimated delivery time will be confirmed once the
                partner-store network is configured.
              </p>
            </section>

<section className="border border-neutral-300 bg-white p-5 md:p-6">
  <p className="text-[10px] tracking-[0.22em] text-neutral-500">
    PAYMENT
  </p>

  <h3 className="mt-3 font-serif text-xl">
    Choose your payment method
  </h3>

  <p className="mt-2 text-xs leading-6 text-neutral-500">
    Select how you would prefer to pay for your MIVRA order.
  </p>

  <div className="mt-6 space-y-3">
    {[
      { value: "cod", label: "Cash on Delivery", detail: "Pay when your order arrives." },
      { value: "jazzcash", label: "JazzCash", detail: "Mobile wallet payment — integration pending." },
      { value: "easypaisa", label: "Easypaisa", detail: "Mobile wallet payment — integration pending." },
      { value: "bank_transfer", label: "Bank Transfer", detail: "Bank details will be provided when available." },
    ].map((option) => (
      <label
        key={option.value}
        className={`flex cursor-pointer items-start gap-4 border p-4 transition ${
          paymentMethod === option.value
            ? "border-black bg-[#F4F2EE]"
            : "border-neutral-200 hover:border-neutral-500"
        }`}
      >
        <input
          type="radio"
          name="payment_method"
          value={option.value}
          checked={paymentMethod === option.value}
          onChange={() =>
            setPaymentMethod(option.value as PaymentMethod)
          }
          className="mt-1 accent-black"
        />

        <span className="flex-1">
          <span className="block text-sm font-medium">
            {option.label}
          </span>
          <span className="mt-1 block text-xs text-neutral-500">
            {option.detail}
          </span>
        </span>
      </label>
    ))}
  </div>

  <p className="mt-5 border-t border-neutral-200 pt-4 text-[10px] leading-5 tracking-wide text-neutral-500">
    TEST MODE — PAYMENT COLLECTION IS NOT ACTIVE. NO PAYMENT WILL BE TAKEN.
  </p>
</section>

            <button
              type="submit"
              className="w-full bg-[#090909] px-7 py-5 text-xs tracking-[0.2em] text-white transition hover:bg-neutral-700"
            >
REVIEW ORDER DETAILS
  </button>

            {message && (
              <p
                role="status"
                className="border border-neutral-300 bg-white p-4 text-sm leading-6 text-neutral-600"
              >
                {message}
              </p>
            )}

          <Link
  href={returnHref}
  className="inline-block text-xs tracking-widest underline underline-offset-4"
>
  ? {returnLabel}
</Link>
          </form>

          <aside className="h-fit border border-neutral-300 bg-white p-5 md:p-7 lg:sticky lg:top-8">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-5">
              <h2 className="font-serif text-2xl">Your selection</h2>
              <span className="text-xs text-neutral-500">
                {itemCount} ITEMS
              </span>
            </div>

            <div className="space-y-6 py-7">
              {items.map((item, index) => (
                <div
                  key={`${item.productId}-${item.size}-${item.color}-${index}`}
                  className="flex gap-4"
                >
                  <div className="relative h-28 w-20 shrink-0 bg-[#F4F2EE]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-medium">{item.name}</h3>
                    <p className="mt-2 text-xs text-neutral-500">
                      Colour: {item.color}
                    </p>
                    <p className="mt-1 text-xs text-neutral-500">
                      Size: {item.size}
                    </p>
                    <p className="mt-1 text-xs text-neutral-500">
                      Quantity: {item.quantity}
                    </p>
                    <p className="mt-3 text-sm">
                     {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 border-t border-neutral-200 pt-6 text-sm">
              <div className="flex justify-between">
                <span className="text-neutral-500">Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Partner-store delivery</span>
                <span className="text-xs text-neutral-500">To be confirmed</span>
              </div>
              <div className="flex justify-between border-t border-neutral-200 pt-5 font-medium">
                <span>Estimated total</span>
                <span>{formatPrice(subtotal)} + delivery</span>
              </div>
            </div>

            <p className="mt-6 text-[10px] leading-5 tracking-wide text-neutral-500">
              PAYMENT HAS NOT BEEN CONNECTED. NO ORDER OR PAYMENT WILL BE
              CREATED FROM THIS PREVIEW.
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
}
