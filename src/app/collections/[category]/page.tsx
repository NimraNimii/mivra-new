
import { Suspense } from "react";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import NewArrivalsGrid from "@/components/product/NewArrivalsGrid";

const categories = [
  "t-shirts",
  "shirts",
  "jackets",
  "trousers",
  "polo-shirts",
  "knitwear",
  "tops",
  "coats",
];

export function generateStaticParams() {
  return categories.map((category) => ({ category }));
}

function CategoryContent({ category }: { category: string }) {
  const title = category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <section className="mx-auto max-w-[1600px] px-5 pb-20 pt-16 sm:px-10">
      <p className="mb-3 text-[10px] tracking-[0.25em] text-[#777D82]">
        MIVRA / COLLECTIONS
      </p>

      <h1 className="mb-10 font-display text-5xl sm:text-7xl">
        {title}
      </h1>

<NewArrivalsGrid
  showAllProducts
  categorySlug={category}
/>
    </section>
  );
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  return (
    <main className="min-h-screen bg-[#F4F2EE]">
      <AnnouncementBar />
      <Header />
      <Suspense fallback={<div className="min-h-[60vh]" />}>
        <CategoryContent category={category} />
      </Suspense>
    </main>
  );
}
