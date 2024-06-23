import BannerSection from "../components/BannerSection";
import ServicesSection from "../components/ServicesSection";
import WorksSection from "../components/WorksSection";

export default function Home() {
  return (
    <div className="py-32">
      <BannerSection />
      <ServicesSection />
      <WorksSection />
    </div>
  );
}
