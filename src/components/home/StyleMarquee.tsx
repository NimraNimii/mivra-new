
"use client";

const phrases = [
  "THE ART OF EVERYDAY STYLE",
  "MODERN ESSENTIALS",
  "DISTINCTIVE BY DESIGN",
  "DEFINE YOUR STYLE",
];

export default function StyleMarquee() {
  return (
    <section
      aria-label="MIVRA brand philosophy"
      className="overflow-hidden border-y border-white/15 bg-[#171615] py-7 text-[#F4F2EE] sm:py-9"
    >
      <div className="mb-5 text-center">
        <p className="text-[9px] font-medium tracking-[0.35em] text-[#B5A797]">
          THE MIVRA PHILOSOPHY
        </p>
      </div>

      <div className="marquee-track flex w-max">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex shrink-0 items-center"
            aria-hidden={copy === 1}
          >
            {phrases.map((phrase) => (
              <div
                key={`${copy}-${phrase}`}
                className="flex items-center whitespace-nowrap"
              >
                <span className="px-6 font-display text-2xl tracking-[-0.04em] sm:px-10 sm:text-4xl lg:text-5xl">
                  {phrase}
                </span>

                <span className="text-xl text-[#B5A797] sm:text-2xl">
                  ✳
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
