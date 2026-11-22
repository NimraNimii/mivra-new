
export default function WomenBrandStatement() {
  return (
    <section className="relative overflow-hidden bg-[#EAE2D7] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-[1440px]">
        {/* Editorial section label */}
        <div className="mb-12 flex items-center justify-between border-b border-[#CBBBAA] pb-5 sm:mb-16">
          <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-[#967D68]">
            THE MIVRA POINT OF VIEW
          </p>
          <p className="text-[9px] uppercase tracking-[0.22em] text-[#967D68]">
            EST. 2026 — WOMENSWEAR
          </p>
        </div>

        {/* Main editorial statement */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_0.5fr] lg:items-end lg:gap-20">
          <div>
            <p className="mb-6 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#A1846C]">
              BEYOND THE ORDINARY
            </p>

            <h2 className="max-w-[1000px] font-display text-5xl leading-[1.05] tracking-[-0.055em] text-[#29231F] sm:text-6xl lg:text-[88px]">
              Style is not what you wear.
              <span className="mt-2 block italic text-[#A58A72]">
                It’s how you define yourself.
              </span>
            </h2>
          </div>

          <div className="max-w-sm lg:justify-self-end">
            <div className="mb-7 h-px w-16 bg-[#A58A72]" />

            <p className="text-sm leading-8 text-[#76695E] sm:text-[15px]">
              We believe in thoughtful design, lasting pieces and the freedom
              to make every look your own. This is fashion with a perspective.
            </p>

            <p className="mt-9 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#8B7765]">
              MIVRA — BE YOUR OWN DEFINITION
            </p>
          </div>
        </div>

        {/* Editorial footer */}
        <div className="mt-16 flex items-center justify-between border-t border-[#CBBBAA] pt-5 sm:mt-20">
          <span className="text-[9px] uppercase tracking-[0.25em] text-[#967D68]">
            DESIGNED TO BE YOURS
          </span>
          <span className="font-display text-xl tracking-[-0.05em] text-[#49372D]">
            M.
          </span>
        </div>
      </div>
    </section>
  );
}
