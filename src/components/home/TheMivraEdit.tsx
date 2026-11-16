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
    className: "md:col-span-7 md:row-span-2",
  },
  {
    number: "02",
    title: "A MODERN CLASSIC",
    description: "A sharper perspective on menswear.",
    image: "/images/products/mivra_editorial_02_mens_tailored_coat_model.jpg",
    alt: "Men's tailored coat editorial",
    className: "md:col-span-5",
  },
  {
    number: "03",
    title: "BEYOND THE ESSENTIALS",
    description: "Distinctive pieces. Personal expression.",
    image: "/images/products/mivra_editorial_01_womens_leather_jacket_model.jpg",
    alt: "Women's leather jacket editorial",
    className: "md:col-span-5",
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

  return (
    <section
      ref={sectionRef}
    className="overflow-hidden bg-[#F4F2EE] pt-12 pb-12 sm:pt-16 sm:pb-16"
      aria-label="The MIVRA editorial edit"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-10 lg:px-14">
        <div
          className={`mb-12 flex flex-col justify-between gap-6 transition-all duration-1000 sm:mb-16 sm:flex-row sm:items-end ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div>
            <p className="mb-5 text-[9px] font-semibold tracking-[0.32em] text-[#777D82]">
              A STUDY IN PERSONAL STYLE / MIVRA JOURNAL
            </p>
            <h2 className="font-display text-6xl leading-[0.82] tracking-[-0.065em] sm:text-7xl lg:text-8xl">
  THE MIVRA
  <br />
  <span className="text-[#B5A797]">EDIT.</span>
</h2>
          </div>

          <div className="max-w-xs sm:pb-2">
            <p className="text-sm leading-7 text-[#68645F]">
              A considered selection of modern silhouettes, timeless
              essentials and distinctive expressions.
            </p>
            <Link
              href="/collections"
              className="mt-5 inline-flex items-center gap-4 border-b border-black pb-2 text-[9px] font-semibold tracking-[0.2em] transition-opacity hover:opacity-50"
            >
              EXPLORE ALL COLLECTIONS
              <span className="text-base">{"\u2197"}</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:grid-rows-[minmax(300px,1fr)_minmax(300px,1fr)] md:gap-6">
          {editorialLooks.map((look, index) => (
            <Link
              key={look.number}
              href="/collections"
              className={`group relative block min-h-[420px] overflow-hidden bg-[#DED8CF] md:min-h-0 ${look.className} ${
                visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              } transition-all duration-1000`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Image
                src={look.image}
                alt={look.alt}
                fill
                priority={index === 0}
                sizes={
                  index === 0
                    ? "(max-width: 768px) 100vw, 58vw"
                    : "(max-width: 768px) 100vw, 40vw"
                }
                className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.045]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

              <span className="absolute right-5 top-5 text-[9px] font-semibold tracking-[0.2em] text-white">
                M / {look.number}
              </span>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
                <p className="mb-3 text-[9px] font-semibold tracking-[0.24em] text-white/75">
                  {look.description}
                </p>
                <div className="flex items-end justify-between gap-4">
                  <h3 className="font-display text-2xl tracking-[-0.03em] sm:text-3xl lg:text-4xl">
                    {look.title}
                  </h3>
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-white/70 text-lg transition-all duration-300 group-hover:bg-white group-hover:text-black">
                    {"\u2197"}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-black/15 pt-5">
          <span className="text-[9px] tracking-[0.22em] text-[#777D82]">
            DRESS WITH INTENTION.
          </span>
          <span className="text-[9px] tracking-[0.22em] text-[#777D82]">
            THE MIVRA EDIT / 2026
          </span>
        </div>
      </div>
    </section>
  );
}
