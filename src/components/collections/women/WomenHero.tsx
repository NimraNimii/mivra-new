import Image from "next/image";
import Link from "next/link";

export default function WomenHero() {
  return (
    <section className="bg-[#F6F1EA] px-4 pb-12 pt-5 sm:px-8 sm:pb-16 lg:px-12 lg:pt-8">
      <div className="relative mx-auto grid max-w-[1600px] overflow-hidden bg-[#EAE2D7] lg:min-h-[660px] lg:grid-cols-[0.82fr_1.18fr]">
        {/* Editorial copy */}
        <div className="relative z-10 flex flex-col justify-center px-7 py-14 sm:px-12 sm:py-20 lg:px-16 xl:px-24">
          <p className="mb-7 text-[9px] font-semibold uppercase tracking-[0.35em] text-[#8B7765]">
            MIVRA WOMAN — THE NEW SEASON
          </p>

          <h1 className="max-w-xl font-display text-[clamp(3.7rem,7vw,7.5rem)] leading-[0.88] tracking-[-0.065em] text-[#29231F]">
            A New
            <br />
            Perspective<span className="text-[#A58C75]">.</span>
          </h1>

          <p className="mt-8 max-w-sm text-sm leading-7 text-[#6E6258] sm:text-[15px]">
            Considered silhouettes. Effortless layers. Pieces that feel
            distinctly yours. Discover a new expression of everyday style.
          </p>

          <div className="mt-10">
            <Link
              href="/collections/women"
              className="group inline-flex items-center gap-8 border border-[#51443A] px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#29231F] transition-colors duration-300 hover:bg-[#29231F] hover:text-[#F6F1EA]"
            >
              Explore the collection
              <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          <div className="mt-16 hidden items-center gap-4 lg:flex">
            <span className="h-px w-12 bg-[#A58C75]" />
            <span className="text-[8px] uppercase tracking-[0.28em] text-[#8B7765]">
              Designed for your perspective
            </span>
          </div>
        </div>

        {/* Campaign image */}
        <div className="relative min-h-[440px] sm:min-h-[600px] lg:min-h-[660px]">
          <Image
            src="/images/hero/women-editorial.webp"
            alt="MIVRA women's contemporary fashion editorial"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover object-[center_20%]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />

          <p className="absolute bottom-6 right-6 text-[8px] uppercase tracking-[0.3em] text-white/90 sm:bottom-9 sm:right-9">
            THE WOMAN EDIT — 2026
          </p>
        </div>
      </div>
    </section>
  );
}