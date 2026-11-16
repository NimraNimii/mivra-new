"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Product } from "@/data/products";
import { useBag } from "@/context/BagContext";
import { formatPrice } from "@/lib/currency";

export default function ProductDetails({ product }: { product: Product }) {
  const { addItem } = useBag();
  const router = useRouter();

  const [size, setSize] = useState("");
  const [color, setColor] = useState(product.colors[0]?.name ?? "");
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  function addToBag() {
    if (!size) {
      setMessage("Please select your size.");
      return;
    }

    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size,
      color,
      quantity,
    });
    setMessage("Added to your bag.");
  }

   function buyNow() {
    if (!size) {
      setMessage("Please select your size.");
      return;
    }

    const buyNowItem = {
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size,
      color,
      quantity,
    };

    sessionStorage.setItem(
      "mivra-buy-now",
      JSON.stringify(buyNowItem)
    );

    router.push("/checkout?mode=buy-now");
  }

  return (
    <main className="mx-auto max-w-[1500px] px-5 py-10 sm:px-10 lg:px-14">
      <div className="mb-8 text-[10px] tracking-[0.15em] text-chrome">
        <Link href="/">HOME</Link>
        {" / "}
        <Link href={`/collections/${product.audience.toLowerCase()}`}>
          {product.audience.toUpperCase()}
        </Link>
        {" / "}
        {product.category.toUpperCase()}
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden bg-[#E9E5DF]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
          />
        </div>

        <section className="lg:sticky lg:top-28 lg:self-start">
          <p className="mb-4 text-[10px] tracking-[0.2em] text-chrome">
            MIVRA / {product.audience.toUpperCase()}
          </p>

          <h1 className="font-display text-4xl leading-tight sm:text-5xl">
            {product.name}
          </h1>

          <p className="mt-5 text-xl font-medium">
           {formatPrice(product.price)}
          </p>

          <p className="mt-7 max-w-lg text-sm leading-7 text-carbon">
            {product.description}
          </p>

          <div className="mt-9">
            <div className="mb-4 flex justify-between">
              <span className="text-[10px] font-semibold tracking-widest">
                COLOUR
              </span>
              <span className="text-xs text-chrome">{color}</span>
            </div>

            <div className="flex gap-3">
              {product.colors.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setColor(item.name)}
                  aria-label={`Select ${item.name}`}
                  aria-pressed={color === item.name}
                  className={`h-9 w-9 rounded-full border-2 p-[3px] ${
                    color === item.name
                      ? "border-obsidian"
                      : "border-transparent"
                  }`}
                >
                  <span
                    className="block h-full w-full rounded-full border border-black/10"
                    style={{ backgroundColor: item.hex }}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="mt-9">
            <p className="mb-4 text-[10px] font-semibold tracking-widest">
              SELECT SIZE
            </p>

            <div className="flex flex-wrap gap-2">
              {product.sizes.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setSize(item);
                    setMessage("");
                  }}
                  aria-pressed={size === item}
                  className={`min-w-12 border px-4 py-3 text-xs ${
                    size === item
                      ? "border-obsidian bg-obsidian text-white"
                      : "border-black/20 hover:border-obsidian"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-9 flex gap-3">
            <div className="flex items-center border border-black/20">
              <button
                type="button"
                onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                className="px-4 py-3"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="min-w-8 text-center text-sm">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((value) => value + 1)}
                className="px-4 py-3"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <button
              type="button"
              onClick={addToBag}
              className="flex-1 bg-obsidian px-4 py-4 text-[9px] font-semibold tracking-[0.15em] text-white transition hover:bg-carbon sm:text-[10px]"
            >
              ADD TO BAG
            </button>

            <button
              type="button"
              onClick={buyNow}
              className="flex-1 border border-obsidian bg-transparent px-4 py-4 text-[9px] font-semibold tracking-[0.15em] text-obsidian transition hover:bg-obsidian hover:text-white sm:text-[10px]"
            >
              BUY IT NOW
            </button>
          </div>

          {message && (
            <p role="status" className="mt-4 text-sm text-chrome">
              {message}
            </p>
          )}

          <div className="mt-10 border-t border-black/10 pt-6">
            <p className="text-[10px] font-semibold tracking-widest">
              PRODUCT DETAILS
            </p>
            <p className="mt-3 text-xs leading-6 text-chrome">
              {product.description}
            </p>
            <p className="mt-4 text-[10px] tracking-widest text-chrome">
              REF: {product.id.toUpperCase()}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
