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
      <div id="home">
        <BannerSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="services">
        <WhyChooseUs />
      </div>
      <div id="works">
        <WorksSection />
      </div>
      <div id="technologies">
        <Technologies />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="team">
        <TeamSection />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
    </div>
  );
}
