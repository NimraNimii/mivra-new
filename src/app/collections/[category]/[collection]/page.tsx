
import { notFound } from "next/navigation";
import { Suspense } from "react";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import NewArrivalsGrid from "@/components/product/NewArrivalsGrid";

type CollectionConfig = {
  title: string;
  categorySlug: string;
  subcategorySlug?: string;
};

const collections: Record<string, CollectionConfig> = {
  coats: {
    title: "Coats",
    categorySlug: "coats",
  },
  "leather-jackets": {
    title: "Leather Jackets",
    categorySlug: "jackets",
  },
  overcoats: {
    title: "Overcoats",
    categorySlug: "coats",
    subcategorySlug: "Overcoats",
  },
};

type Audience = "men" | "women";

type CollectionPageProps = {
  params: Promise<{
    category: string;
    collection: string;
  }>;
};

async function CollectionContent({ params }: CollectionPageProps) {
  const { category, collection } = await params;

  const audience = category;

  if (audience !== "men" && audience !== "women") {
    notFound();
  }

  const selectedCollection = collections[collection];

  if (!selectedCollection) {
    notFound();
  }

  const department: Audience = audience;
  const displayAudience =
    department === "men" ? "Men" : "Women";

  return (
    <section className="mx-auto max-w-[1600px] px-5 pb-20 pt-14 sm:px-10 sm:pt-20 lg:px-14">
      <div className="mb-12 border-b border-black/10 pb-10 sm:mb-14">
        <p className="mb-5 text-[9px] font-semibold tracking-[0.32em] text-chrome">
          MIVRA / {displayAudience.toUpperCase()} / COLLECTIONS
        </p>

        <h1 className="font-display text-5xl leading-[0.95] tracking-[-0.045em] sm:text-7xl lg:text-8xl">
          {selectedCollection.title.toUpperCase()}
          <span className="text-taupe">.</span>
        </h1>

        <p className="mt-7 max-w-lg text-sm leading-7 text-carbon">
          Discover the MIVRA {displayAudience.toLowerCase()}{" "}
          {selectedCollection.title.toLowerCase()} edit.
          Considered silhouettes and distinctive essentials.
        </p>
      </div>

      <Suspense
        fallback={
          <div className="py-20 text-center">
            Loading collection...
          </div>
        }
      >
        <NewArrivalsGrid
          audience={displayAudience}
          showAllProducts
          categorySlug={selectedCollection.categorySlug}
          subcategorySlug={selectedCollection.subcategorySlug}
        />
      </Suspense>
    </section>
  );
}

export default function NestedCollectionPage({
  params,
}: CollectionPageProps) {
  return (
    <main className="min-h-screen bg-pearl">
      <AnnouncementBar />
      <Header />

      <Suspense
        fallback={
          <div className="min-h-[60vh] bg-pearl" />
        }
      >
        <CollectionContent params={params} />
      </Suspense>
    </main>
  );
}
