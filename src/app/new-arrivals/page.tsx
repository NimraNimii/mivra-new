
import Image from "next/image";
import Link from "next/link";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import NewArrivalsGrid from "@/components/product/NewArrivalsGrid";
import { Suspense } from "react";

export default function NewArrivalsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F5F1EA] text-[#211A17]">
      <AnnouncementBar />
      <Header />

      {/* EDITORIAL INTRO */}
      <section className="mx-auto max-w-[1800px] px-5 pb-8 pt-10 sm:px-10 sm:pt-16 lg:px-16">
        <div className="flex items-center justify-between border-b border-[#211A17]/20 pb-4">
          <p className="text-[9px] font-semibold tracking-[0.3em]">
            THE MIVRA JOURNAL — VOL. 01
          </p>
          <p className="text-[9px] tracking-[0.2em] text-[#8A7868]">
            NEW SEASON / 2026
          </p>
        </div>

        <div className="grid gap-8 py-10 lg:grid-cols-[1fr_320px] lg:items-end lg:py-16">
          <h1 className="max-w-5xl font-display text-[clamp(4rem,10vw,10rem)] leading-[0.78] tracking-[-0.075em]">
            THE NEW
            <br />
            <span className="pl-[8vw] italic text-[#A28B75]">
              ARRIVALS.
            </span>
          </h1>

          <div className="max-w-sm lg:pb-2">
            <p className="text-[9px] font-semibold tracking-[0.28em] text-[#9A806C]">
              A STUDY IN MODERN FORM
            </p>
            <p className="mt-4 text-sm leading-7 text-[#64574D]">
              A considered wardrobe for the way forward. Discover
              contemporary silhouettes, refined textures and pieces
              designed to stay beyond the season.
            </p>
            <p className="mt-5 text-[9px] tracking-[0.2em]">
              DISCOVER THE LATEST — MIVRA
            </p>
          </div>
        </div>
      </section>

    
{/* MIVRA GLASS EDITORIAL CAMPAIGN */}
<section className="mx-auto max-w-[1800px] px-3 sm:px-5 lg:px-8">
  <div className="grid grid-cols-1 gap-3 lg:grid-cols-12 lg:gap-4">

    {/* FEATURED ASIAN MODEL */}
    <Link
      href="/collections/women"
      className="group relative min-h-[580px] overflow-hidden rounded-2xl bg-[#28221F] lg:col-span-7 lg:min-h-[760px]"
    >
      <Image
        src="/images/campaign/new-arrivals/mivra-new-arrivals-asian-leather.webp"
        alt="MIVRA black leather jacket editorial"
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 58vw"
        className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-black/10" />

      <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-[9px] tracking-[0.25em] text-white shadow-xl backdrop-blur-xl sm:left-8 sm:top-8">
        MIVRA / NEW SEASON 2026
      </div>

      <div className="absolute inset-x-5 bottom-6 rounded-2xl border border-white/25 bg-white/10 p-6 text-white shadow-2xl backdrop-blur-xl sm:inset-x-8 sm:bottom-8 sm:p-9">
        <p className="text-[9px] font-semibold tracking-[0.3em] text-white/75">
          THE NEW WOMEN'S EDIT
        </p>
        <h2 className="mt-3 font-display text-5xl leading-[0.95] sm:text-7xl">
          Beyond
          <br />
          <span className="italic">Ordinary.</span>
        </h2>
        <div className="mt-6 flex items-center justify-between border-t border-white/25 pt-5">
          <span className="text-[9px] font-semibold tracking-[0.2em]">
            DISCOVER THE COLLECTION
          </span>
          <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
            ↗
          </span>
        </div>
      </div>
    </Link>

    {/* RIGHT EDITORIAL COLUMN */}
    <div className="grid grid-cols-2 gap-3 lg:col-span-5 lg:grid-cols-1 lg:grid-rows-2 lg:gap-4">

      {/* MEN'S COAT */}
      <Link
        href="/collections/men"
        className="group relative min-h-[330px] overflow-hidden rounded-2xl bg-[#39312C] sm:min-h-[430px] lg:min-h-0"
      >
        <Image
          src="/images/campaign/new-arrivals/mivra-new-arrivals-men-coat.webp"
          alt="MIVRA men's tailored coat editorial"
          fill
          sizes="(max-width: 1024px) 50vw, 42vw"
          className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

        <div className="absolute inset-x-3 bottom-3 rounded-xl border border-white/25 bg-white/10 p-4 text-white backdrop-blur-xl sm:inset-x-5 sm:bottom-5 sm:p-6">
          <p className="text-[8px] tracking-[0.25em] text-white/75">
            THE MEN'S COLLECTION
          </p>
          <h3 className="mt-2 font-display text-3xl sm:text-5xl">
            Modern Form.
          </h3>
          <p className="mt-3 text-[8px] font-semibold tracking-[0.2em]">
            EXPLORE MEN ↗
          </p>
        </div>
      </Link>

      {/* TROUSERS + WOMEN'S COAT */}
      <div className="grid min-h-[330px] grid-rows-2 gap-3 sm:min-h-[430px] lg:min-h-0 lg:grid-cols-2 lg:grid-rows-1 lg:gap-4">

        <Link
          href="/collections/women"
          className="group relative overflow-hidden rounded-2xl bg-[#D5C7B8]"
        >
          <Image
            src="/images/campaign/new-arrivals/mivra-new-arrivals-asian-trousers.webp"
            alt="MIVRA Asian model in tailored trousers"
            fill
            sizes="(max-width: 1024px) 50vw, 21vw"
            className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute inset-x-3 bottom-3 rounded-xl border border-white/25 bg-white/15 p-3 text-white backdrop-blur-xl sm:inset-x-4 sm:bottom-4 sm:p-4">
            <p className="text-[8px] tracking-[0.2em]">NEW SILHOUETTES</p>
            <h3 className="mt-1 font-display text-2xl sm:text-3xl">
              The Trouser Edit
            </h3>
            <p className="mt-2 text-[8px] tracking-[0.15em]">SHOP NOW ↗</p>
          </div>
        </Link>

        <Link
          href="/collections/women"
          className="group relative overflow-hidden rounded-2xl bg-[#B6A18C]"
        >
          <Image
            src="/images/campaign/new-arrivals/mivra-new-arrivals-women-coat.webp"
            alt="MIVRA women's camel coat editorial"
            fill
            sizes="(max-width: 1024px) 50vw, 21vw"
            className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
          <div className="absolute inset-x-3 bottom-3 rounded-xl border border-white/25 bg-white/15 p-3 text-white backdrop-blur-xl sm:inset-x-4 sm:bottom-4 sm:p-4">
            <p className="text-[8px] tracking-[0.2em]">THE OUTERWEAR EDIT</p>
            <h3 className="mt-1 font-display text-2xl sm:text-3xl">
              New Layers
            </h3>
            <p className="mt-2 text-[8px] tracking-[0.15em]">SHOP NOW ↗</p>
          </div>
        </Link>

      </div>
    </div>
  </div>

  {/* GLASS CAMPAIGN FOOTER */}
  <div className="mt-4 flex flex-col justify-between gap-3 rounded-2xl border border-[#211A17]/10 bg-white/45 px-6 py-5 backdrop-blur-xl sm:flex-row sm:items-center sm:px-9">
    <p className="text-[9px] font-semibold tracking-[0.25em] text-[#79685A]">
      FOUR EXPRESSIONS. ONE MIVRA IDENTITY.
    </p>
    <p className="text-[9px] tracking-[0.2em] text-[#79685A]">
      CONTEMPORARY STYLE / TIMELESS PRESENCE
    </p>
  </div>
</section>

      {/* PRODUCT COLLECTION */}
      <section className="mx-auto max-w-[1800px] px-5 pb-20 pt-20 sm:px-10 lg:px-16 lg:pt-28">
       
{/* IVORY + ESPRESSO COLLECTION INTRO */}
<div className="relative mb-12 overflow-hidden rounded-[28px] border border-[#B9A58C]/30 bg-[#211A17] px-7 py-10 text-[#F5F1EA] shadow-[0_24px_70px_rgba(33,26,23,0.14)] sm:px-12 sm:py-14">
  <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full bg-[#B9A58C]/20 blur-[100px]" />
  <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-[#8A6C54]/20 blur-[100px]" />

  <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
    <div>
      <p className="text-[9px] font-semibold tracking-[0.35em] text-[#C7AD91]">
        THE MIVRA COLLECTION — 2026
      </p>

      <h2 className="mt-6 font-display text-5xl leading-[0.9] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
        JUST <span className="italic text-[#C7AD91]">ARRIVED.</span>
      </h2>
    </div>

    <div className="max-w-sm border-l border-[#B9A58C]/40 pl-5 lg:pb-2">
      <p className="text-sm leading-7 text-white/70">
        A new perspective on modern dressing. Explore considered
        silhouettes, refined textures and contemporary essentials
        from the latest MIVRA edit.
      </p>

      <p className="mt-6 text-[9px] font-semibold tracking-[0.25em] text-[#C7AD91]">
        DISCOVER YOUR NEXT SIGNATURE LOOK ↗
      </p>
    </div>
  </div>

  <div className="relative mt-10 flex items-center justify-between border-t border-white/15 pt-5">
    <span className="text-[9px] tracking-[0.2em] text-white/55">
      CONTEMPORARY / REFINED / TIMELESS
    </span>
    <span className="text-[9px] tracking-[0.2em] text-[#C7AD91]">
      MIVRA — NEW ARRIVALS
    </span>
  </div>
</div>

        <Suspense
          fallback={
            <div className="py-24 text-center text-[10px] tracking-[0.2em]">
              PREPARING THE COLLECTION...
            </div>
          }
        >
         <NewArrivalsGrid editorial presentation="editorial" />
        </Suspense>
      </section>

      {/* BRAND MANIFESTO */}
      <section className="bg-[#211A17] px-6 py-24 text-center text-[#F5F1EA] sm:py-36">
        <p className="text-[9px] font-semibold tracking-[0.35em] text-[#C0AA92]">
          THE MIVRA PHILOSOPHY
        </p>
        <h2 className="mx-auto mt-8 max-w-5xl font-display text-4xl leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
          STYLE IS NOT
          <br />
          A MOMENT.
          <br />
          <span className="italic text-[#B9A58C]">IT IS A PRESENCE.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-md text-xs leading-7 text-white/60">
          Thoughtful design. Considered silhouettes.
          A modern wardrobe built around individuality.
        </p>
        <Link
          href="/collections"
          className="mt-10 inline-flex border border-[#B9A58C]/70 px-8 py-4 text-[9px] font-semibold tracking-[0.2em] transition hover:bg-[#F5F1EA] hover:text-[#211A17]"
        >
          EXPLORE MIVRA
        </Link>
      </section>
    </main>
  );
}
