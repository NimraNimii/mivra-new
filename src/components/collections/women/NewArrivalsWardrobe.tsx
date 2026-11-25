
import Image from "next/image";
import Link from "next/link";

const wardrobeItems = [
  {
    number: "01",
    title: "THE TROUSER EDIT",
    description: "Fluid silhouettes. Refined proportions.",
    image: "/images/editorial/mivra-trousers.webp",
    href: "/collections/women",
    category: "WOMENSWEAR",
  },
  {
    number: "02",
    title: "THE JACKET EDIT",
    description: "Distinctive layers. Modern character.",
    image: "/images/editorial/mivra-jackets.webp",
    href: "/collections/men",
    category: "MENSWEAR",
  },
  {
    number: "03",
    title: "THE POLO EDIT",
    description: "Everyday essentials, reconsidered.",
    image: "/images/editorial/mivra-polo-shirts.webp",
    href: "/collections/men",
    category: "MENSWEAR",
  },
  {
    number: "04",
    title: "THE COMPLETE LOOK",
    description: "A considered approach to dressing.",
    image: "/images/editorial/mivra-complete-looks.webp",
    href: "/collections",
    category: "MIVRA STYLE",
  },
];

export default function NewArrivalsWardrobe() {
  return (
    <section className="bg-[#211A17] py-16 text-[#F5F1EA] sm:py-24">
      <div className="mx-auto max-w-[1800px] px-5 sm:px-10 lg:px-16">

        <div className="mb-10 flex flex-col justify-between gap-6 border-b border-white/15 pb-8 sm:mb-14 sm:flex-row sm:items-end">
          <div>
            <p className="text-[9px] font-semibold tracking-[0.35em] text-[#C7AD91]">
              THE NEW SEASON COLLECTION
            </p>

            <h2 className="mt-5 font-display text-4xl leading-none tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              DRESS THE <span className="italic text-[#C7AD91]">MOMENT.</span>
            </h2>
          </div>

          <p className="max-w-xs text-xs leading-6 text-white/60">
            Discover the pieces defining the new MIVRA wardrobe.
            Four expressions. One distinctive identity.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {wardrobeItems.map((item) => (
            <Link
              key={item.number}
              href={item.href}
              className="group min-w-0"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#3A3029]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#211A17]/65 via-transparent to-transparent" />

                <span className="absolute left-3 top-3 border border-white/40 bg-[#211A17]/45 px-3 py-2 text-[8px] tracking-[0.18em] text-white backdrop-blur-sm sm:left-5 sm:top-5">
                  {item.category}
                </span>

                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                  <p className="mb-2 text-[8px] tracking-[0.25em] text-[#D6B99A]">
                    MIVRA / {item.number}
                  </p>

                  <h3 className="font-display text-xl leading-tight sm:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[9px] leading-5 text-white/75 sm:text-xs">
                    {item.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-white/35 pt-3">
                    <span className="text-[8px] font-semibold tracking-[0.2em]">
                      EXPLORE THE EDIT
                    </span>
                    <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
                      ↗
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-white/15 pt-5">
          <span className="text-[8px] tracking-[0.2em] text-white/50">
            CONTEMPORARY / REFINED / TIMELESS
          </span>
          <span className="text-[8px] tracking-[0.2em] text-[#C7AD91]">
            MIVRA — NEW ARRIVALS
          </span>
        </div>
      </div>
    </section>
  );
}
