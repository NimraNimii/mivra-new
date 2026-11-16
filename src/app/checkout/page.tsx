import { Suspense } from "react";
import { connection } from "next/server";
import { redirect } from "next/navigation";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import { createClient } from "@/lib/supabase/server";
import CheckoutForm from "./CheckoutForm";

async function CheckoutContent() {
  await connection();

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/account");
  }

  return <CheckoutForm customerEmail={user.email ?? ""} />;
}

export default function CheckoutPage() {
  return (
    <>
      <AnnouncementBar />
      <Header sticky={false} />
      <Suspense
        fallback={
          <main className="min-h-[60vh] flex items-center justify-center">
            <p className="text-xs tracking-[0.2em] uppercase">
              Preparing your checkout...
            </p>
          </main>
        }
      >
        <CheckoutContent />
      </Suspense>
    </>
  );
}
