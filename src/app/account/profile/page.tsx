import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import { products } from "@/data/products";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { connection } from "next/server";
import { signOut, updateProfile } from "./actions";

async function AccountProfileContent() {
  await connection();
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/account");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, email")
    .eq("id", user.id)
    .maybeSingle();

  const fullName =
    profile?.full_name || user.user_metadata?.full_name || "";

  const email = profile?.email || user.email || "";
  const firstName = fullName.trim().split(/\s+/)[0] || "there";
  const featuredProducts = products.slice(0, 3);

  return (
    <main className="min-h-screen bg-pearl">
      <AnnouncementBar />
      <Header />

      <div className="mx-auto max-w-[1500px] px-4 pb-20 pt-7 sm:px-8 lg:px-12">
        <section className="relative min-h-[300px] overflow-hidden bg-carbon sm:min-h-[390px]">
          <Image
            src="/images/mivra-account-editorial.jpg"
            alt="MIVRA fashion editorial"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />

          <div className="relative z-10 flex min-h-[300px] flex-col justify-between p-7 text-white sm:min-h-[390px] sm:p-12 lg:p-16">
            <p className="text-[9px] font-semibold tracking-[0.35em]">
              MIVRA / YOUR PERSONAL SPACE
            </p>

            <div>
              <h1 className="max-w-2xl font-display text-5xl leading-[0.98] tracking-tight sm:text-7xl">
                Welcome back,
                <br />
                {firstName}.
              </h1>
              <p className="mt-5 max-w-md text-xs leading-6 text-white/85 sm:text-sm">
                Your details, your style, your MIVRA experience — all in one place.
              </p>
            </div>

            <p className="text-[9px] font-semibold tracking-[0.3em]">
              DEFINE YOUR STYLE.
            </p>
          </div>
        </section>

        <div className="mb-8 mt-12 flex flex-col justify-between gap-4 border-b border-black/10 pb-7 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-[9px] font-semibold tracking-[0.3em] text-chrome">
              CUSTOMER DASHBOARD
            </p>
            <h2 className="font-display text-4xl sm:text-5xl">
              My account<span className="text-taupe">.</span>
            </h2>
          </div>
          <p className="text-xs text-chrome">
            Your MIVRA account at a glance.
          </p>
        </div>

        <section className="grid gap-6 lg:grid-cols-[0.85fr_1.5fr]">
          <aside className="border border-black/10 bg-white p-6 sm:p-8">
            <p className="text-[9px] font-semibold tracking-[0.25em] text-chrome">
              ACCOUNT OVERVIEW
            </p>

            <div className="mt-7 flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-pearl font-display text-2xl">
                {firstName.charAt(0).toUpperCase()}
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-2xl">
                  {fullName || "MIVRA Customer"}
                </h3>
                <p className="mt-1 break-all text-[10px] text-chrome">
                  {email}
                </p>
              </div>
            </div>

            <div className="my-7 border-t border-black/10" />

            <div className="space-y-5 text-xs">
              <div className="flex justify-between gap-3">
                <span className="text-chrome">Account status</span>
                <span className="font-medium">Active</span>
              </div>
              <div className="flex justify-between gap-3">
                <span className="text-chrome">Email</span>
                <span className="font-medium">Verified</span>
              </div>
              <div className="flex justify-between gap-3">
                <span className="text-chrome">Orders</span>
                <Link href="/account/orders" className="font-medium underline underline-offset-4 hover:text-chrome">View orders →</Link>
              </div>
            </div>

            <div className="my-7 border-t border-black/10" />

            <form action={signOut}>
              <button
                type="submit"
                className="text-[10px] font-semibold tracking-[0.2em] text-chrome underline underline-offset-4 transition hover:text-black"
              >
                SIGN OUT
              </button>
            </form>
          </aside>

          <section className="border border-black/10 bg-white p-6 sm:p-8">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-[9px] font-semibold tracking-[0.25em] text-chrome">
                  PERSONAL INFORMATION
                </p>
                <h3 className="mt-3 font-display text-3xl">
                  Your details
                </h3>
              </div>
              <span className="text-[10px] text-chrome">
                Manage your information
              </span>
            </div>

            <form action={updateProfile} className="space-y-7">
              <div>
                <label
                  htmlFor="full_name"
                  className="mb-3 block text-[9px] font-semibold tracking-[0.2em]"
                >
                  FULL NAME
                </label>
                <input
                  id="full_name"
                  name="full_name"
                  type="text"
                  required
                  defaultValue={fullName}
                  autoComplete="name"
                  className="w-full border-b border-black/20 bg-transparent px-0 py-3 text-sm outline-none transition focus:border-black"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-3 block text-[9px] font-semibold tracking-[0.2em]"
                >
                  EMAIL ADDRESS
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  readOnly
                  className="w-full border-b border-black/10 bg-transparent px-0 py-3 text-sm text-chrome outline-none"
                />
                <p className="mt-2 text-[10px] text-chrome">
                  Your registered email address cannot be changed here.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-6">
                <p className="max-w-xs text-[10px] leading-5 text-chrome">
                  Your personal information is securely linked to your account.
                </p>
                <button
                  type="submit"
                  className="bg-obsidian px-8 py-4 text-[9px] font-semibold tracking-[0.2em] text-white transition hover:bg-carbon"
                >
                  SAVE CHANGES
                </button>
              </div>
            </form>
          </section>
        </section>

        <section className="mt-16">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4 border-b border-black/10 pb-5">
            <div>
              <p className="text-[9px] font-semibold tracking-[0.25em] text-chrome">
                SELECTED FOR YOU
              </p>
              <h3 className="mt-3 font-display text-3xl sm:text-4xl">
                Discover MIVRA
              </h3>
            </div>
            <Link
              href="/new-arrivals"
              className="text-[9px] font-semibold tracking-[0.18em] underline underline-offset-4"
            >
              EXPLORE ALL
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#EAE7E1]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex justify-between gap-2 pt-3">
                  <div>
                    <p className="text-[9px] text-chrome">
                      {product.category}
                    </p>
                    <h4 className="mt-1 text-xs font-medium">
                      {product.name}
                    </h4>
                  </div>
                  <p className="shrink-0 text-xs">${product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16 flex flex-col items-start justify-between gap-5 bg-[#E8E3DA] p-7 sm:flex-row sm:items-center sm:p-10">
          <div>
            <p className="text-[9px] font-semibold tracking-[0.25em] text-chrome">
              THE MIVRA COLLECTION
            </p>
            <h3 className="mt-3 font-display text-3xl">
              Find your next essential.
            </h3>
          </div>
          <Link
            href="/collections/men"
            className="bg-obsidian px-8 py-4 text-[9px] font-semibold tracking-[0.2em] text-white transition hover:bg-carbon"
          >
            CONTINUE SHOPPING
          </Link>
        </section>
      </div>
    </main>
  );
}

export default function AccountProfilePage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-pearl">
          <AnnouncementBar />
          <Header />
          <div className="mx-auto max-w-[1200px] px-5 py-32 text-center text-[10px] tracking-[0.2em] text-chrome">
            LOADING YOUR ACCOUNT...
          </div>
        </main>
      }
    >
      <AccountProfileContent />
    </Suspense>
  );
}
