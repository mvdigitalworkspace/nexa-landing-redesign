import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/nexa/navbar";
import { Hero } from "@/components/nexa/hero";
import { SocialProof } from "@/components/nexa/social-proof";
import { Features } from "@/components/nexa/features";
import { Testimonials } from "@/components/nexa/testimonials";
import { Pricing } from "@/components/nexa/pricing";
import { Faq } from "@/components/nexa/faq";
import { Cta } from "@/components/nexa/cta";
import { SiteFooter } from "@/components/nexa/site-footer";

const title = "Nexa — Control de presentismo con GPS y PIN";
const description =
  "Nexa permite a tus empleados fichar desde su celular mediante GPS y PIN. Olvídate del hardware y automatiza el control de tus sucursales.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1">
        <div className="bg-gradient-to-b from-gray-50 to-white">
          <Hero />
        </div>
        <SocialProof />
        <div className="bg-gradient-to-b from-white to-gray-50">
          <Features />
        </div>
        <Testimonials />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <SiteFooter />
    </div>
  );
}
