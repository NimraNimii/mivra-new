
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const fashionCards = [
  {
    name: "Women's Coats",
    label: "WOMEN",
    detail: "TAILORED OUTERWEAR",
    image: "/images/collections/womens-coats.webp",
    href: "/collections/women/coats",
    position: "center 35%",
  },
  {
    name: "Women's Leather Jackets",
    label: "WOMEN",
    detail: "MODERN LEATHER LAYERS",
    image: "/images/collections/womens-leather-jackets.webp",
    href: "/collections/women/leather-jackets",
    position: "center 30%",
  },
  {
    name: "Men's Leather Jackets",
    label: "MEN",
    detail: "PREMIUM LEATHER ESSENTIALS",
    image: "/images/collections/mens-leather-jackets.webp",
    href: "/collections/men/leather-jackets",
    position: "center 30%",
  },
  {
    name: "Men's Overcoats",
    label: "MEN",
    detail: "REFINED WINTER OUTERWEAR",
    image: "/images/collections/mens-overcoats.webp",
    href: "/collections/men/overcoats",
    position: "center 30%",
  },
];

export default function LiveFashionCarousel() {
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

  useEffect(() => {
    if (paused || reducedMotion) return;

    const timer = window.setInterval(() => {
      const track = trackRef.current;
      if (!track) return;

      const card = track.querySelector<HTMLElement>(
        "[data-fashion-card]"
      );

      if (!card) return;

      const distance = card.offsetWidth + 18;
      const end = track.scrollWidth - track.clientWidth;

      if (track.scrollLeft >= end - 5) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        track.scrollBy({
          left: distance,
          behavior: "smooth",
        });
      }
    }, 3500);

    return () => window.clearInterval(timer);
  }, [paused, reducedMotion]);

  const move = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector<HTMLElement>(
      "[data-fashion-card]"
    );

    if (!card) return;

    track.scrollBy({
      left: direction * (card.offsetWidth + 18),
      behavior: "smooth",
    });
  };

  return (
    <section
      id="shop-the-edit"
      className="overflow-hidden bg-pearl py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-10 lg:px-14">

        <div className="mb-9 flex items-end justify-between sm:mb-12">
          <div>
            <p className="mb-4 text-[9px] font-semibold tracking-[0.32em] text-chrome">
              DISCOVER YOUR NEXT LOOK / MIVRA EDIT
            </p>

            <h2 className="font-display text-4xl leading-[0.95] tracking-[-0.045em] sm:text-6xl">
              THE COLLECTION EDIT
              <span className="text-taupe">.</span>
            </h2>

            <p className="mt-4 text-[10px] tracking-[0.18em] text-chrome">
              JACKETS · COATS · LEATHER · OUTERWEAR
            </p>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Previous collections"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 text-xl transition hover:bg-obsidian hover:text-white"
            >
              ←
            </button>

            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Next collections"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 text-xl transition hover:bg-obsidian hover:text-white"
            >
              →
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
          className="flex snap-x snap-mandatory gap-[18px] overflow-x-auto scroll-smooth pb-5"
          style={{ scrollbarWidth: "none" }}
        >
          {fashionCards.map((card, index) => (
            <Link
              key={card.name}
              href={card.href}
              data-fashion-card
              className="group relative w-[78vw] max-w-[340px] flex-none snap-start overflow-hidden bg-carbon sm:w-[42vw] lg:w-[calc((100%-54px)/4)]"
            >
              <div className="relative aspect-[3/4] overflow-hidden">

                <Image
                  src={card.image}
                  alt={card.name + " fashion collection"}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 640px) 78vw, (max-width: 1024px) 42vw, 25vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  style={{ objectPosition: card.position }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-black/10" />

                <span className="absolute left-5 top-5 bg-pearl px-3 py-2 text-[8px] font-semibold tracking-[0.2em] text-obsidian">
                  {card.label}
                </span>

                <div className="absolute inset-x-5 bottom-6 text-white">
                  <p className="mb-2 text-[9px] font-semibold tracking-[0.18em] text-white/80">
                    {card.detail}
                  </p>

                  <div className="flex items-end justify-between gap-2">
                    <h3 className="font-display text-2xl leading-tight sm:text-3xl">
                      {card.name}
                    </h3>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/70 transition group-hover:bg-white group-hover:text-obsidian">
                      ↗
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-[9px] tracking-[0.22em] text-chrome">
            DEFINE YOUR STYLE.
          </p>

          <Link
            href="/collections"
            className="border-b border-obsidian pb-1 text-[9px] font-semibold tracking-[0.18em]"
          >
            EXPLORE ALL COLLECTIONS ↗
          </Link>
        </div>

      </div>
    </section>
  );
}
