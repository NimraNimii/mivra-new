"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/currency";

const suggestions = [
  "New Arrivals",
  "Women",
  "Men",
  "Coats",
  "Leather Jackets",
  "Trousers",
];

export default function SearchPage() {
 const [query, setQuery] = useState("");

useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  setQuery(params.get("q") ?? "");
}, []);

function handleSearchChange(value: string) {
  setQuery(value);

  const params = new URLSearchParams(window.location.search);

  if (value.trim()) {
    params.set("q", value);
  } else {
    params.delete("q");
  }

  const queryString = params.toString();
  const newUrl = queryString
    ? `${window.location.pathname}?${queryString}`
    : window.location.pathname;

  window.history.replaceState(null, "", newUrl);
}

  const filteredProducts = useMemo(() => {
    const searchTerm = query.trim().toLowerCase();

    if (!searchTerm) return [];

    return products.filter((product) => {
      const searchableText = [
        product.name,
        product.audience,
        product.category,
        product.subcategory,
        product.description,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchableText.includes(searchTerm);
    });
  }, [query]);
const liveSuggestions = query.trim()
  ? filteredProducts.slice(0, 5)
  : [];
  return (
    <main className="min-h-screen bg-[#F4F2EE] text-[#090909]">
      <AnnouncementBar />
      <Header />

      <section className="mx-auto min-h-[65vh] max-w-[1500px] px-5 pb-24 pt-32 sm:px-10 sm:pt-36 lg:px-14 lg:pt-40">
        <div className="mx-auto max-w-4xl">
          <p className="mb-5 text-[10px] tracking-[0.28em] text-[#777D82]">
            MIVRA / DISCOVER
          </p>

          <h1 className="font-serif text-5xl tracking-tight sm:text-6xl lg:text-7xl">
            Find your style.
          </h1>

          <p className="mt-5 text-sm text-[#777D82]">
            Explore the MIVRA collection and discover pieces made to define
            your style.
          </p>

          <div className="mt-12 flex items-center border-b border-black/40 pb-4">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="mr-4 h-6 w-6 shrink-0"
            >
              <circle
                cx="10.8"
                cy="10.8"
                r="6.8"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="m16 16 4.5 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>

            <input
              type="search"
              value={query}
onChange={(event) => handleSearchChange(event.target.value)}
  placeholder="Search products, collections and styles..."
              aria-label="Search MIVRA products"
              className="w-full bg-transparent text-base outline-none placeholder:text-[#999] sm:text-lg"
            />

            {query && (
              <button
                type="button"
                onClick={() => handleSearchChange("")}
                className="ml-3 shrink-0 text-[10px] tracking-[0.15em] text-[#777D82] hover:text-black"
              >
                CLEAR
              </button>
            )}
                   </div>

          {query.trim() && liveSuggestions.length > 0 && (
            <div className="mt-3 overflow-hidden border border-black/10 bg-white">
              {liveSuggestions.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className="flex items-center gap-4 border-b border-black/10 p-3 transition last:border-b-0 hover:bg-[#F4F2EE]"
                >
                  <div className="relative h-16 w-12 shrink-0 overflow-hidden bg-[#E8E5DF]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">
                      {product.name}
                    </p>
                    <p className="mt-1 text-[10px] tracking-wide text-[#777D82]">
                      {product.audience.toUpperCase()} / {product.category}
                    </p>
                  </div>

                  <span className="shrink-0 text-xs">
                 {formatPrice(Number(product.price))}
                  </span>
                </Link>
              ))}
            </div>
          )}

          {!query.trim() && (
            <div className="mt-8">
              <p className="mb-4 text-[10px] font-semibold tracking-[0.2em]">
                POPULAR SEARCHES
              </p>

              <div className="flex flex-wrap gap-3">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => handleSearchChange(suggestion)}
                    className="border border-black/15 px-4 py-2 text-xs transition hover:border-black hover:bg-black hover:text-white"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {query.trim() && (
          <div className="mt-16">
            <div className="mb-8 flex items-center justify-between border-b border-black/15 pb-5">
              <h2 className="font-serif text-2xl">
                Search results
              </h2>

              <p className="text-[10px] tracking-[0.12em] text-[#777D82]">
                {filteredProducts.length}{" "}
                {filteredProducts.length === 1 ? "PRODUCT" : "PRODUCTS"}
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden bg-[#E8E5DF]">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover transition duration-700 group-hover:scale-[1.04]"
                      />
                    </div>

                    <div className="mt-4 flex items-start justify-between gap-2">
                      <div>
                        <p className="text-[9px] tracking-[0.15em] text-[#777D82]">
                          {product.audience.toUpperCase()}
                        </p>

                        <h3 className="mt-2 text-xs font-medium sm:text-sm">
                          {product.name}
                        </h3>
                      </div>

                      <p className="shrink-0 text-xs">
                    {formatPrice(Number(product.price))}
                      </p>
                    </div>

                    <p className="mt-2 text-[10px] text-[#777D82]">
                      {product.category}
                    </p>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="font-serif text-3xl">
                  No pieces found.
                </p>
                <p className="mt-4 text-sm text-[#777D82]">
                  Try another search or explore our popular categories.
                </p>

                <div className="mt-7 flex flex-wrap justify-center gap-3">
                  {suggestions.slice(1).map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                     onClick={() => handleSearchChange(suggestion)}
                      className="border border-black/20 px-4 py-2 text-xs transition hover:bg-black hover:text-white"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
