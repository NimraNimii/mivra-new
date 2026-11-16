"use client";

import Image from "next/image";
import Link from "next/link";
import { useBag } from "@/context/BagContext";
import { formatPrice } from "@/lib/currency";

export default function CartPage() {
  const {
    items,
    itemCount,
    subtotal,
    isLoaded,
    updateQuantity,
    removeItem,
  } = useBag();

  return (
    <main className="mx-auto min-h-screen max-w-[1500px] px-5 py-12 sm:px-10 lg:px-14">
      <div className="mb-10 border-b border-black/10 pb-8">
        <p className="mb-3 text-[10px] tracking-[0.25em] text-chrome">
          MIVRA / YOUR SELECTION
        </p>
        <h1 className="font-display text-4xl sm:text-5xl">
          YOUR BAG
        </h1>
        <p className="mt-3 text-xs tracking-widest text-chrome">
          {isLoaded
            ? `${itemCount} ${itemCount === 1 ? "ITEM" : "ITEMS"}`
            : "RESTORING YOUR SELECTION"}
        </p>
      </div>

      {!isLoaded ? (
        <section
          className="flex min-h-[420px] flex-col items-center justify-center text-center"
          aria-live="polite"
        >
          <p className="text-[10px] tracking-[0.25em] text-chrome">
            MIVRA / YOUR SELECTION
          </p>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl">
            Restoring your selection.
          </h2>
          <p className="mt-4 text-sm text-chrome">
            Just a moment while we retrieve your bag.
          </p>
        </section>
      ) : items.length === 0 ? (
        <section className="flex min-h-[420px] flex-col items-center justify-center text-center">
          <p className="text-[10px] tracking-[0.25em] text-chrome">
            YOUR SELECTION AWAITS
          </p>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl">
            Your bag is currently empty.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-chrome">
            Discover considered essentials and find pieces that define your style.
          </p>
          <Link
            href="/new-arrivals"
            className="mt-8 bg-obsidian px-9 py-4 text-[10px] font-semibold tracking-[0.2em] text-white transition hover:bg-carbon"
          >
            DISCOVER NEW ARRIVALS
          </Link>
        </section>
      ) : (
        <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:gap-16">
          <section>
            <div className="mb-5 hidden grid-cols-[1fr_120px_100px] border-b border-black/10 pb-3 text-[9px] font-semibold tracking-[0.2em] text-chrome sm:grid">
              <span>PRODUCT</span>
              <span>QUANTITY</span>
              <span className="text-right">TOTAL</span>
            </div>

            <div className="divide-y divide-black/10">
              {items.map((item) => (
                <article
                  key={`${item.productId}-${item.size}-${item.color}`}
                  className="grid gap-5 py-6 sm:grid-cols-[1fr_120px_100px] sm:items-center"
                >
                  <div className="flex gap-5">
                    <Link
                      href={`/products/${item.productId}`}
                      className="relative aspect-[3/4] w-24 shrink-0 overflow-hidden bg-[#E9E5DF] sm:w-28"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="112px"
                        className="object-cover"
                      />
                    </Link>

                    <div className="flex min-w-0 flex-col items-start py-1">
                      <p className="font-display text-lg leading-snug">
                        {item.name}
                      </p>
                      <p className="mt-2 text-[10px] tracking-widest text-chrome">
                        COLOUR: {item.color}
                      </p>
                      <p className="mt-1 text-[10px] tracking-widest text-chrome">
                        SIZE: {item.size}
                      </p>
                      <p className="mt-3 text-sm">
                        {formatPrice(item.price)}
                      </p>
                      <button
                        type="button"
                        onClick={() =>
                          removeItem(item.productId, item.size, item.color)
                        }
                        className="mt-auto pt-4 text-[9px] font-semibold tracking-[0.15em] text-chrome underline underline-offset-4 transition hover:text-obsidian"
                      >
                        REMOVE
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-[9px] tracking-widest text-chrome sm:hidden">
                      QTY
                    </span>
                    <div className="flex items-center border border-black/15">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.productId,
                            item.size,
                            item.color,
                            item.quantity - 1
                          )
                        }
                        aria-label={`Decrease quantity of ${item.name}`}
                        className="px-3 py-2 text-sm hover:bg-black/5"
                      >
                        −
                      </button>
                      <span className="min-w-8 text-center text-xs tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.productId,
                            item.size,
                            item.color,
                            item.quantity + 1
                          )
                        }
                        aria-label={`Increase quantity of ${item.name}`}
                        className="px-3 py-2 text-sm hover:bg-black/5"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="text-[9px] tracking-widest text-chrome sm:hidden">
                      ITEM TOTAL
                    </span>
                    <p className="mt-1 text-sm font-medium tabular-nums">
                     {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <Link
              href="/collections/women"
              className="mt-7 inline-block border-b border-black/40 pb-2 text-[9px] font-semibold tracking-[0.18em] transition hover:border-black"
            >
              CONTINUE SHOPPING
            </Link>
          </section>

          <aside className="h-fit border border-black/10 p-6 sm:p-8">
            <p className="text-[10px] font-semibold tracking-[0.2em]">
              ORDER SUMMARY
            </p>

            <div className="mt-7 flex justify-between text-sm">
              <span className="text-chrome">Subtotal</span>
              <span className="font-medium tabular-nums">
            {formatPrice(subtotal)}
              </span>
            </div>

            <div className="mt-4 flex justify-between border-t border-black/10 pt-5">
              <span className="text-xs font-semibold tracking-widest">
                TOTAL
              </span>
              <span className="text-lg font-medium tabular-nums">
              {formatPrice(subtotal)}
              </span>
            </div>

            <p className="mt-5 text-[10px] leading-6 text-chrome">
              Shipping, taxes and payment options will be confirmed during checkout.
            </p>
<Link
  href="/checkout"
  className="mt-7 flex w-full items-center justify-center bg-obsidian px-6 py-5 text-[10px] font-semibold tracking-[0.2em] text-white transition hover:bg-carbon"
>
  PROCEED TO CHECKOUT
</Link>
            <div className="mt-7 border-t border-black/10 pt-5">
              <p className="text-[9px] leading-5 tracking-widest text-chrome">
                MIVRA — DEFINE YOUR STYLE.
              </p>
            </div>
          </aside>
        </div>
      )}
    </main>
  );
}
