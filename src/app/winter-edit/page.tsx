"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/currency";

const looks = [
  {
    number: "01",
    eyebrow: "THE TROUSER EDIT",
    title: "QUIET CONFIDENCE",
    description:
      "A study in proportion, movement and effortless tailoring. Refined silhouettes designed to move with you.",
    productId: "womens-wide-leg-trouser",
    image: "/images/products/mivra_editorial_08_womens_trench_and_trousers_model.jpg",
    detailImage: "/images/products/mivra_collection_07_beige_tailored_trousers_product.jpg",
    category: "WOMENSWEAR / TAILORING",
    fit: "Relaxed. Refined. Timeless.",
  },
  {
    number: "02",
    eyebrow: "THE POLO STORY",
    title: "BEYOND CASUAL",
    description:
      "The familiar, reconsidered. Textured knitwear and considered details bring a new perspective to everyday dressing.",
    productId: "mens-knit-polo",
    image: "/images/products/mivra_editorial_07_mens_navy_polo_model.jpg",
    detailImage: "/images/products/mens-textured-knit-polo.webp",
    category: "MENSWEAR / KNITWEAR",
    fit: "Soft texture. Modern character.",
  },
  {
    number: "03",
    eyebrow: "THE COAT EDIT",
    title: "MADE TO ENDURE",
    description:
      "Strong lines and considered layers. An outerwear essential that makes an impression without asking for attention.",
    productId: "mens-charcoal-overcoat",
    image: "/images/editorial/mens-overcoat-editorial.png",
    detailImage: "/images/products/mivra_collection_03_mens_charcoal_coat_model.jpg",
    category: "MENSWEAR / OUTERWEAR",
    fit: "Structured. Understated. Distinctive.",
  },
  {
    number: "04",
    eyebrow: "THE JACKET STATEMENT",
    title: "OWN THE MOMENT",
    description:
      "An unmistakable layer with a confident attitude. Contemporary leather styling made for lasting impact.",
    productId: "womens-leather-jacket",
    image: "/images/editorial/womens-leather-editorial.png",
    detailImage: "/images/products/mivra_collection_06_womens_brown_leather_jacket_product.jpg",
    category: "WOMENSWEAR / LEATHER",
    fit: "Bold character. Everyday versatility.",
  },
];

export default function WinterEditPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeLook = looks[activeIndex];
  const activeProduct = products.find(
    (product) => product.id === activeLook.productId
  );

  return (
    <main className="min-h-screen bg-[#171513] text-[#F5F0E8]">
      <AnnouncementBar />
      <Header />

      {/* Campaign hero */}
      <section className="relative flex min-h-[82vh] items-end overflow-hidden bg-[#24201C] md:min-h-[92vh]">
        <Image
          src="/images/hero/women-editorial.webp"
          alt="MIVRA Winter in Motion fashion campaign"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171513] via-black/20 to-black/25" />

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 pt-32 md:px-14 md:pb-24">
          <p className="mb-5 text-[10px] tracking-[0.42em] text-[#D8C5A8] md:text-xs">
            MIVRA PRESENTS / THE WINTER COLLECTION
          </p>

          <h1 className="max-w-5xl font-serif text-6xl leading-[0.9] tracking-[-0.055em] md:text-8xl lg:text-[112px]">
            WINTER
            <br />
            <span className="italic font-light">IN MOTION.</span>
          </h1>

          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-sm leading-7 text-white/75 md:text-base">
              A new season of considered layers, confident silhouettes and
              enduring essentials. Discover winter, the MIVRA way.
            </p>

            <a
              href="#the-edit"
              className="inline-flex w-fit items-center gap-5 border-b border-[#D8C5A8] pb-3 text-[10px] tracking-[0.3em] transition hover:text-[#D8C5A8]"
            >
              EXPLORE THE COLLECTION <span>↓</span>
            </a>
          </div>
        </div>

        <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 rotate-90 text-[9px] tracking-[0.4em] text-white/60 md:block">
          DEFINE YOUR STYLE
        </div>
      </section>

      {/* Campaign introduction */}
      <section id="the-edit" className="mx-auto max-w-[1600px] px-6 py-24 md:px-14 md:py-32">
        <div className="grid gap-10 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-5 text-[10px] tracking-[0.4em] text-[#B99D79]">
              THE MIVRA WINTER EDIT
            </p>
            <h2 className="max-w-2xl font-serif text-5xl leading-[1.05] md:text-7xl">
              Four stories.
              <br />
              <span className="italic text-[#C6AD8F]">One perspective.</span>
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-8 text-white/55 md:justify-self-end md:text-base">
            From relaxed tailoring to statement outerwear, explore four
            expressions of modern dressing. Each piece selected for its
            character, versatility and place in your wardrobe.
          </p>
        </div>
      </section>

      {/* Four editorial stories */}
      <section className="mx-auto max-w-[1600px] px-6 pb-20 md:px-14 md:pb-32">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {looks.map((look, index) => (
            <button
              key={look.number}
              onClick={() => {
                setActiveIndex(index);
                document
                  .getElementById("look-explorer")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`group text-left ${
                activeIndex === index ? "opacity-100" : "opacity-65 hover:opacity-100"
              }`}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#302A24]">
                <Image
                  src={look.image}
                  alt={look.eyebrow}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-4 left-4 text-[10px] tracking-[0.2em] text-white">
                  {look.number}
                </span>
              </div>
              <p className="mt-4 text-[9px] tracking-[0.2em] text-[#B99D79] md:text-[10px]">
                {look.eyebrow}
              </p>
              <p className="mt-2 font-serif text-lg md:text-2xl">
                {look.title}
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* Interactive look explorer */}
      <section
        id="look-explorer"
        className="border-y border-white/10 bg-[#201D19] py-20 md:py-28"
      >
        <div className="mx-auto max-w-[1600px] px-6 md:px-14">
          <div className="mb-12 flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="mb-3 text-[10px] tracking-[0.4em] text-[#B99D79]">
                DISCOVER THE LOOK
              </p>
              <h2 className="font-serif text-4xl md:text-6xl">
                The details matter.
              </h2>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() =>
                  setActiveIndex((activeIndex + looks.length - 1) % looks.length)
                }
                aria-label="Previous look"
                className="flex h-11 w-11 items-center justify-center border border-white/25 transition hover:bg-white hover:text-black"
              >
                ←
              </button>
              <button
                onClick={() => setActiveIndex((activeIndex + 1) % looks.length)}
                aria-label="Next look"
                className="flex h-11 w-11 items-center justify-center border border-white/25 transition hover:bg-white hover:text-black"
              >
                →
              </button>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
            <div className="grid grid-cols-2 gap-3 md:gap-5">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#302A24]">
                <Image
                  src={activeLook.image}
                  alt={activeLook.eyebrow + " campaign"}
                  fill
                  sizes="(max-width: 768px) 50vw, 35vw"
                  className="object-cover"
                />
              </div>
              <div className="relative mt-12 aspect-[3/4] overflow-hidden bg-[#302A24] md:mt-20">
                <Image
                  src={activeLook.detailImage}
                  alt={activeLook.title + " product detail"}
                  fill
                  sizes="(max-width: 768px) 50vw, 35vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-[10px] tracking-[0.35em] text-[#B99D79]">
                {activeLook.number} / {activeLook.category}
              </p>

              <h3 className="mt-7 font-serif text-5xl leading-[1.05] md:text-7xl">
                {activeLook.title}
              </h3>

              <p className="mt-5 text-sm leading-8 text-white/60 md:text-base">
                {activeLook.description}
              </p>

              <p className="mt-7 border-l border-[#B99D79] pl-4 text-xs italic tracking-wide text-[#D8C5A8]">
                {activeLook.fit}
              </p>

              {activeProduct && (
                <div className="mt-12 border-t border-white/15 pt-7">
                  <p className="text-[9px] tracking-[0.3em] text-white/45">
                    FEATURED PIECE
                  </p>

                  <div className="mt-4 flex items-center justify-between gap-4">
                    <div>
                      <h4 className="font-serif text-xl md:text-2xl">
                        {activeProduct.name}
                      </h4>
                      <p className="mt-2 text-sm text-[#D8C5A8]">
                        {formatPrice(activeProduct.price)}
                      </p>
                    </div>

                    <Link
                      href={"/products/" + activeProduct.slug}
                      className="shrink-0 border border-[#C6AD8F] px-5 py-4 text-[9px] tracking-[0.2em] transition hover:bg-[#C6AD8F] hover:text-[#171513]"
                    >
                      SHOP PIECE ↗
                    </Link>
                  </div>
                </div>
              )}

              <div className="mt-10 flex gap-2">
                {looks.map((look, index) => (
                  <button
                    key={look.number}
                    onClick={() => setActiveIndex(index)}
                    aria-label={"View " + look.eyebrow}
                    className={`h-[2px] flex-1 transition ${
                      index === activeIndex ? "bg-[#D8C5A8]" : "bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing campaign */}
      <section className="relative overflow-hidden px-6 py-32 text-center md:py-44">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#40352a_0%,_#171513_70%)]" />
        <div className="relative z-10">
          <p className="mb-6 text-[10px] tracking-[0.45em] text-[#C6AD8F]">
            THE SEASON IS YOURS
          </p>
          <h2 className="font-serif text-6xl leading-none md:text-8xl">
            DEFINE
            <br />
            <span className="italic">YOUR WINTER.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-md text-sm leading-7 text-white/55">
            Discover the pieces that define your own expression of style.
          </p>
          <Link
            href="/new-arrivals"
            className="mt-10 inline-flex border border-[#C6AD8F] px-9 py-5 text-[10px] tracking-[0.3em] transition hover:bg-[#C6AD8F] hover:text-[#171513]"
          >
            EXPLORE NEW ARRIVALS
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
