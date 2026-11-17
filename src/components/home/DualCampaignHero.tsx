
import Image from "next/image";
import Link from "next/link";

const campaigns = [
  {
    id: "women",
    eyebrow: "THE WOMEN'S COLLECTION",
    title: "OWN YOUR\nLOOK.",
    description: "Contemporary layers. Effortless expression.",
    categories: "JACKETS · COATS · EVERYDAY STYLE",
    image: "/images/hero/women-editorial.webp",
    imageAlt:
      "Two women in contemporary tailored outerwear for the MIVRA women's collection",
    href: "/collections/women",
    cta: "SHOP WOMEN",
    position: "center 18%",
  },
  {
    id: "men",
    eyebrow: "THE MEN'S COLLECTION",
    title: "MAKE YOUR\nMARK.",
    description: "Modern essentials. Distinctive attitude.",
    categories: "JACKETS · COATS · STREETWEAR",
    image: "/images/hero/men-editorial.webp",
    imageAlt:
      "Two men in contemporary tailored outerwear for the MIVRA men's collection",
    href: "/collections/men",
    cta: "SHOP MEN",
    position: "center 22%",
  },
];

export default function DualCampaignHero() {
  return (
    <section
      aria-label="Explore MIVRA collections"
      className="grid grid-cols-1 bg-obsidian md:grid-cols-2"
    >
      {campaigns.map((campaign, index) => {
        const Heading = index === 0 ? "h1" : "h2";

        return (
          <article
            key={campaign.id}
            className={`group relative isolate flex min-h-[min(78svh,620px)] flex-col justify-between overflow-hidden px-6 py-8 text-white sm:min-h-[680px] sm:px-10 sm:py-12 lg:min-h-[calc(100svh-132px)] lg:px-12 lg:py-14 ${
              index === 0
                ? "border-b border-white/20 md:border-b-0 md:border-r"
                : ""
            }`}
          >
            {/* Editorial campaign photography */}
            <div className="absolute inset-0 -z-20 overflow-hidden">
              <Image
                src={campaign.image}
                alt={campaign.imageAlt}
                fill
                priority
                sizes="(max-width: 767px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.035]"
                style={{
                  objectPosition: campaign.position,
                }}
              />
            </div>

            {/* Premium image contrast */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />

            {/* Top editorial labels */}
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-semibold tracking-[0.3em] sm:text-[10px]">
                MIVRA / {campaign.id.toUpperCase()}
              </span>

              <span className="font-display text-[10px] tracking-[0.2em] text-white/75">
                0{index + 1} — 02
              </span>
            </div>

            {/* Campaign content */}
            <div className="max-w-[650px]">
              <p className="mb-6 text-[9px] font-semibold uppercase tracking-[0.32em] text-white/85 sm:text-[10px]">
                {campaign.eyebrow}
              </p>

              <Heading className="whitespace-pre-line font-display text-[clamp(3.5rem,6vw,7rem)] font-normal uppercase leading-[0.86] tracking-[-0.075em]">
                {campaign.title}
              </Heading>

              <p className="mt-7 max-w-sm text-sm font-normal leading-relaxed text-white/90 sm:text-base">
                {campaign.description}
              </p>

              <p className="mt-4 text-[9px] font-medium tracking-[0.23em] text-white/75">
                {campaign.categories}
              </p>

              <Link
                href={campaign.href}
                className="mt-9 inline-flex min-h-14 min-w-[225px] items-center justify-between border border-white/80 px-6 text-[9px] font-semibold tracking-[0.23em] transition-all duration-300 hover:bg-white hover:text-obsidian focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:min-w-[230px]"
              >
                {campaign.cta}

                <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </Link>
            </div>

            {/* Brand signature */}
            <div className="flex items-center justify-between border-t border-white/35 pt-5">
              <span className="text-[8px] font-medium tracking-[0.25em] text-white/80 sm:text-[9px]">
                DEFINE YOUR STYLE.
              </span>

              <span className="text-[8px] font-medium tracking-[0.25em] text-white/80 sm:text-[9px]">
                {campaign.id.toUpperCase()}&apos;S EDIT
              </span>
            </div>
          </article>
        );
      })}
    </section>
  );
}
