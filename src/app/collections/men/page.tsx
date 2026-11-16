
import { Suspense } from "react";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import NewArrivalsGrid from "@/components/product/NewArrivalsGrid";

export default function MenCollectionPage() {
  return (
    <main className="min-h-screen bg-pearl">
      <AnnouncementBar />
      <Header />

      <section className="mx-auto max-w-[1600px] px-5 pb-20 pt-14 sm:px-10 sm:pt-20 lg:px-14">
        <div className="mb-12 border-b border-black/10 pb-10 sm:mb-14">
          <p className="mb-5 text-[9px] font-semibold tracking-[0.32em] text-chrome">
            THE MIVRA MENSWEAR COLLECTION
          </p>

          <h1 className="font-display text-5xl leading-[0.95] tracking-[-0.045em] sm:text-7xl lg:text-8xl">
            MEN<span className="text-taupe">.</span>
          </h1>

          <div className="mt-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <p className="max-w-lg text-sm leading-7 text-carbon">
              Modern essentials, considered outerwear and distinctive
              everyday pieces. Discover the MIVRA menswear edit.
            </p>
            <p className="text-[9px] tracking-[0.2em] text-chrome">
              JACKETS / TROUSERS / POLOS / T-SHIRTS
            </p>
          </div>
        </div>

        <Suspense fallback={<div className="py-20 text-center">Loading collection...</div>}>
          <NewArrivalsGrid audience="Men" />
        </Suspense>
      </section>
    </main>
  );
}
