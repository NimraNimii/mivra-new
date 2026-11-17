"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const fashionCards = [
  {
    name: "Women's Coats",
    label: "WOMEN",
    detail: "THE ART OF TAILORED OUTERWEAR",
    number: "01",
    image: "/images/collections/womens-coats-black-model.webp",
    href: "/collections/women/coats",
    position: "center 38%",
    edition: "THE OUTERWEAR EDIT",
  },
  {
    name: "Women's Leather",
    label: "WOMEN",
    detail: "A STUDY IN MODERN LEATHER",
    number: "02",
    image: "/images/collections/womens-leather-black-model.webp",
    href: "/collections/women/leather-jackets",
    position: "center 35%",
    edition: "THE LEATHER EDIT",
  },
  {
    name: "Men's Leather",
    label: "MEN",
    detail: "DISTINCTIVE BY DESIGN",
    number: "03",
    image: "/images/collections/mens-leather-black-model.webp",
    href: "/collections/men/leather-jackets",
    position: "center 35%",
    edition: "THE SIGNATURE EDIT",
  },
  {
    name: "Men's Overcoats",
    label: "MEN",
    detail: "FORM MEETS FUNCTION",
    number: "04",
    image: "/images/collections/mens-overcoats-black-model.webp",
    href: "/collections/men/overcoats",
    position: "center 38%",
    edition: "THE WINTER EDIT",
  },
  {
    name: "Men's Knitwear",
    label: "MEN",
    detail: "TEXTURE. WARMTH. CHARACTER.",
    number: "05",
    image: "/images/collections/mens-knitwear-black-model.webp",
    href: "/collections/men",
    position: "center 35%",
    edition: "THE KNITWEAR EDIT",
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
      const card = track?.querySelector<HTMLElement>(
        "[data-fashion-card]"
      );

      if (!track || !card) return;

      const step = card.offsetWidth + 20;
      const maxScroll = track.scrollWidth - track.clientWidth;

      if (track.scrollLeft >= maxScroll - 8) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        track.scrollBy({
          left: step,
          behavior: "smooth",
        });
      }
    }, 4800);

    return () => window.clearInterval(timer);
  }, [paused, reducedMotion]);

  const move = (direction: -1 | 1) => {
    const track = trackRef.current;
    const card = track?.querySelector<HTMLElement>(
      "[data-fashion-card]"
    );

    if (!track || !card) return;

    track.scrollBy({
      left: direction * (card.offsetWidth + 20),
      behavior: "smooth",
    });
  };

  return (
    <section
      id="shop-the-edit"
      aria-labelledby="collection-edit-title"
      className="relative overflow-hidden bg-[#F3F0EB] pt-12 pb-10 sm:pt-14 sm:pb-12 lg:pt-16 lg:pb-14"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[450px] w-[450px] rounded-full bg-[#D8C7B2]/20 blur-[120px]"
      />

      <div className="relative mx-auto max-w-[1680px] px-5 sm:px-10 lg:px-14">

        {/* Editorial heading */}
        <div className="mb-10 flex items-end justify-between gap-5 border-b border-[#9B8D7C]/30 pb-8 sm:mb-12 sm:pb-10">

          <div className="max-w-5xl">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#A88E70]" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.38em] text-[#887967] sm:text-[10px]">
                THE MIVRA JOURNAL
              </p>

              <span className="h-px w-8 bg-[#A88E70]" />
            </div>

            <h2
              id="collection-edit-title"
              className="font-display text-[clamp(2.5rem,6.3vw,6.5rem)] font-normal leading-[0.92] tracking-[-0.065em] text-[#201D19]"
            >
              THE COLLECTION
              <br className="hidden sm:block" />
              <span className="italic text-[#9B846B]">
                EDITION.
              </span>
            </h2>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
              <p className="text-[9px] font-medium uppercase tracking-[0.24em] text-[#887967]">
                A CURATED EXPRESSION OF STYLE
              </p>

              <span className="hidden h-1 w-1 rounded-full bg-[#B5A797] sm:block" />

              <p className="text-[9px] uppercase tracking-[0.22em] text-[#887967]">
                JACKETS / COATS / LEATHER / KNITWEAR
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden shrink-0 items-center gap-3 pb-1 sm:flex">

            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Previous collections"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#A99A88]/50 text-xl text-[#28231E] transition-all duration-300 hover:border-[#28231E] hover:bg-[#28231E] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
            </button>

            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Next collections"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#A99A88]/50 text-xl text-[#28231E] transition-all duration-300 hover:border-[#28231E] hover:bg-[#28231E] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

          </div>
        </div>

        {/* Collection cards */}
        <div
          ref={trackRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-5"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >

          {fashionCards.map((card, index) => (
            <Link
              key={card.name}
              href={card.href}
              data-fashion-card
              className="group relative w-[84vw] max-w-[390px] flex-none snap-start overflow-hidden bg-[#211D19] sm:w-[48vw] lg:w-[calc((100%-80px)/5)]"
            >

              <div className="relative aspect-[3/4] overflow-hidden">

                {/* Main image */}
                <Image
                  src={card.image}
                  alt={`${card.name} luxury fashion collection`}
                  fill
                  priority={index < 2}
                  sizes="(max-width: 640px) 84vw, (max-width: 1024px) 48vw, 20vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.055]"
                  style={{
                    objectPosition: card.position,
                  }}
                />

                {/* Cinematic overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/85" />

                <div className="absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/10" />

                {/* Top glass panel */}
                <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-2 sm:inset-x-5 sm:top-5">

                  <span className="border border-white/30 bg-white/[0.17] px-3 py-2 text-[8px] font-semibold uppercase tracking-[0.25em] text-white shadow-lg backdrop-blur-xl sm:text-[9px]">
                    {card.label}
                  </span>

                  <span className="border border-white/20 bg-black/20 px-3 py-2 text-[8px] tracking-[0.2em] text-white/90 backdrop-blur-xl">
                    {card.number} / 05
                  </span>

                </div>

                {/* Bottom editorial content */}
                <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4">

                  <div className="border border-white/25 bg-[#211D19]/30 p-4 shadow-2xl backdrop-blur-[14px] transition-all duration-500 group-hover:border-white/45 group-hover:bg-[#211D19]/45 sm:p-5">

                    <p className="mb-3 text-[7px] font-semibold uppercase tracking-[0.25em] text-[#D8C5A8] sm:text-[8px]">
                      {card.edition}
                    </p>

                    <p className="mb-2 text-[8px] font-medium uppercase tracking-[0.18em] text-white/70">
                      {card.detail}
                    </p>

                    <div className="flex items-end justify-between gap-2">

                      <h3 className="font-display text-[clamp(1.45rem,2vw,2.1rem)] font-normal leading-[1.05] tracking-[-0.035em] text-white">
                        {card.name}
                      </h3>

                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/60 text-lg text-white transition-all duration-500 group-hover:rotate-45 group-hover:border-white group-hover:bg-white group-hover:text-[#211D19]">
                        ↗
                      </span>

                    </div>

                    <div className="mt-4 h-px w-full overflow-hidden bg-white/25">
                      <div className="h-full w-0 bg-[#D8C5A8] transition-all duration-700 group-hover:w-full" />
                    </div>

                  </div>
                </div>

              </div>
            </Link>
          ))}

        </div>

        {/* Footer editorial line */}
        <div className="mt-5 flex flex-col justify-between gap-4 border-t border-[#9B8D7C]/30 pt-6 sm:flex-row sm:items-center">

          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-[#A88E70]" />

            <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#887967]">
              DEFINE YOUR STYLE.
            </p>
          </div>

          <Link
            href="/collections"
            className="group flex w-fit items-center gap-3 border-b border-[#887967]/60 pb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#28231E] transition-colors hover:border-[#A88E70] hover:text-[#9B846B]"
          >
            EXPLORE THE COMPLETE COLLECTION

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </Link>

        </div>

      </div>
    </section>
  );
}
