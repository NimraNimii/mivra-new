
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const campaigns = [
  {
    eyebrow: "01 / THE WOMEN'S EDIT",
    title: "A STUDY IN\nMODERN ELEGANCE.",
    description:
      "Considered silhouettes, refined layers and effortless expression. Discover a new perspective on contemporary dressing.",
    label: "EXPLORE WOMEN",
    href: "/collections/women",
    image: "/images/editorial/womens-camel-coat-editorial.png",
    imageAlt: "MIVRA women's camel coat editorial",
    theme: "light",
  },
  {
    eyebrow: "02 / THE MEN'S EDIT",
    title: "BUILT ON\nCHARACTER.",
    description:
      "Strong outerwear. Elevated essentials. A modern wardrobe defined by confidence and considered detail.",
    label: "EXPLORE MEN",
    href: "/collections/men",
    image: "/images/editorial/mens-leather-editorial.png",
    imageAlt: "MIVRA men's leather fashion editorial",
    theme: "dark",
  },
  {
    eyebrow: "03 / THE LEATHER EDIT",
    title: "MADE TO\nMAKE AN IMPRESSION.",
    description:
      "Distinctive textures and timeless attitude. Discover leather pieces designed to become part of your signature.",
    label: "DISCOVER LEATHER",
    href: "/collections",
    image: "/images/editorial/womens-leather-editorial.png",
    imageAlt: "MIVRA women's leather jacket editorial",
    theme: "light",
  },
];

export default function CampaignSpotlight() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updateMotion = () => setReducedMotion(media.matches);

    updateMotion();
    media.addEventListener("change", updateMotion);

    return () => media.removeEventListener("change", updateMotion);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % campaigns.length);
    }, 2000);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion]);

  const previous = () => {
    setActive((current) =>
      (current - 1 + campaigns.length) % campaigns.length
    );
  };

  const next = () => {
    setActive((current) => (current + 1) % campaigns.length);
  };

  const campaign = campaigns[active];
  const reverse = active % 2 === 1;
  const dark = campaign.theme === "dark";

  return (
    <section
      aria-label="MIVRA campaign spotlight"
      className="overflow-hidden bg-[#E9E5DF] py-16 sm:py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-10 lg:px-14">
        <div className="mb-8 flex items-end justify-between gap-5">
          <div>
            <p className="mb-3 text-[9px] font-semibold tracking-[0.32em] text-chrome">
              A CLOSER LOOK AT MIVRA
            </p>
            <h2 className="font-display text-4xl tracking-[-0.055em] sm:text-6xl">
              THE CAMPAIGN
              <span className="text-taupe">.</span>
            </h2>
          </div>

          <p className="hidden text-[9px] tracking-[0.2em] text-chrome sm:block">
            STORIES IN STYLE / 2026
          </p>
        </div>

        <div
          className={`grid min-h-[560px] overflow-hidden transition-colors duration-700 lg:min-h-[650px] lg:grid-cols-[1.35fr_0.85fr] ${
            dark ? "bg-[#242321] text-white" : "bg-[#D8D1C7] text-obsidian"
          }`}
        >
          <div
            className={`relative min-h-[390px] overflow-hidden bg-[#D1CBC2] lg:min-h-[650px] ${
              reverse ? "lg:order-2" : ""
            }`}
          >
            {campaigns.map((item, index) => (
              <div
                key={item.image}
              className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
                  active === index ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
                aria-hidden={active !== index}
              >
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 62vw"
                  className={`object-cover transition-transform duration-[7000ms] ease-out ${
                    active === index ? "scale-105" : "scale-100"
                  }`}
                />
              </div>
            ))}

            <div className="absolute left-5 top-5 z-10 bg-pearl px-4 py-3 text-[9px] font-semibold tracking-[0.2em] text-obsidian sm:left-8 sm:top-8">
              MIVRA / EDITORIAL
            </div>

            <div className="absolute bottom-5 right-5 z-10 text-[10px] font-medium tracking-[0.2em] text-white sm:bottom-8 sm:right-8">
              0{active + 1} — 0{campaigns.length}
            </div>
          </div>

          <div
            key={active}
        className={`flex flex-col justify-between px-7 py-9 animate-editorial-text sm:px-12 sm:py-12 lg:px-14 lg:py-16 ${
              reverse ? "lg:order-1" : ""
            }`}
          >
            <div>
              <p
                className={`mb-10 text-[9px] font-semibold tracking-[0.3em] ${
                  dark ? "text-white/55" : "text-chrome"
                }`}
              >
                {campaign.eyebrow}
              </p>

              <h3 className="whitespace-pre-line font-display text-[clamp(3.2rem,5vw,5.8rem)] leading-[0.91] tracking-[-0.065em]">
                {campaign.title}
              </h3>

              <p
                className={`mt-8 max-w-sm text-sm leading-7 ${
                  dark ? "text-white/65" : "text-black/65"
                }`}
              >
                {campaign.description}
              </p>

              <Link
                href={campaign.href}
                className={`mt-9 inline-flex min-h-14 min-w-[220px] items-center justify-between border px-5 text-[9px] font-semibold tracking-[0.2em] transition-colors ${
                  dark
                    ? "border-white/60 hover:bg-white hover:text-obsidian"
                    : "border-obsidian/70 hover:bg-obsidian hover:text-white"
                }`}
              >
                {campaign.label}
                <span className="text-base">{"\u2197"}</span>
              </Link>
            </div>

            <div
              className={`mt-12 border-t pt-6 ${
                dark ? "border-white/20" : "border-black/20"
              }`}
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-[9px] tracking-[0.22em]">
                  DEFINE YOUR STYLE.
                </span>

                <span className="text-[9px] tracking-[0.2em]">
                  MIVRA / 2026
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="flex flex-1 gap-2">
                  {campaigns.map((item, index) => (
                    <button
                      key={item.eyebrow}
                      type="button"
                      aria-label={`Show ${item.eyebrow}`}
                      aria-pressed={active === index}
                      onClick={() => setActive(index)}
                      className={`h-[3px] flex-1 transition-colors duration-500 ${
                        active === index
                          ? dark
                            ? "bg-white"
                            : "bg-obsidian"
                          : dark
                            ? "bg-white/25"
                            : "bg-obsidian/20"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={previous}
                    aria-label="Previous campaign"
                    className={`flex h-10 w-10 items-center justify-center rounded-full border text-lg transition ${
                      dark
                        ? "border-white/40 hover:bg-white hover:text-obsidian"
                        : "border-obsidian/40 hover:bg-obsidian hover:text-white"
                    }`}
                  >
                    {"\u2190"}
                  </button>

                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next campaign"
                    className={`flex h-10 w-10 items-center justify-center rounded-full border text-lg transition ${
                      dark
                        ? "border-white/40 hover:bg-white hover:text-obsidian"
                        : "border-obsidian/40 hover:bg-obsidian hover:text-white"
                    }`}
                  >
                    {"\u2192"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
