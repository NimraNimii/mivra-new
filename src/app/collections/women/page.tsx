
import { Suspense } from "react";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import NewArrivalsGrid from "@/components/product/NewArrivalsGrid";
import WomenHero from "@/components/collections/women/WomenHero";
import WomenCategoryEdit from "@/components/collections/women/WomenCategoryEdit";
import WomenBrandStatement from "@/components/collections/women/WomenBrandStatement";

export default function WomenCollectionPage() {
  return (
    <main className="min-h-screen bg-[#F6F1EA]">
      <AnnouncementBar />
      <Header />

      <WomenHero />

      <WomenCategoryEdit />

      <section
        id="new-arrivals"
        className="relative overflow-hidden bg-[#EAE1D7] px-4 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:px-12"
      >
        <div className="mx-auto max-w-[1600px]">
          {/* Editorial heading */}
          <div className="mb-10 grid gap-8 border-b border-[#49372D]/20 pb-8 lg:grid-cols-[1fr_340px] lg:items-end lg:gap-16">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-9 bg-[#A58C75]" />
                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#8D705B]">
                  THE MIVRA WOMAN · 2026
                </p>
              </div>

              <h2 className="max-w-4xl font-display text-5xl leading-[0.98] tracking-[-0.055em] text-[#29231F] sm:text-6xl lg:text-7xl">
                Pieces to
                <span className="block pl-8 font-display italic text-[#A58C75] sm:pl-20">
                  live in.
                </span>
              </h2>
            </div>

            <div className="lg:pb-2">
              <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#9A806C]">
                01 — THE NEW COLLECTION
              </p>

              <p className="max-w-sm text-sm leading-7 text-[#76695E]">
                A considered wardrobe of modern silhouettes, refined
                essentials and effortless layers. Designed to become
                part of your everyday.
              </p>

              <a
                href="#new-arrivals"
                className="mt-5 inline-flex items-center gap-4 border-b border-[#49372D]/40 pb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#49372D] transition-colors hover:border-[#A58C75] hover:text-[#A58C75]"
              >
                EXPLORE THE COLLECTION
                <span className="text-base">↗</span>
              </a>
            </div>
          </div>

          {/* Product collection */}
          <div className="relative">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#8D705B]">
                SELECTED FOR YOU
              </p>

              <p className="text-[9px] uppercase tracking-[0.18em] text-[#8D705B]">
                MIVRA WOMENSWEAR
              </p>
            </div>

            <Suspense
              fallback={
                <div className="py-20 text-center text-sm text-[#76695E]">
                  Loading collection...
                </div>
              }
            >
              <NewArrivalsGrid
                audience="Women"
                presentation="women"
              />
            </Suspense>
          </div>
        </div>
      </section>

      <WomenBrandStatement />
    </main>
  );
}
