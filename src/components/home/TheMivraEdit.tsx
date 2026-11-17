"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const editorialLooks = [
  {
    number: "01",
    title: "THE ART OF LAYERING",
    description: "Refined layers. Effortless confidence.",
    image: "/images/products/mivra_editorial_08_womens_trench_and_trousers_model.jpg",
    alt: "Women's modern trench coat and tailored trousers",
    label: "THE WOMEN'S PERSPECTIVE",
  },
  {
    number: "02",
    title: "A MODERN CLASSIC",
    description: "A sharper perspective on menswear.",
    image: "/images/products/mivra_editorial_02_mens_tailored_coat_model.jpg",
    alt: "Men's tailored coat editorial",
    label: "THE MEN'S PERSPECTIVE",
  },
  {
    number: "03",
    title: "BEYOND THE ESSENTIALS",
    description: "Distinctive pieces. Personal expression.",
    image: "/images/products/mivra_editorial_01_womens_leather_jacket_model.jpg",
    alt: "Women's leather jacket editorial",
    label: "THE NEW EXPRESSION",
  },
];

export default function TheMivraEdit() {
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
      { threshold: 0.12 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const main = editorialLooks[0];
  const supporting = editorialLooks.slice(1);

  return (
    <section
      ref={sectionRef}
      aria-label="The MIVRA editorial edit"
      className="relative overflow-hidden bg-[#F7F2E9] pt-12 pb-20 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28"
    >
      {/* Ambient background details */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#D8C4A5]/25 blur-[100px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-white/80 blur-[100px]" />

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-10 lg:px-14">

        {/* Editorial heading */}
        <div
          className={`mb-12 flex flex-col justify-between gap-8 transition-all duration-1000 sm:mb-16 lg:flex-row lg:items-end ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#B58A50]" />
              <p className="text-[9px] font-semibold tracking-[0.35em] text-[#765039]">
                A STUDY IN PERSONAL STYLE / MIVRA JOURNAL
              </p>
            </div>

            <h2 className="font-display text-[clamp(4rem,9vw,8.5rem)] leading-[0.76] tracking-[-0.075em] text-[#38271E]">
              THE MIVRA
              <br />
              <span className="text-[#B5A797]">EDIT.</span>
            </h2>
          </div>

          <div className="max-w-sm lg:pb-2">
            <p className="text-sm leading-7 text-[#686057] sm:text-base">
              A considered selection of modern silhouettes, timeless
              essentials and distinctive expressions. Discover a world
              shaped by individual style.
            </p>

            <Link
              href="/collections"
              className="group mt-6 inline-flex items-center gap-5 border-b border-[#38271E]/60 pb-3 text-[9px] font-bold tracking-[0.22em] text-[#38271E] transition-colors hover:border-[#B58A50] hover:text-[#A77B42]"
            >
              EXPLORE ALL COLLECTIONS
              <span className="text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                {"\u2197"}
              </span>
            </Link>
          </div>
        </div>

        {/* Main editorial composition */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch">

          {/* Main story */}
          <Link
            href="/collections"
            className={`group relative block min-h-[520px] overflow-hidden bg-[#D8C4A5] lg:col-span-7 lg:min-h-[760px] ${
              visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            } transition-all duration-1000`}
          >
            <Image
              src={main.image}
              alt={main.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-center transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#211812]/65 via-transparent to-black/10" />

            <div className="absolute left-6 top-6 flex items-center gap-3 sm:left-9 sm:top-9">
              <span className="rounded-full border border-white/50 bg-white/15 px-4 py-2 text-[9px] tracking-[0.22em] text-white backdrop-blur-xl">
                M / {main.number}
              </span>
              <span className="text-[9px] tracking-[0.22em] text-white/85">
                EDITORIAL No. 01
              </span>
            </div>

            {/* Frosted glass story panel */}
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/40 bg-[#F7F2E9]/20 p-6 text-white shadow-2xl backdrop-blur-xl transition-all duration-500 group-hover:bg-[#F7F2E9]/30 sm:bottom-9 sm:left-9 sm:right-auto sm:max-w-[470px] sm:p-8">
              <p className="mb-4 text-[9px] font-semibold tracking-[0.3em] text-white/80">
                {main.label}
              </p>

              <h3 className="font-display text-3xl leading-tight tracking-[-0.04em] sm:text-5xl">
                {main.title}
              </h3>

              <div className="mt-5 flex items-center justify-between border-t border-white/35 pt-4">
                <p className="text-xs text-white/85">
                  {main.description}
                </p>
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-white/70 text-lg transition-all duration-300 group-hover:bg-white group-hover:text-[#38271E]">
                  {"\u2197"}
                </span>
              </div>
            </div>
          </Link>

          {/* Supporting stories */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            {supporting.map((look, index) => (
              <Link
                key={look.number}
                href="/collections"
                className={`group relative min-h-[340px] flex-1 overflow-hidden bg-[#D8C4A5] ${
                  visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                } transition-all duration-1000`}
                style={{ transitionDelay: `${(index + 1) * 180}ms` }}
              >
                <Image
                  src={look.image}
                  alt={look.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#211812]/75 via-black/5 to-transparent" />

                <span className="absolute right-6 top-6 rounded-full border border-white/50 bg-white/15 px-4 py-2 text-[9px] tracking-[0.2em] text-white backdrop-blur-xl">
                  M / {look.number}
                </span>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
                  <p className="mb-3 text-[9px] font-semibold tracking-[0.25em] text-white/75">
                    {look.label}
                  </p>

                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl leading-tight tracking-[-0.035em] sm:text-3xl">
                        {look.title}
                      </h3>
                      <p className="mt-2 text-xs text-white/75">
                        {look.description}
                      </p>
                    </div>

                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-white/70 text-lg transition-all duration-300 group-hover:bg-white group-hover:text-[#38271E]">
                      {"\u2197"}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Closing editorial signature */}
        <div className="mt-10 flex flex-col gap-4 border-t border-[#765039]/20 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[9px] font-medium tracking-[0.25em] text-[#765039]">
            DRESS WITH INTENTION.
          </span>

          <span className="font-display text-xl italic text-[#B58A50]">
            Style is personal.
          </span>

          <span className="text-[9px] tracking-[0.25em] text-[#765039]">
            THE MIVRA EDIT / 2026
          </span>
        </div>
      </div>
    </section>
  );
}

