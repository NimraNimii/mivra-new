
"use client";

import { useState } from "react";
import Link from "next/link";
import { useBag } from "@/context/BagContext";

type Department = "Men" | "Women";

const departments: Record<Department, {
  image: string;
  title: string;
  categories: {
    name: string;
    slug: string;
    subcategories: string[];
  }[];
}> = {
  Men: {
    image: "/images/hero/men-editorial.png",
    title: "THE MEN'S EDIT",
    categories: [
      { name: "Jackets & Coats", slug: "jackets-coats", subcategories: ["All Outerwear", "Wool Coats", "Overcoats", "Trench Coats", "Bomber Jackets", "Puffer Jackets"] },
      { name: "Leather Jackets", slug: "leather-jackets", subcategories: ["Biker Jackets", "Leather Bombers", "Suede Jackets", "Leather Overshirts"] },
      { name: "Trousers", slug: "trousers", subcategories: ["Tailored Trousers", "Relaxed Fit", "Straight Leg", "Cargo Trousers"] },
      { name: "Polo Shirts", slug: "polo-shirts", subcategories: ["Classic Polos", "Knit Polos", "Long Sleeve Polos"] },
      { name: "T-Shirts", slug: "t-shirts", subcategories: ["Essential Tees", "Oversized Tees", "Graphic Tees", "Premium Basics"] },
      { name: "Shirts", slug: "shirts", subcategories: ["Casual Shirts", "Oxford Shirts", "Overshirts"] },
      { name: "Knitwear", slug: "knitwear", subcategories: ["Sweaters", "Cardigans", "Knitwear Essentials"] },
      { name: "Accessories", slug: "accessories", subcategories: ["Belts", "Bags", "Scarves"] },
    ],
  },
  Women: {
    image: "/images/hero/women-editorial.png",
    title: "THE WOMEN'S EDIT",
    categories: [
      { name: "Jackets & Coats", slug: "jackets-coats", subcategories: ["All Outerwear", "Wool Coats", "Wrap Coats", "Trench Coats", "Statement Coats"] },
      { name: "Leather Jackets", slug: "leather-jackets", subcategories: ["Biker Jackets", "Leather Bombers", "Suede Jackets", "Leather Blazers"] },
      { name: "Trousers", slug: "trousers", subcategories: ["Tailored Trousers", "Wide Leg", "Straight Leg", "Relaxed Fit"] },
      { name: "Polo Shirts", slug: "polo-shirts", subcategories: ["Classic Polos", "Knit Polos", "Fitted Polos"] },
      { name: "T-Shirts", slug: "t-shirts", subcategories: ["Essential Tees", "Oversized Tees", "Fitted Tees", "Graphic Tees"] },
      { name: "Tops & Shirts", slug: "tops-shirts", subcategories: ["Everyday Tops", "Statement Shirts", "Blouses"] },
      { name: "Knitwear", slug: "knitwear", subcategories: ["Sweaters", "Cardigans", "Knit Tops"] },
      { name: "Accessories", slug: "accessories", subcategories: ["Bags", "Belts", "Scarves"] },
    ],
  },
};

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
      {open ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-[19px] w-[19px]">
      <circle cx="10.8" cy="10.8" r="7" />
      <path d="m16 16 5 5" />
    </svg>
  );
}

function AccountIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-[19px] w-[19px]">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 21c.5-4.2 3.1-6.5 7.5-6.5s7 2.3 7.5 6.5" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-[19px] w-[19px]">
      <path d="M5 8h14l1 13H4L5 8Z" />
      <path d="M9 9V6a3 3 0 0 1 6 0v3" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-[19px] w-[19px]">
      <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.4-4.7A8.5 8.5 0 1 1 20.5 11.7Z" />
      <path d="M8.5 8.2c.3-.5.6-.5.9-.5h.4c.2 0 .4.1.5.4l.8 1.9c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4 0 .6.5.9 1.3 1.7 2.2 2.2.2.1.4.1.6-.1l.8-.9c.2-.2.4-.2.6-.1l1.8.9c.3.1.4.3.4.5 0 .3-.2 1.1-.7 1.5-.5.5-1.2.7-1.9.5-1-.2-2.3-.8-3.7-2.1-1.2-1.1-2-2.5-2.3-3.5-.3-.9 0-1.8.3-2.1Z" />
    </svg>
  );
}

export default function Header({ sticky = true }: { sticky?: boolean }) {
  const { itemCount, isLoaded } = useBag();
  const [menuOpen, setMenuOpen] = useState(false);
  const [department, setDepartment] = useState<Department>("Men");
  const [expanded, setExpanded] = useState("Jackets & Coats");

  const current = departments[department];
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
    

      <header
        className={`${sticky ? "sticky top-0" : "relative"} z-50 w-full bg-[#F7F5F0]`}
      >
        <div className="relative mx-auto flex h-[70px] max-w-[1800px] items-center justify-between border-b border-[#29231F]/15 px-4 sm:h-[78px] sm:px-8 lg:px-12">

          {/* LEFT: MENU + DESKTOP NAVIGATION */}
          <div className="flex flex-1 items-center gap-6">

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="flex h-10 w-9 shrink-0 items-center justify-center text-[#29231F] transition hover:opacity-50"
            >
              {menuOpen ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
                  <path d="m6 6 12 12M18 6 6 18" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
                  <path d="M3 7h18M3 12h18M3 17h18" />
                </svg>
              )}
            </button>

            <nav className="hidden items-center gap-6 xl:flex">
              {[
                ["NEW ARRIVALS", "/new-arrivals"],
                ["MEN", "/collections/men"],
                ["WOMEN", "/collections/women"],
                ["COLLECTIONS", "/collections"],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="whitespace-nowrap text-[9px] font-medium tracking-[0.19em] text-[#29231F]/75 transition hover:text-black"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CENTER: MIVRA WORDMARK */}
          <Link
            href="/"
            onClick={closeMenu}
            aria-label="MIVRA home"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[32px] font-normal tracking-[-0.09em] text-[#171310] transition hover:opacity-60 sm:text-[38px]"
          >
            MIVRA
          </Link>

          {/* RIGHT: ACTION ICONS */}
          <div className="flex flex-1 items-center justify-end gap-1 sm:gap-4">

            {/* SEARCH */}
            <Link
              href="/search"
              aria-label="Search products"
              className="flex h-10 w-9 items-center justify-center text-[#29231F] transition hover:opacity-50"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-[19px] w-[19px]">
                <circle cx="10.8" cy="10.8" r="7" />
                <path d="m16 16 5 5" />
              </svg>
            </Link>

            {/* ACCOUNT */}
            <Link
              href="/account"
              aria-label="My account"
              className="hidden h-10 w-9 items-center justify-center text-[#29231F] transition hover:opacity-50 sm:flex"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-[19px] w-[19px]">
                <circle cx="12" cy="8" r="3.5" />
                <path d="M4.5 21c.5-4.2 3.1-6.5 7.5-6.5s7 2.3 7.5 6.5" />
              </svg>
            </Link>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/923427130326"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact MIVRA on WhatsApp"
              title="WhatsApp"
              className="flex h-9 w-9 items-center justify-center text-[#29231F] transition hover:text-[#168C50]"
            >
             <svg
  viewBox="0 0 32 32"
  className="h-[23px] w-[23px]"
  aria-hidden="true"
>
  <circle cx="16" cy="16" r="15" fill="#25D366" />
  <path
    fill="#FFFFFF"
    d="M23.5 8.5A10.5 10.5 0 0 0 6.9 21.2L5.5 26.5l5.4-1.4a10.5 10.5 0 0 0 12.6-16.6ZM16 24.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.2.8.9-3.1-.2-.3A8.2 8.2 0 1 1 16 24.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.3 7.3 0 0 1-1.4-1.7c-.1-.2 0-.3.1-.4l.4-.5.2-.4c.1-.1 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.3 1 2.5a9.5 9.5 0 0 0 3.8 3.4c.5.2.9.4 1.3.5.5.2 1 .2 1.4.1.4-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.4-.3Z"
  />
</svg>
            </a>

            {/* SHOPPING BAG */}
            <Link
              href="/cart"
              aria-label={`Shopping bag, ${isLoaded ? itemCount : 0} items`}
              className="flex h-10 items-center gap-2 pl-1 text-[#29231F] transition hover:opacity-50"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-[19px] w-[19px]">
                <path d="M5 8h14l1 13H4L5 8Z" />
                <path d="M9 8V6a3 3 0 0 1 6 0v2" />
              </svg>

              <span className="hidden whitespace-nowrap text-[9px] font-semibold tracking-[0.14em] sm:inline">
                BAG ({isLoaded ? itemCount : "..."})
              </span>

              <span className="text-[10px] font-semibold sm:hidden">
                {isLoaded ? itemCount : "..."}
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* EDITORIAL MEGA MENU */}
      {menuOpen && (
        <>
          <button
            type="button"
            aria-label="Close navigation"
            onClick={closeMenu}
            className="fixed inset-0 z-40 bg-black/40"
          />

          <div className="fixed inset-x-0 top-[70px] z-50 max-h-[calc(100dvh-70px)] overflow-y-auto border-t border-[#29231F]/10 bg-[#F7F5F0] text-[#29231F] shadow-2xl sm:top-[78px]">
            <div className="mx-auto max-w-[1500px] px-5 py-6 sm:px-10 sm:py-9">

              <div className="mb-7 flex items-center justify-between border-b border-[#29231F]/15 pb-5">
                <div>
                  <p className="text-[9px] font-semibold tracking-[0.3em] text-[#8A7766]">
                    THE WORLD OF MIVRA
                  </p>
                  <p className="mt-2 font-display text-2xl sm:text-3xl">
                    Discover your style.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center border border-[#29231F]/20 transition hover:bg-[#29231F] hover:text-white"
                >
                  <span className="text-xl">×</span>
                </button>
              </div>

              <div className="mb-8 grid grid-cols-2 gap-3 sm:gap-5">
                {(["Men", "Women"] as Department[]).map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => {
                      setDepartment(item);
                      setExpanded("Jackets & Coats");
                    }}
                    className={`group relative overflow-hidden text-left ${
                      department === item ? "ring-2 ring-[#29231F]" : ""
                    }`}
                  >
                    <div
                      className="aspect-[2/1] bg-cover bg-center transition duration-500 group-hover:scale-[1.02]"
                      style={{
                        backgroundImage: `linear-gradient(to top, rgba(0,0,0,.65), transparent 65%), url("${departments[item].image}")`,
                      }}
                    />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-3 text-white sm:p-5">
                      <span className="font-display text-xl sm:text-3xl">
                        {item}
                      </span>
                      <span className="text-sm">↗</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">

                {/* CATEGORY LIST */}
                <div>
                  <p className="mb-4 text-[9px] font-semibold tracking-[0.25em] text-[#8A7766]">
                    SHOP BY CATEGORY
                  </p>

                  <div className="border-t border-[#29231F]/15">
                    {current.categories.map((category) => (
                      <button
                        key={category.name}
                        type="button"
                        onClick={() =>
                          setExpanded(
                            expanded === category.name ? "" : category.name
                          )
                        }
                        className={`flex w-full items-center justify-between border-b border-[#29231F]/15 px-1 py-4 text-left transition ${
                          expanded === category.name ? "font-semibold" : "hover:pl-3"
                        }`}
                      >
                        <span className="text-sm">{category.name}</span>
                        <span className="text-lg font-light">
                          {expanded === category.name ? "−" : "+"}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* SUBCATEGORIES */}
                <div className="flex min-h-[260px] flex-col bg-[#EEE9E1] p-5 sm:p-8">
                  {current.categories
                    .filter((category) => category.name === expanded)
                    .map((category) => (
                      <div key={category.name}>
                        <p className="mb-2 text-[9px] tracking-[0.25em] text-[#8A7766]">
                          EXPLORE THE COLLECTION
                        </p>

                        <h3 className="mb-5 font-display text-3xl sm:text-4xl">
                          {category.name}
                        </h3>

                        <Link
                          href={`/collections/${department.toLowerCase()}?category=${category.slug}`}
                          onClick={closeMenu}
                          className="mb-5 inline-flex border-b border-[#29231F] pb-2 text-[9px] font-semibold tracking-[0.2em] transition hover:opacity-50"
                        >
                          SHOP ALL {category.name.toUpperCase()} ↗
                        </Link>

                        <div className="grid grid-cols-2 gap-x-5">
                          {category.subcategories.map((sub) => (
                            <Link
                              key={sub}
                              href={`/collections/${department.toLowerCase()}?category=${category.slug}&style=${encodeURIComponent(sub)}`}
                              onClick={closeMenu}
                              className="border-b border-[#29231F]/10 py-3 text-xs text-[#51463D] transition hover:pl-2 hover:text-black"
                            >
                              {sub} →
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}

                  {!expanded && (
                    <div className="flex flex-1 items-center justify-center">
                      <p className="font-display text-2xl text-[#8A7766]">
                        DEFINE YOUR STYLE.
                      </p>
                    </div>
                  )}

                  <Link
                    href={`/collections/${department.toLowerCase()}`}
                    onClick={closeMenu}
                    className="mt-auto border-t border-[#29231F]/15 pt-5 text-[9px] font-semibold tracking-[0.2em] transition hover:opacity-50"
                  >
                    EXPLORE THE {department.toUpperCase()} COLLECTION →
                  </Link>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-[#29231F]/15 pt-5">
                <span className="text-[9px] tracking-[0.2em] text-[#8A7766]">
                  MIVRA — DEFINE YOUR STYLE.
                </span>
                <Link
                  href="/new-arrivals"
                  onClick={closeMenu}
                  className="text-[9px] font-semibold tracking-[0.2em] transition hover:opacity-50"
                >
                  NEW ARRIVALS →
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
