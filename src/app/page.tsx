import { prisma } from "@/lib/prisma";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ProductsSection from "@/components/sections/ProductsSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ClientsSection from "@/components/sections/ClientsSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

export default async function Home() {
  const [products, testimonials, faqs, stats] = await Promise.all([
    prisma.product.findMany({ orderBy: { createdAt: "desc" } }),
    prisma.testimonial.findMany({ take: 6, orderBy: { createdAt: "desc" } }),
    prisma.fAQ.findMany({ orderBy: { order: "asc" } }),
    prisma.industrialStats.findMany({ orderBy: { order: "asc" } }),
  ]);

  return (
    <main className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      <HeroSection />
      <StatsSection stats={stats} />
      <ProductsSection products={products} />
      <BenefitsSection />
      <HowItWorksSection />
      <TestimonialsSection testimonials={testimonials} />
      <ClientsSection />
      <FAQSection faqs={faqs} />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
