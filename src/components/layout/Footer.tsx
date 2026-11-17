
import Image from "next/image";
import Link from "next/link";

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/mivraofficial_pk?mdxt=MW85dWYxYW5ydQ==&utm_source=ig_contact_invite",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@mivra_pk?_r=1&_t=ZS-9BOkyWEL5me",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.6 8.2a7.2 7.2 0 0 1-4.4-1.5v7.1a6 6 0 1 1-6-6h1v3.2h-1a2.8 2.8 0 1 0 2.8 2.8V2h3.2c.2 2.1 1.9 3.8 4.4 4v2.2Z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/923427130326",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M9 8.5c.5 2 2 3.5 4.5 4.5l1-1 1.5 1-.5 1.5c-3 .5-7.5-3-7-6L10 8Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:mivraofficial8@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="m4 7 8 6 8-6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const policyLinks = [
  { label: "Privacy Policy", href: "/policies/privacy" },
  { label: "Terms & Conditions", href: "/policies/terms" },
  { label: "Shipping & Delivery", href: "/policies/shipping" },
  { label: "Returns & Exchanges", href: "/policies/returns" },
  { label: "Refund Policy", href: "/policies/refunds" },
  { label: "Cancellation Policy", href: "/policies/cancellation" },
];

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-[#090909] pt-10 text-white sm:pt-16">

      {/* IMAGE NEWSLETTER CAMPAIGN */}
       <section className="relative mx-auto min-h-[300px] h-[340px] max-w-[1800px] overflow-hidden sm:h-[390px] lg:h-[440px]">
       <Image
  src="/images/mivra-group-editorial.png"
  alt="MIVRA fashion editorial campaign"
  fill
  sizes="100vw"
  className="object-cover object-[center_25%]"
/>

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 flex items-center px-5 sm:px-12 lg:px-20">
          <div className="w-full max-w-[400px] border border-white/40 bg-white/15 p-5 text-white shadow-2xl backdrop-blur-xl sm:p-7">

            <p className="text-[9px] font-semibold tracking-[0.35em]">
              THE WORLD OF MIVRA
            </p>

            <h2 className="mt-5 font-display text-3xl leading-tight sm:text-5xl">
              A style of your own.
            </h2>

            <p className="mt-4 max-w-sm text-xs leading-6 text-white/85 sm:text-sm">
              Modern essentials. Distinctive style. Made to express you.and
              distinctive expressions. Find your perspective with MIVRA.
            </p>

            <Link
              href="/collections"
              className="mt-7 flex min-h-12 items-center justify-center border border-white bg-white px-6 text-[9px] font-semibold tracking-[0.24em] text-[#171717] transition hover:bg-transparent hover:text-white"
            >
              EXPLORE THE COLLECTIONS
            </Link>

            <p className="mt-5 text-[9px] tracking-[0.2em] text-white/75">
              DEFINE YOUR STYLE. / MIVRA
            </p>
          </div>
        </div>

        <span className="absolute right-6 top-6 text-[9px] tracking-[0.25em] text-white sm:right-10 sm:top-10">
          MIVRA / 2026
        </span>
      </section>

      {/* FOOTER NAVIGATION */}
      <section className="mx-auto max-w-[1800px] px-6 pb-12 pt-12 sm:px-12 sm:pt-16 lg:px-16">

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">

          {/* BRAND */}
          <div>
            <p className="mb-5 text-[9px] font-semibold tracking-[0.2em] text-white/45">
              MIVRA
            </p>

            <nav className="flex flex-col items-start gap-3 text-xs text-white/75">
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
              <Link href="/collections" className="transition hover:text-white">
                All Collections
              </Link>
              <Link href="/collections/men" className="transition hover:text-white">
                Men
              </Link>
              <Link href="/collections/women" className="transition hover:text-white">
                Women
              </Link>
              <Link href="/new-arrivals" className="transition hover:text-white">
                New Arrivals
              </Link>
            </nav>
          </div>

          {/* HELP */}
          <div>
            <p className="mb-5 text-[9px] font-semibold tracking-[0.2em] text-white/45">
              HELP
            </p>

            <nav className="flex flex-col items-start gap-3 text-xs text-white/75">
              <a
                href="mailto:mivraofficial8@gmail.com"
                className="transition hover:text-white"
              >
                Contact Us
              </a>

              <Link href="/account/orders" className="transition hover:text-white">
                Track Your Order
              </Link>

              <Link href="/policies/shipping" className="transition hover:text-white">
                Delivery Information
              </Link>

              <Link href="/policies/returns" className="transition hover:text-white">
                Returns & Exchanges
              </Link>

              <a
                href="https://wa.me/923427130326"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                WhatsApp Support
              </a>
            </nav>
          </div>

          {/* CUSTOMER CARE */}
          <div>
            <p className="mb-5 text-[9px] font-semibold tracking-[0.2em] text-white/45">
              CUSTOMER CARE
            </p>

            <nav className="flex max-w-[230px] flex-col">
              {policyLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-between border-b border-white/15 py-2.5 text-xs text-white/75 transition-colors hover:text-white"
                >
                  <span>{item.label}</span>
                  <span className="translate-x-0 text-white/30 transition-all group-hover:translate-x-1 group-hover:text-white">
                    →
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* SOCIAL */}
          <div>
            <p className="mb-5 text-[9px] font-semibold tracking-[0.2em] text-white/45">
              FOLLOW MIVRA
            </p>

            <div className="flex flex-wrap items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black ${
                    social.name === "WhatsApp"
                      ? "border-white/60 text-white shadow-[0_0_14px_rgba(255,255,255,0.12)]"
                      : "border-white/25 text-white hover:border-white"
                  }`}
                >
                  <span className="flex h-6 w-6 items-center justify-center [&>svg]:h-6 [&>svg]:w-6">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>

            <a
              href="mailto:mivraofficial8@gmail.com"
              className="mt-5 inline-block text-[10px] text-white/50 transition hover:text-white"
            >
              mivraofficial8@gmail.com
            </a>
          </div>

        </div>

        {/* BRAND WORDMARK */}
        <div className="mt-16 overflow-hidden border-t border-white/20 pt-7 sm:mt-20 sm:pt-10">
          <Link
            href="/"
            aria-label="MIVRA home"
        className="mivra-wordmark block font-display text-center text-[19vw] font-normal leading-[0.78] tracking-[-0.085em] sm:text-[18vw] lg:text-[17vw]"
          >
            MIVRA
          </Link>

          <div className="mt-8 flex flex-col justify-between gap-3 text-[8px] tracking-[0.18em] text-white/45 sm:flex-row sm:items-center">
            <span>© 2026 MIVRA. ALL RIGHTS RESERVED.</span>

            <span className="font-semibold tracking-[0.3em] text-white/65">
              DEFINE YOUR STYLE.
            </span>

            <span>MADE FOR INDIVIDUAL EXPRESSION.</span>
          </div>
        </div>

      </section>
    </footer>
  );
}
