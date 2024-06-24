import BannerSection from "../components/BannerSection";
import ServicesSection from "../components/ServicesSection";
import WorksSection from "../components/WorksSection";

export default function Home() {
  return (
    <div className="py-40">
      <BannerSection />
      <ServicesSection />
      <WorksSection />
    </div>
  );
}
