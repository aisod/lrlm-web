import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Technology from "@/components/Technology";
import UseCases from "@/components/UseCases";
import Pricing from "@/components/Pricing";
import DemoBooking from "@/components/DemoBooking";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Technology />
      <UseCases />
      <Pricing />
      <DemoBooking />
      <CTA />
      <Footer />
    </main>
  );
}
