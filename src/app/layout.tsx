import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://privateagent.example"),
  title: {
    default: "Private Agent — The Global Buyers Agent Network",
    template: "%s · Private Agent",
  },
  description:
    "Join a global network of certified buyer's agents. Get discovered by qualified, ready-to-act buyers, showcase your expertise, and manage every deal in one place.",
  openGraph: {
    title: "Private Agent — The Global Buyers Agent Network",
    description:
      "Get discovered by qualified buyers, become a Certified Private Agent, and grow your business.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-charcoal">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
