
import Link from "next/link";

const campaigns = [
  {
    id: "women",
    eyebrow: "THE WOMEN'S COLLECTION",
    title: "OWN YOUR\nLOOK.",
    description: "Contemporary layers. Effortless expression.",
    categories: "JACKETS · COATS · EVERYDAY STYLE",
   image: "/images/hero/women-editorial.webp",
    href: "/collections/women",
    cta: "SHOP WOMEN",
    position: "center 35%",
  },
  {
    id: "men",
    eyebrow: "THE MEN'S COLLECTION",
    title: "MAKE YOUR\nMARK.",
    description: "Modern essentials. Distinctive attitude.",
    categories: "JACKETS · COATS · STREETWEAR",
   image: "/images/hero/men-editorial.webp",
    href: "/collections/men",
    cta: "SHOP MEN",
    position: "center 35%",
  },
];

export default function DualCampaignHero() {
  return (
    <section
      aria-label="Explore MIVRA collections"
      className="grid grid-cols-1 bg-obsidian md:grid-cols-2"
    >
      {campaigns.map((campaign, index) => (
        <article
          key={campaign.id}
          className={`group relative isolate flex min-h-[680px] flex-col justify-between overflow-hidden px-7 py-9 text-white sm:min-h-[740px] sm:px-10 sm:py-12 lg:min-h-[calc(100svh-132px)] lg:px-12 lg:py-14 ${
            index === 0
              ? "border-b border-white/20 md:border-b-0 md:border-r"
              : ""
          }`}
        >
          {/* Campaign photography */}
          <div
            className="absolute inset-0 -z-20 bg-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.045]"
            style={{
              backgroundImage: `url("${campaign.image}")`,
              backgroundPosition: campaign.position,
            }}
          />

          {/* Editorial contrast */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-black/25 to-black/15" />

          {/* Top editorial labels */}
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-semibold tracking-[0.3em] sm:text-[10px]">
              MIVRA / {campaign.id.toUpperCase()}
            </span>

            <span className="font-display text-[10px] tracking-[0.2em] text-white/75">
              0{index + 1} — 02
            </span>
          </div>

          {/* Main campaign copy */}
          <div className="max-w-[650px]">
            <p className="mb-6 text-[9px] font-semibold uppercase tracking-[0.32em] text-white/80 sm:text-[10px]">
              {campaign.eyebrow}
            </p>

            <h1 className="whitespace-pre-line font-display text-[clamp(3.8rem,6.2vw,7.2rem)] font-bold uppercase leading-[0.83] tracking-[-0.085em]">
              {campaign.title}
            </h1>

            <p className="mt-7 max-w-sm text-sm font-normal leading-relaxed text-white/90 sm:text-base">
              {campaign.description}
            </p>

            <p className="mt-4 text-[9px] font-medium tracking-[0.23em] text-white/75">
              {campaign.categories}
            </p>

            <Link
              href={campaign.href}
              className="mt-9 inline-flex min-h-14 min-w-[225px] items-center justify-between border border-white/80 px-6 text-[9px] font-semibold tracking-[0.23em] transition-all duration-300 hover:bg-white hover:text-obsidian sm:min-w-[230px]"
            >
              {campaign.cta}
              <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </Link>
          </div>

          {/* Bottom signature */}
          <div className="flex items-center justify-between border-t border-white/35 pt-5">
            <span className="text-[8px] font-medium tracking-[0.25em] text-white/80 sm:text-[9px]">
              DEFINE YOUR STYLE.
            </span>

            <span className="text-[8px] font-medium tracking-[0.25em] text-white/80 sm:text-[9px]">
              {campaign.id.toUpperCase()}'S EDIT
            </span>
          </div>
        </article>
      ))}
    </section>
  );
}
