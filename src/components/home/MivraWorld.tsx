"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function MivraWorld() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Discover the MIVRA philosophy"
      className="overflow-hidden bg-[#F4F2EE] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-10 lg:px-14">
        <div className="mb-12 flex items-end justify-between gap-5">
          <div>
            <p className="mb-4 text-[9px] font-semibold tracking-[0.32em] text-chrome">
              AN EXPRESSION OF MODERN STYLE
            </p>
            <h2 className="font-display text-5xl tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              THE MIVRA
              <br />
              <span className="text-taupe">WORLD.</span>
            </h2>
          </div>

          <span className="hidden pb-2 text-[9px] tracking-[0.2em] text-chrome sm:block">
            EST. IN STYLE / 2026
          </span>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div
            className={`group relative min-h-[440px] overflow-hidden bg-[#DED8CF] transition-all duration-[1200ms] ease-out sm:min-h-[620px] ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <Image
              src="/images/products/mivra_editorial_08_womens_trench_and_trousers_model.jpg"
              alt="MIVRA contemporary women's trench and tailored trousers"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.04]"
            />

            <span className="absolute bottom-5 left-5 bg-pearl px-4 py-3 text-[9px] font-semibold tracking-[0.2em] text-obsidian">
              THE WOMEN'S PERSPECTIVE
            </span>

            <span className="absolute right-5 top-5 text-[9px] font-semibold tracking-[0.2em] text-white">
              M / 01
            </span>
          </div>

          <div
            className={`relative flex flex-col justify-center transition-all delay-200 duration-[1200ms] ease-out ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <p className="mb-7 text-[9px] font-semibold tracking-[0.3em] text-chrome">
              MORE THAN WHAT YOU WEAR
            </p>

            <h3 className="max-w-xl font-display text-[clamp(3.2rem,5.5vw,6rem)] leading-[0.91] tracking-[-0.065em]">
              STYLE IS
              <br />
              A WAY OF
              <br />
              <span className="text-taupe">BEING.</span>
            </h3>

            <p className="mt-8 max-w-md text-sm leading-7 text-[#68645F] sm:text-base">
              MIVRA brings together considered silhouettes, modern
              essentials and distinctive details. A wardrobe shaped
              by individuality, confidence and timeless expression.
            </p>

            <div className="mt-10 flex items-end gap-5 border-b border-black/15 pb-8">
              <div className="relative h-36 w-28 flex-none overflow-hidden bg-[#DED8CF] sm:h-44 sm:w-36">
                <Image
                  src="/images/products/mivra_editorial_02_mens_tailored_coat_model.jpg"
                  alt="MIVRA men's tailored coat editorial"
                  fill
                  sizes="144px"
                  className="object-cover transition-transform duration-1000 hover:scale-110"
                />
              </div>

              <div className="pb-2">
                <p className="text-[9px] font-semibold tracking-[0.2em] text-chrome">
                  THE MEN'S PERSPECTIVE
                </p>
                <p className="mt-3 font-display text-2xl leading-tight sm:text-3xl">
                  Distinctive
                  <br />
                  by design.
                </p>
              </div>
            </div>

            <Link
              href="/collections"
              className="mt-8 inline-flex min-h-14 w-fit min-w-[250px] items-center justify-between border border-obsidian px-5 text-[9px] font-semibold tracking-[0.2em] transition-colors duration-300 hover:bg-obsidian hover:text-white"
            >
              DISCOVER THE MIVRA WORLD
              <span className="text-base">{"\u2197"}</span>
            </Link>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-black/15 pt-5">
          <span className="text-[9px] tracking-[0.22em] text-chrome">
            DEFINE YOUR STYLE.
          </span>
          <span className="text-[9px] tracking-[0.22em] text-chrome">
            MIVRA / 2026
          </span>
        </div>
      </div>
    </section>
  );
}
