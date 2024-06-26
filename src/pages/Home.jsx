import BannerSection from "../components/BannerSection";
import ContactForm from "../components/ContactForm";
import ServicesSection from "../components/ServicesSection";
import TeamSection from "../components/TeamSection";
import Technologies from "../components/Technologies";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";
import WorksSection from "../components/WorksSection";

export default function Home() {
  return (
    <div className="pt-40">
      <BannerSection />
      <ServicesSection />
      <WhyChooseUs />
      <WorksSection />
      <Technologies />
      <Testimonials />
      <TeamSection />
      <ContactForm />
    </div>
  );
}
