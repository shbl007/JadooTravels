import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import BookingSteps from "@/sections/BookingSteps";
import HeroSection from "@/sections/HeroSection";
import Newsletter from "@/sections/Newsletter";
import Partners from "@/sections/Partners";
import ServicesSection from "@/sections/ServicesSection";
import Testimonials from "@/sections/Testimonials";
import TopDestinations from "@/sections/TopDestinations";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TopDestinations />
      <BookingSteps />
      <Testimonials />
      <Partners />
      <Newsletter />
      <Footer />
    </main>
  );
}
