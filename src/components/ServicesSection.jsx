import React from "react";
import { FaArrowUp, FaPaintBrush, FaPenFancy } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { FaLaptopCode } from "react-icons/fa6";
import useIntersectionObserver from "./useIntersectionObserver";
import { TbDeviceLaptop } from "react-icons/tb";

const services = [
  {
    id: 1,
    icon: <FaLaptopCode />,
    title: "Web Development",
    description:
      "We build responsive, scalable, and secure web applications that drive engagement and deliver results.",
  },
  {
    id: 2,
    icon: <HiDevicePhoneMobile />,
    title: "App Development",
    description:
      "Our team creates intuitive and high-performance mobile apps for both iOS and Android platforms, ensuring a seamless user experience.",
  },
  {
    id: 3,
    icon: <FaPaintBrush />,
    title: "Logo Design",
    description:
      "We craft memorable and impactful logos that reflect your brand's identity and vision.",
  },
  {
    id: 4,
    icon: <FaPenFancy />,
    title: "UX/UI Design",
    description:
      "Our user-centric design approach enhances usability and aesthetics, making your digital products not only beautiful but also easy to navigate.",
  },
  {
    id: 5,
    icon: <TbDeviceLaptop />,
    title: "Digital Marketing",
    description:
    "Enhance your online presence with our SEO, social media marketing, PPC, and content creation services to drive traffic and engage your audience.",
  },
];

const ServicesSection = () => {
  const [sectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  const settings = {
    dots: true,
    dotsClass: "slick-dots custom-dots-class",
    infinite: true,
    speed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const ServiceCard = ({ icon, title, description }) => (
    <div
      ref={sectionRef}
      className={`p-4 md:h-96 font-Sora  ${
        isVisible
          ? "animate__animated animate__fadeIn animate__slow animate__delay-1s"
          : ""
      } `}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-100 transition duration-300 ease-in-out h-full flex flex-col justify-between">
        <div className="text-6xl md:text-8xl mb-6 text-purple-600 hover:text-red-500 transition duration-300">
          {icon}
        </div>
        <h5 className="text-xl md:text-3xl font-semibold mb-2 text-black">
          {title}
        </h5>
        <p className="text-sm md:text-base text-gray-700 mb-4">{description}</p>
        <a
          href="#contact"
          className="read-more-button text-black border-2 rounded-sm border-[#8c4ee2] w-36 md:w-36 p-2 hover:bg-transparent flex items-center mt-auto relative overflow-hidden"
        >
          Contact Us <FaArrowUp className="ml-2" />
          <style jsx>{`
            .read-more-button {
              position: relative;
              overflow: hidden;
              transition: color 0.3s ease-in-out;
            }
            .read-more-button::before {
              content: "";
              position: absolute;
              top: 0;
              left: -100%;
              width: 100%;
              height: 100%;
              background-color: #8c4ee2;
              transition: left 0.5s ease-in-out;
              z-index: -1;
            }
            .read-more-button:hover::before {
              left: 0;
            }
            .read-more-button:hover {
              color: white;
            }
          `}</style>
        </a>
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="services-area bg-gray-100 py-16 md:py-32 mt-8 font-Sora"
    >
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-12 ${
            isVisible ? "animate__animated animate__zoomIn animate__slow" : ""
          }`}
        >
          <h2
            className="text-3xl md:text-6xl font-bold mb-3"
            style={{
              background: "linear-gradient(to right, #a361ff, #1e044e)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Our Best Services
          </h2>
          <p
            className={`text-gray-900 text-base md:text-lg max-w-xl md:max-w-3xl mx-auto ${
              isVisible
                ? "animate__animated animate__zoomIn animate__slow animate__delay-1s"
                : ""
            }`}
          >
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and your customers.
          </p>
        </div>
        <Slider {...settings}>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </Slider>
      </div>
      <style jsx>{`
        .custom-dots-class li button:before {
          color: #8c4ee2;
          border: 2px solid #8c4ee2;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
