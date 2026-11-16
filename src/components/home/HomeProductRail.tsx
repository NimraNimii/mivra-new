
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { products } from "@/data/products";
import { useBag } from "@/context/BagContext";
import { formatPrice } from "@/lib/currency";

export default function HomeProductRail() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { addItem } = useBag();

  const featuredProducts = products.filter(
    (product) => product.isNewArrival
  ).slice(0, 8);

  const [selectedSizes, setSelectedSizes] = useState<
    Record<string, string>
  >({});
  const [messages, setMessages] = useState<Record<string, string>>({});

  const move = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;

    track.scrollBy({
      left: direction * track.clientWidth * 0.72,
      behavior: "smooth",
    });
  };

  const quickAdd = (product: (typeof featuredProducts)[number]) => {
    const size = selectedSizes[product.id];

    if (!size) {
      setMessages((current) => ({
        ...current,
        [product.id]: "Please select a size first.",
      }));
      return;
    }

    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size,
      color: product.colors[0]?.name || "",
      quantity: 1,
    });

    setMessages((current) => ({
      ...current,
      [product.id]: "Added to your bag.",
    }));
  };

  return (
    <section className="overflow-hidden bg-pearl py-20 sm:py-28">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-10 lg:px-14">

        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-[9px] font-semibold tracking-[0.32em] text-chrome">
              JUST LANDED / THE LATEST SELECTION
            </p>

            <h2 className="font-display text-5xl leading-none tracking-[-0.055em] sm:text-7xl">
              NEW & NOTED<span className="text-taupe">.</span>
            </h2>

            <p className="mt-4 max-w-md text-sm leading-6 text-chrome">
              Discover the pieces defining the new MIVRA wardrobe.
            </p>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Previous products"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-black/20 text-xl transition hover:bg-obsidian hover:text-white"
            >
              {"\u2190"}
            </button>

            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Next products"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-black/20 text-xl transition hover:bg-obsidian hover:text-white"
            >
              {"\u2192"}
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-5"
          style={{ scrollbarWidth: "none" }}
        >
          {featuredProducts.map((product, index) => (
            <article
              key={product.id}
              className="w-[78vw] max-w-[390px] flex-none snap-start sm:w-[48vw] lg:w-[calc((100%-40px)/3)]"
            >
              <Link
                href={`/products/${product.slug}`}
                className="group relative block aspect-[4/5] overflow-hidden bg-[#E9E5DF]"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 640px) 78vw, (max-width: 1024px) 48vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                />

                {product.badge && (
                  <span className="absolute left-4 top-4 bg-pearl px-3 py-2 text-[8px] font-semibold tracking-[0.16em] text-obsidian">
                    {product.badge}
                  </span>
                )}

                <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-pearl text-lg text-obsidian transition-transform group-hover:rotate-45">
                  {"\u2197"}
                </span>
              </Link>

              <div className="flex items-start justify-between gap-3 pt-5">
                <div>
                  <p className="mb-2 text-[9px] tracking-[0.16em] text-chrome">
                    {product.audience.toUpperCase()} / {product.category.toUpperCase()}
                  </p>

                  <Link
                    href={`/products/${product.slug}`}
                    className="font-display text-xl leading-snug hover:opacity-60"
                  >
                    {product.name}
                  </Link>

                  <p className="mt-2 text-sm">
                   {formatPrice(product.price)}
                  </p>
                </div>

                <span className="text-[9px] tracking-[0.12em] text-chrome">
                  0{index + 1}
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => {
                      setSelectedSizes((current) => ({
                        ...current,
                        [product.id]: size,
                      }));
                      setMessages((current) => ({
                        ...current,
                        [product.id]: "",
                      }));
                    }}
                    aria-pressed={selectedSizes[product.id] === size}
                    className={`min-w-10 border px-3 py-2 text-[10px] transition ${
                      selectedSizes[product.id] === size
                        ? "border-obsidian bg-obsidian text-white"
                        : "border-black/20 hover:border-obsidian"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => quickAdd(product)}
                className="mt-3 w-full border border-obsidian px-4 py-3 text-[9px] font-semibold tracking-[0.18em] transition hover:bg-obsidian hover:text-white"
              >
                ADD TO BAG {"\u2192"}
              </button>

              {messages[product.id] && (
                <p role="status" className="mt-2 text-[10px] text-chrome">
                  {messages[product.id]}
                </p>
              )}
            </article>
          ))}
        </div>

        <div className="mt-7 flex justify-between border-t border-black/15 pt-5">
          <span className="text-[9px] tracking-[0.2em] text-chrome">
            DEFINE YOUR STYLE.
          </span>

          <Link
            href="/new-arrivals"
            className="border-b border-obsidian pb-1 text-[9px] font-semibold tracking-[0.16em]"
          >
            VIEW ALL NEW ARRIVALS {"\u2192"}
          </Link>
        </div>
      </div>
    </section>
  );
}
