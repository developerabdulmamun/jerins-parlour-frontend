import AboutSection from "@/components/ui/Home/AboutSection/AboutSection";
import Banner from "@/components/ui/Home/Banner/Banner";
import ContactSection from "@/components/ui/Home/ContactSection/ContactSection";
import ServicesSection from "@/components/ui/Home/ServicesSection/ServicesSection";
import TestimonialSection from "@/components/ui/Home/TestimonialSection/TestimonialSection";

export const metadata = {
  title: "Home | Jerin's Parlour",
  description: "Beauty saloon for every women",
};

export default function Home() {
  return (
    <div>
      <Banner />
      <ServicesSection />
      <AboutSection />
      <TestimonialSection />
      <ContactSection />
    </div>
  );
}
