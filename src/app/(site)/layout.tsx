import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

/**
 * Layout for the full site (For Agents, For Buyers, How It Works, Pricing,
 * Resources, About, Apply, and the archived full Home at /home). Kept exactly
 * as built — these pages are parked for a later campaign phase behind the
 * teaser landing page at the true root ("/"), which supplies its own chrome.
 */
export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
