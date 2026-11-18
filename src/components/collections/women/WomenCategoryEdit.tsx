
import Link from "next/link";

const categories = [
  {
    number: "01",
    eyebrow: "THE ART OF STRUCTURE",
    name: "Tailoring",
    description: "Refined silhouettes. Confident dressing.",
    href: "/collections/women?category=trousers",
    image:
      "https://bananarepublic.gapcanada.ca/webcontent/0028/329/429/cn28329429.jpg",
    position: "center 25%",
  },
  {
    number: "02",
    eyebrow: "EVERYDAY, REFINED",
    name: "Everyday Essentials",
    description: "The essentials, elevated.",
    href: "/collections/women?category=tops",
    image:
      "https://baseec-img-mng.akamaized.net/images/item/origin/5fdac59d3e440847d075b2aafd062467.jpg?im=Resize%2Cwidth%3D1280%2Ctype%3Dnormal&imformat=generic&q=90",
    position: "center 20%",
  },
  {
    number: "03",
    eyebrow: "MADE FOR EVERY SEASON",
    name: "Outerwear",
    description: "Statement layers. Timeless appeal.",
    href: "/collections/women?category=coats",
    image:
      "https://pauw.com/cdn/shop/files/250206_PAUW_09_0556.jpg?v=1739782128&width=2560",
    position: "center 25%",
  },
  {
    number: "04",
    eyebrow: "THE SOFTER SIDE OF STYLE",
    name: "Knitwear",
    description: "Soft textures. Beautiful simplicity.",
    href: "/collections/women?category=knitwear",
    image:
      "https://static.zara.net/assets/public/3d03/7dd2/49d345c7ad45/7211dae16e6a/03920360959-003-p/03920360959-003-p.jpg?ts=1773393670977",
    position: "center 20%",
  },
];

export default function WomenCategoryEdit() {
  return (
    <section className="bg-[#F6F1EA] px-4 pt-5 pb-10 sm:px-8 sm:pt-8 sm:pb-14 lg:px-12 lg:pt-10 lg:pb-16">
      <div className="mx-auto max-w-[1600px]">
        {/* Section heading */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:mb-10 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.32em] text-[#9A806C]">
              THE MIVRA WOMAN
            </p>

            <h2 className="font-display text-4xl leading-[0.95] tracking-[-0.055em] text-[#29231F] sm:text-5xl lg:text-6xl">
              The art of{" "}
              <span className="italic text-[#A58C75]">
                getting dressed.
              </span>
            </h2>
          </div>

          <div className="max-w-sm pb-1 sm:text-right">
            <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#A58C75]">
              FOUR WAYS TO EXPRESS YOURSELF
            </p>
            <p className="text-sm leading-6 text-[#76695E]">
              Discover considered silhouettes, timeless essentials and
              expressive layers. Find the pieces that feel unmistakably yours.
            </p>
          </div>
        </div>

        {/* Women's editorial collection */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.number}
              href={category.href}
              className="group relative block overflow-hidden rounded-[20px] border border-white/80 bg-white/30 p-1.5 shadow-[0_10px_35px_rgba(91,65,46,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(91,65,46,0.16)] sm:rounded-[26px] sm:p-2"
            >
              {/* Editorial image */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[15px] bg-[#E8DED2] sm:rounded-[20px]">
                <img
                  src={category.image}
                  alt={`Women's ${category.name} fashion editorial`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                  style={{ objectPosition: category.position }}
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#211913]/45 via-transparent to-[#211913]/5 opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Number */}
                <div className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/50 bg-white/20 text-[9px] font-medium tracking-wider text-white backdrop-blur-xl sm:left-4 sm:top-4 sm:h-9 sm:w-9">
                  {category.number}
                </div>

                {/* Floating glass information panel */}
                <div className="absolute bottom-2 left-2 right-2 rounded-[14px] border border-white/65 bg-[linear-gradient(135deg,rgba(255,255,255,0.88),rgba(246,237,225,0.76))] p-3 shadow-[0_8px_30px_rgba(45,32,23,0.12),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl transition-all duration-500 group-hover:bottom-3 sm:bottom-3 sm:left-3 sm:right-3 sm:rounded-[18px] sm:p-4 sm:group-hover:bottom-4">
                  <p className="mb-1.5 text-[7px] font-semibold uppercase tracking-[0.16em] text-[#9A806C] sm:text-[8px] sm:tracking-[0.2em]">
                    {category.eyebrow}
                  </p>

                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-lg leading-tight tracking-[-0.035em] text-[#30251F] sm:text-xl lg:text-2xl">
                      {category.name}
                    </h3>

                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#49372D] text-sm text-white transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#765039] sm:h-9 sm:w-9 sm:text-base">
                      â†’
                    </span>
                  </div>

                  <div className="mt-2 hidden border-t border-[#49372D]/15 pt-2 sm:block">
                    <p className="text-[10px] leading-5 text-[#76695E]">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Closing editorial line */}
        <div className="mt-8 flex items-center justify-between border-t border-[#D8C9B9] pt-4 sm:mt-10">
          <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#9A806C] sm:text-[9px]">
            DESIGNED FOR YOUR PERSPECTIVE
          </p>

          <p className="font-display text-sm italic text-[#9A806C] sm:text-base">
            Define your style.
          </p>
        </div>
      </div>
    </section>
  );
}
