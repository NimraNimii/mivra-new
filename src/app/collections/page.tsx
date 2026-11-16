
import Image from "next/image";
import Link from "next/link";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";

const collectionCards = [
  {
    title: "Women's Coats",
    label: "WOMEN",
    image: "/images/collections/womens-coats.webp",
    href: "/collections/women/coats",
  },
  {
    title: "Women's Leather Jackets",
    label: "WOMEN",
    image: "/images/collections/womens-leather-jackets.webp",
    href: "/collections/women/leather-jackets",
  },
  {
    title: "Men's Leather Jackets",
    label: "MEN",
    image: "/images/collections/mens-leather-jackets.webp",
    href: "/collections/men/leather-jackets",
  },
  {
    title: "Men's Overcoats",
    label: "MEN",
    image: "/images/collections/mens-overcoats.webp",
    href: "/collections/men/overcoats",
  },
];

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-pearl">
      <AnnouncementBar />
      <Header />

      <section className="mx-auto max-w-[1600px] px-5 pb-20 pt-14 sm:px-10 sm:pt-20 lg:px-14">
        <div className="mb-12 border-b border-black/10 pb-10">
          <p className="mb-5 text-[9px] font-semibold tracking-[0.32em] text-chrome">
            DISCOVER YOUR PERSPECTIVE / MIVRA
          </p>

          <h1 className="font-display text-5xl leading-[0.95] tracking-[-0.045em] sm:text-7xl lg:text-8xl">
            THE COLLECTIONS<span className="text-taupe">.</span>
          </h1>

          <p className="mt-6 max-w-lg text-sm leading-7 text-carbon">
            Considered silhouettes. Modern essentials.
            Discover the MIVRA collections.
          </p>

          <div className="mt-8 flex gap-6 text-[10px] font-semibold tracking-[0.18em]">
            <Link href="/collections/men" className="border-b border-black pb-2">
              SHOP MEN
            </Link>
            <Link href="/collections/women" className="border-b border-black pb-2">
              SHOP WOMEN
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {collectionCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group relative block aspect-[3/4] overflow-hidden bg-[#E9E5DF]"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />

              <div className="absolute left-5 top-5 bg-pearl px-4 py-2 text-[9px] font-semibold tracking-[0.18em] text-obsidian">
                {card.label}
              </div>

              <div className="absolute bottom-6 left-5 right-5 text-white">
                <h2 className="font-display text-2xl leading-tight sm:text-3xl">
                  {card.title}
                </h2>
                <p className="mt-3 text-[9px] font-semibold tracking-[0.2em]">
                  EXPLORE COLLECTION ↗
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
