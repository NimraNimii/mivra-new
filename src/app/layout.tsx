import type { Metadata } from "next";
import {
  Bodoni_Moda,
  Space_Grotesk,
  Inter,
} from "next/font/google";
import "./globals.css";
import { BagProvider } from "@/context/BagContext";
import CustomerSupportWidget from "@/components/CustomerSupportWidget";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MIVRA | Define Your Style",
    template: "%s | MIVRA",
  },
  description:
    "Discover contemporary fashion and define your style with MIVRA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodoni.variable} ${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body>
        <BagProvider>
  {children}
  <CustomerSupportWidget />
</BagProvider>
      </body>
    </html>
  );
}
