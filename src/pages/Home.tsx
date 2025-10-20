import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import WhyAfryzza from "../components/WhyAfryzza";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <main className="dark:bg-[#0A1A3F] bg-gray-50 overflow-hidden">
      <Hero />
      <Pricing />
      <Testimonials />
      <WhyAfryzza />
      <FAQ />
    </main>
  );
}
