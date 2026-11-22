
"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import type { ProductAudience } from "@/data/products";
import { useBag } from "@/context/BagContext";
import { formatPrice } from "@/lib/currency";

type Props = {
  audience?: ProductAudience;
  editorial?: boolean;
  showAllProducts?: boolean;
  categorySlug?: string;
  subcategorySlug?: string;
  presentation?: "default" | "women";
};

function normalizeSlug(value?: string | null) {
  return (value || "")
    .toLowerCase()
    .trim()
    .replace(/_/g, "-");
}

function getCategoryFromSlug(slug?: string | null) {
  const categoryMap: Record<string, string> = {
    "jackets-coats": "Coats",
    "jackets-and-coats": "Coats",
    coats: "Coats",
    "leather-jackets": "Leather Jackets",
    trousers: "Trousers",
    "polo-shirts": "Polo Shirts",
    "t-shirts": "T-Shirts",
    tshirts: "T-Shirts",
    shirts: "Shirts",
    knitwear: "Knitwear",
    tops: "Tops",
    "tops-shirts": "Tops",
    "tops-and-shirts": "Tops",
    accessories: "Accessories",
  };

  const normalized = normalizeSlug(slug);

  if (!normalized) return "All";

  return categoryMap[normalized] || "All";
}

function getCollectionCategories(slug?: string): string[] {
  const categoryMap: Record<string, string[]> = {
    "t-shirts": ["T-Shirts"],
    shirts: ["Shirts"],
    jackets: ["Leather Jackets"],
    trousers: ["Trousers"],
    "polo-shirts": ["Polo Shirts"],
    knitwear: ["Knitwear"],
    tops: ["Tops"],
    coats: ["Coats"],
  };

  return categoryMap[normalizeSlug(slug)] || [];
}

export default function NewArrivalsGrid({
  audience,
  editorial = false,
  showAllProducts = false,
  categorySlug,
  subcategorySlug,
  presentation = "default",
}: Props) {
  const isWomenPresentation = presentation === "women";
  const router = useRouter();
  const { addItem, itemCount } = useBag();
  const searchParams = useSearchParams();
  const collectionCategories = getCollectionCategories(categorySlug);

const [activeAudience, setActiveAudience] = useState<
  "All" | ProductAudience
>("All");
  const categoryFilter = getCategoryFromSlug(
    searchParams.get("category") || undefined
  );
const subcategoryFilter =
  subcategorySlug || searchParams.get("subcategory") || "";

  const [activeFilter, setActiveFilter] = useState(categoryFilter);
  const [activeSubcategory, setActiveSubcategory] = useState(
  subcategoryFilter
);
  const [sort, setSort] = useState("featured");
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({});
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [message, setMessage] = useState<Record<string, string>>({});

  useEffect(() => {
    setActiveFilter(categoryFilter);
  }, [categoryFilter]);

  useEffect(() => {
  setActiveSubcategory(subcategoryFilter);
}, [subcategoryFilter]);

const audienceProducts = useMemo(() => {
  let result = audience
    ? products.filter((product) => product.audience === audience)
    : showAllProducts
      ? [...products]
      : products.filter((product) => product.isNewArrival);

  if (categorySlug) {
    result = result.filter((product) =>
      collectionCategories.includes(product.category)
    );
  }

  return result;
}, [audience, showAllProducts, categorySlug]);

const filters = categorySlug
  ? audience
    ? ["All"]
    : ["All", "Men", "Women"]
  : [
      "All",
      ...Array.from(
        new Set(audienceProducts.map((product) => product.category))
      ),
    ];

  const visibleProducts = useMemo(() => {
let result = [...audienceProducts];

if (categorySlug && activeAudience !== "All") {
  result = result.filter(
    (product) => product.audience === activeAudience
  );
}

if (!categorySlug && activeFilter !== "All") {
    result = result.filter(
      (product) => product.category === activeFilter
    );
  }

if (activeSubcategory) {
    result = result.filter(
      (product) =>
        normalizeSlug(product.subcategory) ===
         normalizeSlug(activeSubcategory)
    );
  }

  if (sort === "price-low") {
    result.sort((a, b) => a.price - b.price);
  }

  if (sort === "price-high") {
    result.sort((a, b) => b.price - a.price);
  }

  if (sort === "name") {
    result.sort((a, b) => a.name.localeCompare(b.name));
  }

  return result;
}, [
  activeFilter,
  activeSubcategory,
  activeAudience,
  categorySlug,
  sort,
  audienceProducts,
]);

  const toggleWishlist = (id: string) => {
    setWishlist((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const addToBag = (id: string) => {
    if (!selectedSizes[id]) {
      setMessage((current) => ({
        ...current,
        [id]: "Please select a size first.",
      }));
      return;
    }

    const product = products.find((item) => item.id === id);

    if (!product) return;

    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSizes[id],
      color: selectedColors[id] || product.colors[0]?.name || "",
      quantity: 1,
    });

    setMessage((current) => ({
      ...current,
      [id]: "Added to your bag.",
    }));
  };
  const buyNow = (id: string) => {
    if (!selectedSizes[id]) {
      setMessage((current) => ({
        ...current,
        [id]: "Please select a size first.",
      }));
      return;
    }

    const product = products.find((item) => item.id === id);

    if (!product) return;

    const buyNowItem = {
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSizes[id],
      color: selectedColors[id] || product.colors[0]?.name || "",
      quantity: 1,
    };

    sessionStorage.setItem(
      "mivra-buy-now",
      JSON.stringify(buyNowItem)
    );

    router.push("/checkout?mode=buy-now");
  };
  return (
    <div>
      <div className="mb-8 flex flex-col gap-5 border-b border-black/10 pb-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
           onClick={() => {
  if (categorySlug) {
    setActiveAudience(filter as "All" | ProductAudience);
  } else {
    setActiveFilter(filter);
  }
}}
              className={`border px-5 py-2.5 text-[10px] font-semibold tracking-[0.14em] transition ${
               (categorySlug ? activeAudience : activeFilter) === filter
                  ? "border-obsidian bg-obsidian text-white"
                  : "border-black/15 text-obsidian hover:border-obsidian"
              }`}
            >
              {filter.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between gap-4">
          <p className="text-[10px] tracking-[0.12em] text-chrome">
            {visibleProducts.length} PRODUCTS
          </p>
{activeFilter !== "All" && (
  <div className="mt-4 flex flex-wrap gap-2">
    <button
      type="button"
      onClick={() => setActiveSubcategory("")}
      className={`border px-4 py-2 text-[9px] tracking-[0.12em] ${
        !activeSubcategory
          ? "border-obsidian bg-obsidian text-white"
          : "border-black/15"
      }`}
    >
      ALL STYLES
    </button>

    {Array.from(
      new Set(
        audienceProducts
          .filter((product) => product.category === activeFilter)
          .map((product) => product.subcategory)
      )
    ).map((subcategory) => (
      <button
        key={subcategory}
        type="button"
        onClick={() => setActiveSubcategory(subcategory)}
        className={`border px-4 py-2 text-[9px] tracking-[0.12em] ${
          activeSubcategory === subcategory
            ? "border-obsidian bg-obsidian text-white"
            : "border-black/15"
        }`}
      >
        {subcategory.toUpperCase()}
      </button>
    ))}
  </div>
)}
          <label className="flex items-center gap-3 text-[10px] tracking-[0.12em]">
            SORT BY
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              className="border border-black/15 bg-transparent px-3 py-2 text-[10px] outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name</option>
            </select>
          </label>
        </div>
      </div>

      <div className="mb-5 text-right text-[10px] tracking-[0.15em] text-chrome">
        BAG: {itemCount} ITEMS
      </div>

      <div className={isWomenPresentation ? "grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4" : "grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4"}>
      {visibleProducts.map((product, index) => {
          const selectedColor =
            selectedColors[product.id] || product.colors[0].name;

         return (
  <Fragment key={product.id}>
<article
  className={
    isWomenPresentation
      ? "group min-w-0"
      : "group min-w-0"
  }
>
            <div
  className={
    isWomenPresentation
      ? "relative aspect-[3/4] overflow-hidden bg-[#E9DED2]"
      : "relative aspect-[3/4] overflow-hidden bg-[#E9E5DF]"
  }
>
                <Link
                  href={`/products/${product.slug}`}
                  aria-label={`View ${product.name}`}
                  className="absolute inset-0 z-0"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </Link>

                {product.badge && (
                  <span className="pointer-events-none absolute left-3 top-3 z-10 bg-pearl px-3 py-2 text-[8px] font-semibold tracking-[0.16em] text-obsidian">
                    {product.badge}
                  </span>
                )}

                <button
                  type="button"
                  onClick={() => toggleWishlist(product.id)}
                  aria-label={
                    wishlist.includes(product.id)
                      ? "Remove from wishlist"
                      : "Add to wishlist"
                  }
                  aria-pressed={wishlist.includes(product.id)}
                  className={
  isWomenPresentation
    ? "absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/70 bg-white/80 text-xl text-[#49372D] shadow-sm transition-all duration-300 hover:scale-105 hover:bg-white"
    : "absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/45 text-xl text-white backdrop-blur-sm"
}
                >
{wishlist.includes(product.id) ? "\u2665" : "\u2661"}                </button>
              </div>

<div
  className={
    isWomenPresentation
      ? "pt-3 sm:pt-4"
      : "pt-4"
  }
>
               <p
  className={
    isWomenPresentation
      ? "mb-2 text-[8px] font-medium tracking-[0.19em] text-[#9A806C]"
      : "mb-2 text-[9px] tracking-[0.16em] text-chrome"
  }
>
                  {product.audience.toUpperCase()} / {product.category.toUpperCase()}
                </p>

                <Link
                  href={`/products/${product.slug}`}
                  className="font-display text-lg leading-snug transition hover:opacity-60 sm:text-xl"
                >
                  {product.name}
                </Link>

                <p
  className={
    isWomenPresentation
      ? "mt-2 text-base font-semibold tracking-tight text-[#49372D]"
      : "mt-2 text-sm font-medium"
  }
>
  {formatPrice(product.price)}
</p>

                <div className="mt-3 flex items-center gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() =>
                        setSelectedColors((current) => ({
                          ...current,
                          [product.id]: color.name,
                        }))
                      }
                      aria-label={`Select ${color.name}`}
                      aria-pressed={selectedColor === color.name}
                      title={color.name}
                    className={`h-7 w-7 rounded-full border-2 transition ${
  selectedColor === color.name
    ? isWomenPresentation
      ? "border-[#8D705B] p-[3px] shadow-[0_0_0_3px_rgba(255,255,255,0.65)]"
      : "border-obsidian p-[3px]"
    : isWomenPresentation
      ? "border-white/60 hover:border-[#A58C75]"
      : "border-transparent"
}`}
                    >
                      <span
                        className="block h-full w-full rounded-full border border-black/10"
                        style={{ backgroundColor: color.hex }}
                      />
                    </button>
                  ))}
                  <span className="text-[9px] text-chrome">
                    {selectedColor}
                  </span>
                </div>

                <p className="mb-2 mt-5 text-[9px] font-semibold tracking-[0.15em]">
                  SELECT SIZE
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => {
                        setSelectedSizes((current) => ({
                          ...current,
                          [product.id]: size,
                        }));
                        setMessage((current) => ({
                          ...current,
                          [product.id]: "",
                        }));
                      }}
                      aria-pressed={selectedSizes[product.id] === size}
                    className={`min-w-8 rounded-md border px-2.5 py-1.5 text-[9px] transition-all duration-300 ${
  selectedSizes[product.id] === size
    ? isWomenPresentation
      ? "border-[#49372D] bg-[#49372D] text-white shadow-md"
      : "border-obsidian bg-obsidian text-white"
    : isWomenPresentation
      ? "border-white/70 bg-white/35 text-[#49372D] backdrop-blur-md hover:border-[#A58C75] hover:bg-white/70"
      : "border-black/20 hover:border-obsidian"
}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>

             
                {isWomenPresentation ? (
                  <div className="mt-3 grid grid-cols-1 gap-2">
                    <button
                      type="button"
                      onClick={() => addToBag(product.id)}
                      className="w-full border border-[#49372D] bg-transparent px-3 py-2.5 text-[9px] font-semibold tracking-[0.18em] text-[#49372D] transition-all duration-300 hover:bg-[#49372D] hover:text-white"
                    >
                      QUICK ADD
                    </button>

                    <button
                      type="button"
                      onClick={() => buyNow(product.id)}
                      className="w-full bg-[#49372D] px-3 py-3 text-[9px] font-semibold tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#30241E]"
                    >
                      BUY IT NOW
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => addToBag(product.id)}
                    className="mt-3 w-full bg-obsidian px-3 py-3 text-[9px] font-semibold tracking-[0.18em] text-white transition hover:bg-carbon"
                  >
                    QUICK ADD
                  </button>
                )}


                {message[product.id] && (
                  <p role="status" className="mt-2 text-[10px] text-chrome">
                    {message[product.id]}
                  </p>
                )}
              </div>
                        </article>

            {/* Editorial campaign after the first four products */}
            {editorial && visibleProducts.length >= 20 && index === 3 && (
              <section className="relative col-span-full my-8 grid min-h-[420px] overflow-hidden bg-[#D8C8B6] lg:grid-cols-2">
                <div className="relative min-h-[300px]">
                  <Image
                    src="/images/hero/women-editorial.png"
                    alt="MIVRA autumn winter layering editorial"
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                  />
                </div>

                <div className="flex flex-col justify-center px-8 py-12 sm:px-14 lg:px-16">
                  <p className="mb-5 text-[10px] font-semibold tracking-[0.35em]">
                    M I V R A &nbsp; E D I T
                  </p>

                  <h2 className="max-w-lg font-display text-5xl leading-[0.95] sm:text-6xl">
                    THE ART OF
                    <br />
                    LAYERING<span className="text-[#B5A797]">.</span>
                  </h2>

                  <p className="mt-5 max-w-sm font-display text-xl italic">
                    Considered layers. Effortless presence.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href="/collections/women"
                      className="bg-obsidian px-7 py-4 text-center text-[10px] font-semibold tracking-[0.16em] text-white transition hover:bg-carbon"
                    >
                      SHOP WOMEN
                    </Link>

                    <Link
                      href="/collections/men"
                      className="border border-obsidian px-7 py-4 text-center text-[10px] font-semibold tracking-[0.16em] transition hover:bg-obsidian hover:text-white"
                    >
                      SHOP MEN
                    </Link>
                  </div>
                </div>
              </section>
            )}

            {/* Two editorial stories after product twelve */}
            {editorial && visibleProducts.length >= 20 && index === 11 && (
              <section className="col-span-full my-8 grid gap-5 md:grid-cols-2">
                <Link
                  href="/collections/women?category=leather-jackets"
                  className="group relative flex min-h-[360px] items-end overflow-hidden bg-[#35251F] p-8 text-white sm:p-12"
                >
                  <Image
                    src="/images/hero/women-editorial.png"
                    alt="MIVRA leather edit"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover opacity-65 transition duration-700 group-hover:scale-105"
                  />

                  <div className="relative z-10">
                    <p className="mb-4 text-[9px] tracking-[0.3em]">
                      THE MIVRA COLLECTION
                    </p>
                    <h2 className="font-display text-4xl sm:text-5xl">
                      THE LEATHER EDIT.
                    </h2>
                    <p className="mt-3 font-display text-lg italic">
                      A modern wardrobe essential.
                    </p>
                    <span className="mt-6 inline-block border border-white px-6 py-3 text-[9px] tracking-[0.2em]">
                      EXPLORE LEATHER
                    </span>
                  </div>
                </Link>

                <Link
                  href="/collections/women?category=knitwear"
                  className="group relative flex min-h-[360px] items-end overflow-hidden bg-[#777064] p-8 text-white sm:p-12"
                >
                  <Image
                    src="/images/hero/men-editorial.png"
                    alt="MIVRA knitwear edit"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover opacity-65 transition duration-700 group-hover:scale-105"
                  />

                  <div className="relative z-10">
                    <p className="mb-4 text-[9px] tracking-[0.3em]">
                      TEXTURE AND FORM
                    </p>
                    <h2 className="font-display text-4xl sm:text-5xl">
                      THE KNITWEAR EDIT.
                    </h2>
                    <p className="mt-3 font-display text-lg italic">
                      Texture meets simplicity.
                    </p>
                    <span className="mt-6 inline-block border border-white px-6 py-3 text-[9px] tracking-[0.2em]">
                      EXPLORE KNITWEAR
                    </span>
                  </div>
                </Link>
              </section>
            )}

            {/* MIVRA brand statement after product twenty */}
            {editorial && visibleProducts.length >= 20 && index === 19 && (
              <section className="col-span-full my-10 border-y border-black/15 px-6 py-16 text-center sm:py-24">
                <p className="mb-5 text-[10px] font-semibold tracking-[0.35em] text-chrome">
                  THE MIVRA PHILOSOPHY
                </p>

                <h2 className="mx-auto max-w-4xl font-display text-4xl leading-tight sm:text-6xl">
                  LESS, BUT BETTER.
                  <br />
                  STYLE WITHOUT SEASON.
                </h2>

                <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-chrome">
                  Contemporary essentials, considered silhouettes and
                  timeless pieces designed to move beyond the moment.
                </p>

                <Link
                  href="/collections/men"
                  className="mt-8 inline-block border-b border-obsidian pb-2 text-[10px] font-semibold tracking-[0.2em]"
                >
                  DISCOVER MIVRA
                </Link>
              </section>
            )}
          </Fragment>
          );
        })}
      </div>

      {visibleProducts.length === 0 && (
        <p className="py-20 text-center text-sm text-chrome">
          No products found in this collection.
        </p>
      )}
    </div>
  );
}
