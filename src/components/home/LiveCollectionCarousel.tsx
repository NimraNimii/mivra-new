
"use client";

import Link from "next/link";

const collections = [
  {
    id: "women-coats",
    label: "WOMEN",
    title: "Women's Coats",
    description: "The outerwear edit",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    href: "/collections/women",
  },
  {
    id: "men-jackets",
    label: "MEN",
    title: "Men's Jackets",
    description: "Everyday essentials",
    image:
      "https://images.unsplash.com/photo-1520975958225-1d3b3e8b1e1f?auto=format&fit=crop&w=900&q=85",
    href: "/collections/men",
  },
  {
    id: "women-jackets",
    label: "WOMEN",
    title: "Women's Jackets",
    description: "Contemporary layers",
    image:
      "https://images.unsplash.com/photo-1548624149-f1a6a9c7f1a5?auto=format&fit=crop&w=900&q=85",
    href: "/collections/women",
  },
  {
    id: "men-coats",
    label: "MEN",
    title: "Men's Coats",
    description: "Refined silhouettes",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=900&q=85",
    href: "/collections/men",
  },
];

export default function LiveCollectionCarousel() {
  const repeatedCollections = [...collections, ...collections];

  return (
    <section
      id="collection-edit"
      className="overflow-hidden bg-[#F4F2EE] py-20 sm:py-24"
    >
      <div className="mb-10 flex items-end justify-between px-6 sm:px-10 lg:px-14">
        <div>
          <p className="mb-4 text-[9px] font-semibold tracking-[0.3em] text-[#777D82]">
            DISCOVER YOUR NEXT LOOK
          </p>

          <h2 className="font-display text-4xl leading-none tracking-[-0.045em] text-[#090909] sm:text-6xl">
            THE COLLECTION EDIT<span className="text-[#B5A797]">.</span>
          </h2>

          <p className="mt-4 text-xs tracking-wide text-[#777D82]">
            NEW SEASON / EXPLORE THE MIVRA COLLECTION
          </p>
        </div>

        <span className="hidden text-[9px] tracking-[0.2em] text-[#777D82] sm:block">
          CURATED FOR YOU — 01 / 04
        </span>
      </div>

      <div className="collection-marquee">
        <div className="collection-track">
          {repeatedCollections.map((item, index) => (
            <Link
              key={`${item.id}-${index}`}
              href={item.href}
              aria-label={`Explore ${item.title}`}
              className="collection-card group relative block shrink-0 overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url("${item.image}")` }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/5" />

              <span className="absolute left-5 top-5 bg-[#F4F2EE] px-3 py-2 text-[9px] font-semibold tracking-[0.18em] text-[#090909]">
                {item.label}
              </span>

              <div className="absolute inset-x-5 bottom-6 text-white">
                <p className="mb-2 text-[9px] tracking-[0.2em] text-white/75">
                  {item.description}
                </p>

                <div className="flex items-end justify-between gap-3">
                  <h3 className="font-display text-2xl leading-tight sm:text-3xl">
                    {item.title}
                  </h3>

                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/70 text-lg transition-all group-hover:bg-white group-hover:text-black">
                    ↗
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-9 flex items-center justify-between px-6 sm:px-10 lg:px-14">
        <p className="text-[9px] tracking-[0.2em] text-[#777D82]">
          DEFINE YOUR STYLE.
        </p>

        <Link
          href="/collections"
          className="border-b border-[#090909] pb-1 text-[9px] font-semibold tracking-[0.2em] text-[#090909]"
        >
          EXPLORE ALL COLLECTIONS ↗
        </Link>
      </div>
    </section>
  );
}
