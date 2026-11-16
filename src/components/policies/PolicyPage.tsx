import Link from "next/link";
import { policies, type PolicySlug } from "@/data/policies";

const policyLinks: { slug: PolicySlug; label: string }[] = [
  { slug: "privacy", label: "Privacy Policy" },
  { slug: "terms", label: "Terms & Conditions" },
  { slug: "shipping", label: "Shipping & Delivery" },
  { slug: "returns", label: "Returns & Exchanges" },
  { slug: "refunds", label: "Refund Policy" },
  { slug: "cancellation", label: "Cancellation Policy" },
];

export default function PolicyPage({ slug }: { slug: PolicySlug }) {
  const policy = policies[slug];

  return (
    <main className="min-h-screen bg-[#F4F2EE] px-4 pb-20 pt-10 sm:px-8 sm:pt-16">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="font-display text-3xl font-bold tracking-[-0.08em] text-[#342820]">
          MIVRA
        </Link>
        <p className="mt-2 text-[9px] font-semibold tracking-[0.35em] text-[#8A7059]">
          DEFINE YOUR STYLE.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[250px_1fr] lg:gap-16">
          <aside>
            <p className="mb-4 text-[9px] font-semibold tracking-[0.25em] text-[#94785E]">
              CUSTOMER INFORMATION
            </p>
            <nav className="flex flex-wrap gap-2 lg:flex-col">
              {policyLinks.map((item) => (
                <Link
                  key={item.slug}
                  href={`/policies/${item.slug}`}
                  aria-current={item.slug === slug ? "page" : undefined}
                  className={`rounded-full border px-4 py-2.5 text-xs transition ${
                    item.slug === slug
                      ? "border-[#765B48] bg-[#765B48] text-white"
                      : "border-[#D6C7B5] text-[#655344] hover:border-[#765B48]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-8 border-t border-[#D6C7B5] pt-6">
              <p className="text-[9px] font-semibold tracking-[0.2em] text-[#94785E]">
                NEED HELP?
              </p>
              <a href="mailto:mivraofficial8@gmail.com" className="mt-3 block text-xs text-[#655344] underline underline-offset-4">
                Email MIVRA
              </a>
              <a href="https://wa.me/923427130326" target="_blank" rel="noopener noreferrer" className="mt-3 block text-xs text-[#655344] underline underline-offset-4">
                WhatsApp support
              </a>
            </div>
          </aside>

          <article className="rounded-[24px] border border-[#D6C7B5] bg-[#E8DFD2] p-6 sm:p-10 lg:p-14">
            <p className="text-[9px] font-semibold tracking-[0.28em] text-[#94785E]">
              MIVRA / CUSTOMER POLICIES
            </p>
            <h1 className="mt-5 font-display text-4xl leading-tight tracking-[-0.045em] text-[#342820] sm:text-6xl">
              {policy.title}
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#766656]">
              {policy.intro}
            </p>
            <p className="mt-4 text-[10px] tracking-[0.12em] text-[#94785E]">
              LAST UPDATED: {policy.updated.toUpperCase()}
            </p>

            <div className="my-8 border-t border-[#BDAA95]" />

            <div className="space-y-9">
              {policy.sections.map((section) => (
                <section key={section.title}>
                  <h2 className="font-display text-2xl text-[#342820] sm:text-3xl">
                    {section.title}
                  </h2>
                  <div className="mt-3 space-y-3">
                    {section.paragraphs.map((paragraph, index) => (
                      <p key={index} className="text-sm leading-7 text-[#655344]">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-12 border-t border-[#BDAA95] pt-6">
              <Link href="/" className="text-[10px] font-semibold tracking-[0.18em] text-[#765B48] hover:text-[#342820]">
                {"\u2190"} BACK TO MIVRA
              </Link>
            </div>
          </article>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-[#D6C7B5] pt-6 text-[9px] tracking-[0.14em] text-[#8A7765] sm:flex-row">
          <span>© 2026 MIVRA. ALL RIGHTS RESERVED.</span>
          <span>DEFINE YOUR STYLE.</span>
        </div>
      </div>
    </main>
  );
}
