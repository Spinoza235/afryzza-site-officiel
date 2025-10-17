import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Faq from "../components/Faq";
import WhyAfryzza from "../components/WhyAfryzza";

export default function Home() {
  return (
    <main className="bg-[#0A1A3F] text-white overflow-hidden">
      <Hero />
      <Pricing />
      <Testimonials />
      <WhyAfryzza />
      <Faq />
    </main>
  );
}
