"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    eyebrow: "THE NEW SEASON / 2026",
    title: "STYLE THAT\nSPEAKS.",
    description: "A new perspective on everyday dressing.",
    category: "WOMEN",
    href: "/collections/women",
    image: "/images/editorial/womens-camel-coat-editorial.png",
    position: "center 35%",
  },
  {
    eyebrow: "THE MODERN UNIFORM",
    title: "OWN YOUR\nPRESENCE.",
    description: "Contemporary essentials. Unmistakable attitude.",
    category: "MEN",
    href: "/collections/men",
   image: "/images/editorial/mens-leather-editorial.png",
    position: "center 35%",
  },
  {
    eyebrow: "THE MIVRA EDIT",
    title: "BEYOND THE\nORDINARY.",
    description: "Discover pieces that define your own direction.",
    category: "EXPLORE",
    href: "/collections",
    image: "/images/editorial/womens-leather-editorial.png",
    position: "center 35%",
  },
];

export default function LiveEditorial() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
  }, 2000);

    return () => window.clearInterval(timer);
  }, [paused]);

  const current = slides[active];

  const previous = () => {
    setActive((current) => (current - 1 + slides.length) % slides.length);
  };

  const next = () => {
    setActive((current) => (current + 1) % slides.length);
  };

  return (
    <section
      className="bg-obsidian text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="MIVRA editorial campaigns"
    >
      <div className="relative min-h-[620px] overflow-hidden sm:min-h-[700px] lg:min-h-[760px]">
        {/* Campaign photograph */}
        <div
          key={active}
          className="absolute inset-0 animate-editorial-image bg-cover"
          style={{
            backgroundImage: `url("${current.image}")`,
            backgroundPosition: current.position,
          }}
        />

        {/* Image contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-black/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

        {/* Campaign content */}
        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-[1600px] flex-col justify-center px-6 pb-28 pt-20 sm:min-h-[700px] sm:px-12 lg:min-h-[760px] lg:px-20">
          <div className="max-w-3xl">
            <p className="mb-7 text-[10px] font-semibold tracking-[0.35em] text-white/80 sm:text-xs">
              {current.eyebrow}
            </p>

            <h1
              key={`title-${active}`}
              className="animate-editorial-text whitespace-pre-line font-display text-[clamp(4rem,10vw,9.5rem)] font-bold leading-[0.83] tracking-[-0.085em]"
            >
              {current.title}
            </h1>

            <p className="mt-8 max-w-sm text-sm leading-7 text-white/80 sm:text-base">
              {current.description}
            </p>

            <Link
              href={current.href}
              className="mt-9 inline-flex items-center gap-8 border border-white/70 px-7 py-4 text-[10px] font-semibold tracking-[0.2em] transition-all duration-300 hover:bg-white hover:text-obsidian"
            >
              DISCOVER {current.category}
              <span className="text-base">↗</span>
            </Link>
          </div>
        </div>

        {/* Slide controls */}
        <div className="absolute bottom-8 left-6 right-6 z-20 mx-auto flex max-w-[1600px] items-end justify-between sm:left-12 sm:right-12 lg:left-20 lg:right-20">
          <div className="flex items-center gap-3">
            {slides.map((slide, index) => (
              <button
                key={slide.category}
                type="button"
                aria-label={`Show campaign ${index + 1}`}
                aria-current={active === index}
                onClick={() => setActive(index)}
                className={`h-[3px] transition-all duration-500 ${
                  active === index
                    ? "w-12 bg-white"
                    : "w-6 bg-white/40 hover:bg-white/80"
                }`}
              />
            ))}

            <span className="ml-3 text-[10px] tracking-[0.2em] text-white/70">
              0{active + 1} / 0{slides.length}
            </span>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous campaign"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 text-xl transition hover:bg-white hover:text-obsidian"
            >
              ←
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next campaign"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 text-xl transition hover:bg-white hover:text-obsidian"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
