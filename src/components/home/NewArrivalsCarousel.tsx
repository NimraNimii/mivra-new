
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/currency";

const featuredProducts = products
  .filter((product) => product.isNewArrival)
  .slice(0, 8);

export default function NewArrivalsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const update = () => setReducedMotion(media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  const move = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector<HTMLElement>(
      "[data-product-card]"
    );

    if (!card) return;

    track.scrollBy({
      left: direction * (card.offsetWidth + 20),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (paused || reducedMotion || featuredProducts.length < 2) return;

    const timer = window.setInterval(() => {
      const track = trackRef.current;
      if (!track) return;

      const card = track.querySelector<HTMLElement>(
        "[data-product-card]"
      );

      if (!card) return;

      const distance = card.offsetWidth + 20;
      const end = track.scrollWidth - track.clientWidth;

      if (track.scrollLeft >= end - 5) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        track.scrollBy({
          left: distance,
          behavior: "smooth",
        });
      }
    }, 4500);

    return () => window.clearInterval(timer);
  }, [paused, reducedMotion]);

  return (
    <section
      id="new-arrivals"
      className="overflow-hidden bg-[#F4F2EE] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-10 lg:px-14">

        <div className="mb-10 flex items-end justify-between gap-5 sm:mb-14">
          <div>
            <p className="mb-4 text-[9px] font-semibold tracking-[0.32em] text-[#777D82]">
              THE LATEST FROM MIVRA
            </p>

            <h2 className="font-display text-4xl leading-[0.95] tracking-[-0.045em] text-[#090909] sm:text-6xl">
              NEW ARRIVALS
              <span className="text-[#B5A797]">.</span>
            </h2>

            <p className="mt-4 max-w-md text-xs leading-6 tracking-wide text-[#777D82]">
              Discover considered essentials and contemporary
              silhouettes from the latest MIVRA collection.
            </p>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Previous products"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 text-xl transition hover:bg-[#090909] hover:text-white"
            >
              {"\u2190"}
            </button>

            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Next products"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 text-xl transition hover:bg-[#090909] hover:text-white"
            >
              {"\u2192"}
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-5"
          style={{ scrollbarWidth: "none" }}
        >
          {featuredProducts.map((product, index) => (
            <article
              key={product.id}
              data-product-card
              className="group w-[76vw] max-w-[340px] flex-none snap-start sm:w-[42vw] lg:w-[calc((100%-60px)/4)]"
            >
              <Link
                href={`/products/${product.slug}`}
                className="block"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#E9E5DF]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                   loading={index === 0 ? "eager" : "lazy"}
                    sizes="(max-width: 640px) 76vw, (max-width: 1024px) 42vw, 25vw"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />

                  {product.badge && (
                    <span className="absolute left-4 top-4 bg-[#F4F2EE] px-3 py-2 text-[8px] font-semibold tracking-[0.18em] text-[#090909]">
                      {product.badge}
                    </span>
                  )}

                  <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/80 text-lg text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#090909]">
                    {"\u2197"}
                  </span>
                </div>

                <div className="pt-4">
                  <p className="mb-2 text-[9px] tracking-[0.16em] text-[#777D82]">
                    {product.audience.toUpperCase()} /{" "}
                    {product.category.toUpperCase()}
                  </p>

                  <h3 className="font-display text-lg leading-snug text-[#090909] transition-opacity group-hover:opacity-60 sm:text-xl">
                    {product.name}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-[#090909]">
               {formatPrice(product.price)}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-6">
          <p className="text-[9px] tracking-[0.22em] text-[#777D82]">
            {featuredProducts.length.toString().padStart(2, "0")} SELECTED PIECES
          </p>

          <Link
            href="/new-arrivals"
            className="border-b border-[#090909] pb-1 text-[9px] font-semibold tracking-[0.2em] text-[#090909] transition-opacity hover:opacity-60"
          >
            VIEW ALL NEW ARRIVALS {"\u2197"}
          </Link>
        </div>

      </div>
    </section>
  );
}
