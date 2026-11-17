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
      className="relative isolate overflow-hidden border-y border-[#B58A50]/30 bg-gradient-to-br from-[#F7F2E9] via-[#E9DFD1] to-[#D8C4A5] py-10 text-[#38271E] sm:py-14"
    >
      {/* Soft ambient lighting */}
      <div className="pointer-events-none absolute -left-24 -top-20 h-72 w-72 rounded-full bg-white/70 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-[#B58A50]/25 blur-3xl" />

      {/* Philosophy heading */}
      <div className="relative z-10 mb-8 text-center sm:mb-10">
        <p className="text-[9px] font-semibold tracking-[0.4em] text-[#765039]">
          THE MIVRA PHILOSOPHY
        </p>
        <div className="mx-auto mt-3 h-px w-14 bg-[#B58A50]" />
      </div>

      {/* Glass marquee panel */}
      <div className="relative mx-4 overflow-hidden rounded-2xl border border-white/80 bg-white/35 py-4 sm:py-5 shadow-[0_18px_55px_rgba(56,39,30,0.12)] backdrop-blur-2xl sm:mx-8 sm:py-9">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-[#765039]/[0.06]" />

        <div className="marquee-track relative z-10 flex w-max">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex shrink-0 items-center"
              aria-hidden={copy === 1}
            >
              {phrases.map((phrase, index) => (
                <div
                  key={`${copy}-${phrase}`}
                  className="flex items-center whitespace-nowrap"
                >
                  <span className="mx-3 rounded-lg border border-white/80 bg-[#F7F2E9]/65 px-4 py-2 font-display text-lg tracking-[-0.035em] text-[#38271E] shadow-[0_6px_22px_rgba(56,39,30,0.07)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-white/90 sm:mx-4 sm:px-6 sm:py-3 sm:text-2xl lg:text-3xl">
                    {phrase}
                  </span>

                  <span className="mx-2 font-display text-2xl italic text-[#A77B42] sm:text-3xl">
                    {index % 2 === 0 ? "✳" : "✦"}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Closing statement */}
      <p className="relative z-10 mt-7 text-center text-[8px] font-semibold tracking-[0.3em] text-[#765039]/80 sm:mt-9 sm:text-[9px]">
        DESIGNED TO BE DISTINCTIVE. MADE TO BE YOURS.
      </p>
    </section>
  );
}
