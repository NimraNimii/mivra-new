
"use client";

import Image from "next/image";
import Link from "next/link";

const CAMPAIGN_IMAGE = "/images/editorial/mivra-journal-campaign.jpg";

const categories = [
  "TROUSERS",
  "COATS",
  "JACKETS",
  "LEATHER",
  "POLO SHIRTS",
];

export default function MivraJournal() {
  return (
    <section
      aria-label="MIVRA fashion journal"
      className="relative overflow-hidden bg-[#171513] px-4 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Editorial header */}
        <div className="mb-6 flex items-center justify-between text-[9px] font-medium tracking-[0.28em] text-[#C8B69F] sm:mb-8">
          <span>MIVRA JOURNAL</span>
          <span>VOL. 01 â€” THE NEW COLLECTION</span>
        </div>

        {/* Campaign image */}
        <div className="group relative isolate min-h-[620px] overflow-hidden bg-[#29231F] sm:min-h-[680px] lg:min-h-[740px]">
          <Image
            src={CAMPAIGN_IMAGE}
            alt="MIVRA editorial campaign featuring diverse models in modern tailored fashion"
            fill
            priority={false}
            unoptimized
            sizes="(max-width: 768px) 100vw, 1600px"
            className="object-cover object-center transition-transform duration-[1800ms] ease-out group-hover:scale-[1.025]"
          />

          {/* Cinematic image treatment */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-black/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

          {/* Small editorial marker */}
          <div className="absolute left-5 top-6 z-10 sm:left-9 sm:top-9">
            <p className="text-[9px] font-medium tracking-[0.3em] text-white/80">
              AN EXPRESSION OF MODERN STYLE
            </p>
            <div className="mt-3 h-px w-12 bg-[#D8C4A5]" />
          </div>

          {/* Glassmorphism panel */}
          <div className="absolute bottom-5 left-4 right-4 z-10 sm:bottom-8 sm:left-auto sm:right-8 sm:w-[min(620px,65%)] lg:bottom-12 lg:right-12 lg:w-[min(680px,58%)]">
            <div className="border border-white/30 bg-[#171513]/45 p-6 shadow-2xl backdrop-blur-2xl sm:p-9 lg:p-11">
              <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/20 pb-5">
                <span className="font-display text-2xl tracking-[-0.04em] text-[#F7F2E9]">
                  MIVRA
                </span>

                <span className="text-[8px] font-medium tracking-[0.2em] text-white/75">
                  THE COLLECTION / 001
                </span>
              </div>

              <p className="mb-4 text-[9px] font-semibold tracking-[0.3em] text-[#D8C4A5]">
                THE ART OF MODERN DRESSING
              </p>

              <h2 className="max-w-xl font-display text-4xl leading-[0.95] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
                BEYOND
                <br />
                THE SEASON.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/80 sm:text-base">
                A considered exploration of modern silhouettes,
                distinctive textures and the pieces that define
                personal style.
              </p>

              {/* Collection categories */}
              <div className="mt-7 flex flex-wrap gap-x-4 gap-y-3 border-t border-white/20 pt-5">
                {categories.map((category) => (
                  <span
                    key={category}
                    className="text-[8px] font-medium tracking-[0.16em] text-white/75 sm:text-[9px]"
                  >
                    {category}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/collections"
                className="mt-8 inline-flex min-h-12 items-center justify-between gap-8 border border-white/70 px-5 text-[9px] font-semibold tracking-[0.2em] text-white transition-all duration-300 hover:border-[#D8C4A5] hover:bg-[#D8C4A5] hover:text-[#171513]"
              >
                EXPLORE THE COLLECTION
                <span className="text-base">â†—</span>
              </Link>
            </div>
          </div>

          {/* Bottom corner issue marker */}
          <span className="absolute bottom-5 left-5 hidden text-[9px] tracking-[0.25em] text-white/70 sm:block sm:bottom-9 sm:left-9">
            M / 001 â€” WINTER EDITION
          </span>
        </div>

        {/* Editorial footer */}
        <div className="mt-5 flex items-center justify-between gap-4 text-[8px] tracking-[0.2em] text-[#B5A797] sm:text-[9px]">
          <span>DEFINE YOUR STYLE.</span>
          <span>THE MIVRA JOURNAL / 2026</span>
        </div>
      </div>
    </section>
  );
}



