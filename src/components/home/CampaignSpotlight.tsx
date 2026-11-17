
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const designs = [
  {
    name: "The Wide-Leg Trouser",
    category: "WOMENSWEAR / TAILORING",
    title: "QUIET CONFIDENCE.",
    description: "Relaxed proportions. Refined tailoring.",
    href: "/products/wide-leg-tailored-trouser",
    images: [
      "/images/products/mivra_editorial_08_womens_trench_and_trousers_model.jpg",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=700&auto=format&fit=crop&q=85",
    ],
  },
  {
    name: "The Textured Knit Polo",
    category: "MENSWEAR / KNITWEAR",
    title: "BEYOND CASUAL.",
    description: "Texture, character and effortless distinction.",
    href: "/products/textured-knit-polo",
    images: [
      "/images/products/mivra_editorial_07_mens_navy_polo_model.jpg",
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=700&auto=format&fit=crop&q=85",
    ],
  },
  {
    name: "The Charcoal Wool Overcoat",
    category: "MENSWEAR / OUTERWEAR",
    title: "MADE TO ENDURE.",
    description: "Considered layers. An enduring statement.",
    href: "/products/charcoal-wool-overcoat",
    images: [
      "/images/editorial/mens-overcoat-editorial.png",
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=700&auto=format&fit=crop&q=85",
    ],
  },
  {
    name: "The Essential Leather Jacket",
    category: "WOMENSWEAR / LEATHER",
    title: "OWN THE MOMENT.",
    description: "Distinctive texture. Timeless attitude.",
    href: "/products/essential-leather-jacket",
    images: [
      "/images/editorial/womens-leather-editorial.png",
      "https://www.maximatalents.com/assets/bg-model-04-C9DnVzbm.jpg",
    ],
  },
];

export default function CampaignSpotlight() {
  const [active, setActive] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [failedImages, setFailedImages] = useState<string[]>([]);

  const design = designs[active];

  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % designs.length);
      setPhotoIndex((current) => (current + 1) % 2);
    }, 3500);

    return () => window.clearInterval(timer);
  }, [paused]);

  const selectDesign = (index: number) => {
    setActive(index);
    setPhotoIndex((current) => (current + 1) % 2);
  };

  const getImage = (index: number) => {
    const image = designs[index].images[photoIndex];
    const fallback = designs[index].images[0];

    return failedImages.includes(image) ? fallback : image;
  };

  const handleImageError = (image: string) => {
    setFailedImages((current) =>
      current.includes(image) ? current : [...current, image]
    );
  };

  return (
    <section
      aria-label="MIVRA new season showcase"
      className="relative isolate overflow-hidden bg-[#302923] px-5 py-12 text-[#F7F2E9] sm:px-10 sm:py-14"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Soft cocoa and champagne ambient lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_45%,rgba(181,138,80,0.16),transparent_65%)]" />

      <div className="relative mx-auto w-full max-w-[1250px]">

        {/* Campaign heading */}
      <div className="relative z-20 mb-14 w-full text-center sm:mb-16">
          <p className="mb-2 text-[9px] font-semibold tracking-[0.38em] text-[#D2B58D]">
            MIVRA / WINTER 2026
          </p>

          <h2 className="whitespace-nowrap font-display text-3xl tracking-[-0.05em] text-[#F7F2E9] sm:text-5xl">
            THE NEW{" "}
            <span className="italic text-[#C6A16E]">LOOK.</span>
          </h2>

          <p className="mt-2 text-[11px] text-[#F7F2E9]/65">
            Four signature pieces. A new perspective on modern dressing.
          </p>
        </div>

        {/* Rotating fashion gallery */}
     <div className="relative mx-auto mt-28 flex h-[245px] w-full max-w-[1000px] items-center justify-center sm:mt-32 sm:h-[285px]">

          {designs.map((item, index) => {
            const rawOffset =
              (index - active + designs.length) % designs.length;

            const offset =
              rawOffset > 2 ? rawOffset - designs.length : rawOffset;

            const distance = Math.abs(offset);
            const isActive = index === active;

            return (
              <button
                key={item.name}
                type="button"
                aria-label={`Show ${item.name}`}
                aria-pressed={isActive}
                onClick={() => selectDesign(index)}
                className="absolute left-1/2 top-1/2 w-[145px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-white/25 bg-white/[0.08] text-left shadow-[0_20px_55px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-700 ease-out sm:w-[190px]"
                style={{
                  transform: `translate(-50%, -50%) translateX(calc(${offset} * clamp(105px, 17vw, 205px))) scale(${isActive ? 1 : distance === 1 ? 0.82 : 0.68})`,
                  opacity: isActive ? 1 : distance === 1 ? 0.9 : 0.68,
                  zIndex: isActive ? 10 : 5 - distance,
                  pointerEvents: distance === 2 ? "none" : "auto",
                }}
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden">

               <Image
  src={getImage(index)}
  alt={`${item.name} editorial`}
  fill
  sizes="(max-width: 640px) 145px, 190px"
  onError={() => handleImageError(item.images[photoIndex])}
  className="object-cover transition-transform duration-700"
/>

                  {/* Image contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17130F]/90 via-[#17130F]/10 to-black/10" />

                  {/* Card number */}
                  <span className="absolute left-3 top-3 rounded-full border border-white/30 bg-[#302923]/45 px-2 py-1 text-[7px] tracking-[0.2em] text-white backdrop-blur-md">
                    0{index + 1} / MIVRA
                  </span>

                  {/* Glass information panel */}
                  <div className="absolute inset-x-2 bottom-2 rounded-lg border border-white/25 bg-[#302923]/65 p-3 shadow-lg backdrop-blur-xl sm:inset-x-3 sm:bottom-3 sm:p-4">

                    <p className="text-[7px] tracking-[0.13em] text-[#D2B58D]">
                      {item.category}
                    </p>

                    <p className="mt-1 font-display text-lg leading-tight text-[#FFF9F0] sm:text-xl">
                      {item.title}
                    </p>

                    {isActive && (
                      <span className="mt-2 inline-block text-[8px] tracking-[0.18em] text-white">
                        VIEW LOOK ↗
                      </span>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Featured product information */}
       <div className="relative z-20 mx-auto -mt-20 flex max-w-[650px] flex-col items-center justify-center gap-3 border-t border-white/15 px-3 pt-4 text-center sm:-mt-24">

          <div>
            <p className="text-[8px] tracking-[0.25em] text-[#C6A16E]">
              {design.category}
            </p>

            <h3 className="mt-2 font-display text-xl text-[#F7F2E9] sm:text-2xl">
              {design.name}
            </h3>

            <p className="mt-1 text-[10px] text-white/65">
              {design.description}
            </p>
          </div>

          <Link
            href={design.href}
            className="rounded-sm border border-[#C6A16E]/75 bg-white/[0.04] px-6 py-3 text-[8px] tracking-[0.2em] text-[#F7F2E9] backdrop-blur-md transition duration-300 hover:border-[#C6A16E] hover:bg-[#C6A16E] hover:text-[#211E1B]"
          >
            SHOP THIS DESIGN ↗
          </Link>
        </div>

        {/* Carousel navigation */}
        <div className="mt-5 flex flex-col items-center justify-center gap-4">

          <div className="flex items-center gap-2">
            {designs.map((item, index) => (
              <button
                key={item.name}
                type="button"
                aria-label={`Select ${item.name}`}
                aria-pressed={active === index}
                onClick={() => selectDesign(index)}
                className={`rounded-full transition-all duration-500 ${
  active === index
    ? "h-[5px] w-12 bg-[#C99B5B] shadow-[0_0_12px_rgba(201,155,91,0.65)]"
    : "h-[3px] w-4 bg-white/35 hover:bg-white/70"
}`}
              />
            ))}
          </div>

          <Link
            href="/winter-edit"
            className="text-[8px] tracking-[0.2em] text-[#D2B58D] transition hover:text-white"
          >
            EXPLORE THE COMPLETE WINTER EDIT ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
