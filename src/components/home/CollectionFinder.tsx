
import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    label: "WOMEN",
    headline: "Style without limits.",
    categories: "COATS · JACKETS · TROUSERS · POLO SHIRTS",
    href: "/collections/women",
    image: "/images/mivra-women-finder.png.png",
    alt: "MIVRA womenswear editorial",
  },
  {
    label: "MEN",
    headline: "Made to stand apart.",
    categories: "COATS · JACKETS · TROUSERS · POLO SHIRTS",
    href: "/collections/men",
    image: "/images/mivra-men-finder.png.png",
    alt: "MIVRA menswear editorial",
  },
];

export default function CollectionFinder() {
  return (
    <section
      aria-label="Discover MIVRA collections"
      className="grid grid-cols-1 gap-px bg-white/10 md:grid-cols-2"
    >
      {collections.map((collection) => (
        <Link
          key={collection.label}
          href={collection.href}
          className="group relative isolate flex min-h-[440px] items-end overflow-hidden bg-[#111] text-white md:min-h-[520px]"
        >
          {/* Editorial image */}
          <div className="absolute inset-y-0 right-0 w-[65%]">
            <Image
              src={collection.image}
              alt={collection.alt}
              fill
              sizes="(max-width: 768px) 65vw, 32vw"
              className="object-contain object-center transition-transform duration-700 group-hover:scale-[1.04]"
            />
          </div>

          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />


{/* Glassmorphism text panel */}
<div className="relative z-10 w-full p-6 sm:p-8 lg:p-10">
  <div className="max-w-[350px] rounded-2xl border border-white/20 bg-white/[0.09] p-6 shadow-[0_8px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-500 group-hover:border-white/35 group-hover:bg-white/[0.13] sm:p-7">

    <p className="mb-4 text-[9px] font-semibold tracking-[0.35em] text-white/65">
      MIVRA / {collection.label}
    </p>

    <h2 className="font-serif text-3xl leading-tight tracking-tight text-white sm:text-4xl">
      {collection.headline}
    </h2>

    <p className="mt-4 text-[9px] leading-relaxed tracking-[0.15em] text-white/70">
      {collection.categories}
    </p>

    <div className="mt-6 flex items-center justify-between border-t border-white/20 pt-4">
      <span className="text-[9px] font-semibold tracking-[0.23em] text-white">
        EXPLORE {collection.label}
      </span>

      <span className="text-lg text-white transition-transform duration-300 group-hover:translate-x-2">
        ↗
      </span>
    </div>
  </div>
</div>

        </Link>
      ))}
    </section>
  );
}
