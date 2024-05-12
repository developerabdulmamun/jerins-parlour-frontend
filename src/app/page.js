import AboutSection from "@/components/ui/Home/AboutSection/AboutSection";
import Banner from "@/components/ui/Home/Banner/Banner";
import ServicesSection from "@/components/ui/Home/ServicesSection/ServicesSection";

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
    </div>
  );
}
