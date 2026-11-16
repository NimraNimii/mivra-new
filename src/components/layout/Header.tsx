
"use client";

import { useState } from "react";
import Link from "next/link";
import { useBag } from "@/context/BagContext";

type Department = "Men" | "Women";

const departments: Record<
  Department,
  {
    image: string;
    title: string;
    categories: {
      name: string;
      slug: string;
      subcategories: string[];
    }[];
  }
> = {
  Men: {
    image: "/images/hero/men-editorial.png",
    title: "THE MEN'S EDIT",
    categories: [
      {
        name: "Jackets & Coats",
        slug: "jackets-coats",
        subcategories: ["All Outerwear", "Wool Coats", "Overcoats", "Trench Coats", "Bomber Jackets", "Puffer Jackets"],
      },
      {
        name: "Leather Jackets",
        slug: "leather-jackets",
        subcategories: ["Biker Jackets", "Leather Bombers", "Suede Jackets", "Leather Overshirts"],
      },
      {
        name: "Trousers",
        slug: "trousers",
        subcategories: ["Tailored Trousers", "Relaxed Fit", "Straight Leg", "Cargo Trousers"],
      },
      {
        name: "Polo Shirts",
        slug: "polo-shirts",
        subcategories: ["Classic Polos", "Knit Polos", "Long Sleeve Polos"],
      },
      {
        name: "T-Shirts",
        slug: "t-shirts",
        subcategories: ["Essential Tees", "Oversized Tees", "Graphic Tees", "Premium Basics"],
      },
      {
        name: "Shirts",
        slug: "shirts",
        subcategories: ["Casual Shirts", "Oxford Shirts", "Overshirts"],
      },
      {
        name: "Knitwear",
        slug: "knitwear",
        subcategories: ["Sweaters", "Cardigans", "Knitwear Essentials"],
      },
      {
        name: "Accessories",
        slug: "accessories",
        subcategories: ["Belts", "Bags", "Scarves"],
      },
    ],
  },
  Women: {
    image: "/images/hero/women-editorial.png",
    title: "THE WOMEN'S EDIT",
    categories: [
      {
        name: "Jackets & Coats",
        slug: "jackets-coats",
        subcategories: ["All Outerwear", "Wool Coats", "Wrap Coats", "Trench Coats", "Statement Coats"],
      },
      {
        name: "Leather Jackets",
        slug: "leather-jackets",
        subcategories: ["Biker Jackets", "Leather Bombers", "Suede Jackets", "Leather Blazers"],
      },
      {
        name: "Trousers",
        slug: "trousers",
        subcategories: ["Tailored Trousers", "Wide Leg", "Straight Leg", "Relaxed Fit"],
      },
      {
        name: "Polo Shirts",
        slug: "polo-shirts",
        subcategories: ["Classic Polos", "Knit Polos", "Fitted Polos"],
      },
      {
        name: "T-Shirts",
        slug: "t-shirts",
        subcategories: ["Essential Tees", "Oversized Tees", "Fitted Tees", "Graphic Tees"],
      },
      {
        name: "Tops & Shirts",
        slug: "tops-shirts",
        subcategories: ["Everyday Tops", "Statement Shirts", "Blouses"],
      },
      {
        name: "Knitwear",
        slug: "knitwear",
        subcategories: ["Sweaters", "Cardigans", "Knit Tops"],
      },
      {
        name: "Accessories",
        slug: "accessories",
        subcategories: ["Bags", "Belts", "Scarves"],
      },
    ],
  },
};

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
        className={`${sticky ? "sticky top-0" : "relative"} z-50 px-3 pt-3 sm:px-5`}
      >
        <div className="relative mx-auto flex h-[66px] max-w-[1600px] items-center justify-between rounded-full border border-white/80 bg-[#F4F2EE]/75 px-4 text-[#090909] shadow-[0_8px_35px_rgba(0,0,0,0.08)] backdrop-blur-2xl sm:px-8">
          {/* LEFT NAVIGATION */}
          <div className="flex flex-1 items-center gap-3 sm:gap-5">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="flex h-10 w-10 items-center justify-center text-xl text-[#090909] transition hover:text-black/60"
            >
              {menuOpen ? "\u00D7" : "\u2630"}
            </button>

            <nav className="hidden items-center gap-5 xl:flex">
              <Link href="/new-arrivals" className="font-sans text-[9px] font-medium tracking-[0.24em] text-[#090909]/75 transition hover:text-black">
                NEW ARRIVALS
              </Link>
              <Link href="/collections/men" className="font-sans text-[9px] font-medium tracking-[0.24em] text-[#090909]/75 transition hover:text-black">
                MEN
              </Link>
              <Link href="/collections/women" className="font-sans text-[9px] font-medium tracking-[0.24em] text-[#090909]/75 transition hover:text-black">
                WOMEN
              </Link>
              <Link href="/collections" className="font-sans text-[9px] font-medium tracking-[0.24em] text-[#090909]/75 transition hover:text-black">
                COLLECTIONS
              </Link>
            </nav>
          </div>

          {/* CENTER WORDMARK */}
          <Link
            href="/"
            onClick={closeMenu}
            aria-label="MIVRA home"
            className="absolute left-1/2 -translate-x-1/2 font-display text-[30px] font-normal tracking-[-0.085em] text-[#090909] transition hover:opacity-75 sm:text-[32px]"
          >
            MIVRA
          </Link>

          {/* RIGHT ICONS */}
          <div className="flex flex-1 items-center justify-end gap-3 sm:gap-5">
            <Link
              href="/search"
              aria-label="Search"
              className="flex h-9 w-9 items-center justify-center text-[#090909]/85 transition hover:text-black"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
                <circle cx="10.8" cy="10.8" r="7" />
                <path d="m16 16 5 5" />
              </svg>
            </Link>

            <Link
              href="/account"
              aria-label="Account"
              className="hidden h-9 w-9 items-center justify-center text-[#090909]/85 transition hover:text-black sm:flex"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
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
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#25D366]/25 bg-[#25D366]/[0.06] text-[#25D366] shadow-[0_3px_14px_rgba(0,0,0,0.05)] backdrop-blur-xl transition hover:border-black/30 hover:bg-white/70"
            >
              <svg viewBox="0 0 24 24" className="h-[21px] w-[21px]" fill="currentColor" aria-hidden="true">
  <path d="M12.04 2a9.85 9.85 0 0 0-8.42 14.96L2.3 21.7l4.85-1.27A9.96 9.96 0 1 0 12.04 2Zm0 18.1a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-2.88.76.77-2.8-.2-.31A8.12 8.12 0 1 1 12.04 20.1Zm4.46-6.08c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.42-1.33-1.66-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z"/>
</svg>
            </a>

            <Link
              href="/cart"
              className="whitespace-nowrap text-[9px] font-semibold tracking-[0.16em] text-[#090909]/90 transition hover:text-black"
            >
              BAG ({isLoaded ? itemCount : "..."})
            </Link>
        </div>

        </div>
      </header>

      {/* MEGA MENU */}
      {menuOpen && (
        <>
          <button
            type="button"
            aria-label="Close navigation"
            onClick={closeMenu}
            className="fixed inset-0 z-40 bg-black/55 backdrop-blur-md"
          />

          <div className="fixed inset-x-3 top-[91px] z-50 mx-auto max-h-[calc(100dvh-110px)] max-w-[1000px] overflow-y-auto rounded-2xl border border-white/20 bg-[#090909]/90 text-white shadow-2xl backdrop-blur-2xl sm:inset-x-5">
            <div className="flex items-center justify-between border-b border-white/15 px-5 py-4 sm:px-7">
              <p className="text-[9px] font-semibold tracking-[0.3em] text-white/65">
                EXPLORE MIVRA
              </p>
              <button
                type="button"
                onClick={closeMenu}
                className="text-xs tracking-widest text-[#292929]/80 transition hover:text-black"
              >
                CLOSE {"\u00D7"}
              </button>
            </div>

            <div className="grid gap-5 p-4 sm:p-6 lg:grid-cols-[1.1fr_1fr]">
              <div>
                <div className="mb-5 grid grid-cols-2 gap-3">
                  {(["Men", "Women"] as Department[]).map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        setDepartment(item);
                        setExpanded("Jackets & Coats");
                      }}
                      className={`relative overflow-hidden rounded-lg border text-left transition ${
                        department === item
                          ? "border-white"
                          : "border-white/20 opacity-65 hover:opacity-100"
                      }`}
                    >
                      <div
                        className="aspect-[2/1] bg-cover bg-center"
                        style={{
                          backgroundImage: `linear-gradient(to top, rgba(0,0,0,.65), transparent), url("${departments[item].image}")`,
                        }}
                      />
                      <span className="absolute bottom-3 left-3 text-sm font-medium">
                        {item} Edit
                      </span>
                    </button>
                  ))}
                </div>

                <div className="mb-3 flex border-b border-white/20">
                  {(["Men", "Women"] as Department[]).map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        setDepartment(item);
                        setExpanded("Jackets & Coats");
                      }}
                      className={`w-1/2 border-b-2 py-3 text-sm transition ${
                        department === item
                          ? "border-white text-white"
                          : "border-transparent text-white/50 hover:text-white"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>

                <div>
                  {current.categories.map((category) => (
                    <button
                      key={category.name}
                      type="button"
                      onClick={() =>
                        setExpanded(
                          expanded === category.name ? "" : category.name
                        )
                      }
                      className={`flex w-full items-center justify-between border-b border-white/10 px-2 py-3.5 text-left text-sm transition hover:bg-white/10 ${
                        expanded === category.name ? "bg-white/10" : ""
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="text-lg text-white/65">
                        {expanded === category.name ? "\u2212" : "+"}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col rounded-xl border border-white/[0.06] bg-white/[0.04] p-5">
                {current.categories
                  .filter((category) => category.name === expanded)
                  .map((category) => (
                    <div key={category.name}>
                      <p className="mb-5 font-display text-3xl">
                        {category.name}
                      </p>

                      <Link
                        href={`/collections/${department.toLowerCase()}?category=${category.slug}`}
                        onClick={closeMenu}
                        className="mb-4 inline-block border-b border-white/40 pb-1 text-[10px] font-semibold tracking-widest transition hover:border-white"
                      >
                        SHOP ALL {category.name.toUpperCase()}
                      </Link>

                      <div className="flex flex-col">
                        {category.subcategories.map((sub) => (
                          <Link
                            key={sub}
                            href={`/collections/${department.toLowerCase()}?category=${category.slug}&style=${encodeURIComponent(sub)}`}
                            onClick={closeMenu}
                            className="border-b border-white/10 py-3 text-sm text-white/75 transition hover:pl-2 hover:text-white"
                          >
                            {sub}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}

                {!expanded && (
                  <div className="flex flex-1 items-center justify-center">
                    <p className="font-display text-2xl text-white/50">
                      DEFINE YOUR STYLE.
                    </p>
                  </div>
                )}

                <Link
                  href={`/collections/${department.toLowerCase()}`}
                  onClick={closeMenu}
                  className="mt-auto border-t border-white/15 pt-5 text-[10px] font-semibold tracking-[0.2em] text-white/75 transition hover:text-white"
                >
                  EXPLORE THE {department.toUpperCase()} COLLECTION {"\u2192"}
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
