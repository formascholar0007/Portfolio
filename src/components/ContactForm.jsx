import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import useIntersectionObserver from "./useIntersectionObserver"; // Assuming you have this hook defined

const ContactForm = () => {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={sectionRef}
      className="flex flex-col md:flex-row items-center justify-center lg:gap-32 min-h-screen bg-gray-100 lg:py-24 py-10 font-Sora"
    >
      <div
        className={`w-full md:w-1/2 lg:w-2/5 bg-white px-10 py-12 rounded-2xl shadow-lg ${
          isVisible
            ? "animate__animated animate__fadeInLeft animate__slow "
            : ""
        }`}
      >
        <h2
          className="text-4xl lg:text-5xl font-bold mb-4"
          style={{
            background: "linear-gradient(to right, #8c4ee2, #2d0082)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Let’s work together!
        </h2>
        <p className="mb-8">
          I design and code beautifully simple things and I love what I do. Just
          simple like that!
        </p>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form_group">
              <input
                type="text"
                name="fname"
                placeholder="First name"
                className="w-full p-3 border-2 border-gray-500 bg-gray-100  rounded-md"
                required
              />
            </div>
            <div className="form_group">
              <input
                type="text"
                name="lname"
                placeholder="Last name"
                className="w-full p-3 border-2 border-gray-500 bg-gray-100 rounded-md"
              />
            </div>
            <div className="form_group">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="w-full p-3 border-2 border-gray-500 bg-gray-100 rounded-md"
                required
              />
            </div>
            <div className="form_group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                className="w-full p-3 border-2 border-gray-500 bg-gray-100 rounded"
                required
              />
            </div>
          </div>
          <div className="form_group">
            <select
              name="Services"
              className="w-full p-3 border-2 border-gray-500 bg-gray-100 rounded-md"
              required
            >
              <option value="">—Please choose an option—</option>
              <option value="Web Design">Web Development</option>
              <option value="App Design">App Development</option>
              <option value="Branding Design">Logo Design</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Have a question">Have a question</option>
            </select>
          </div>
          <div className="form_group">
            <textarea
              name="message"
              placeholder="Message"
              className="w-full p-3 border-2 border-gray-500 bg-gray-100 rounded-md"
              rows="5"
              required
            ></textarea>
          </div>
          <div className="">
            <button
              type="submit"
              className="text-lg font-semibold rounded-full bg-gradient-to-r from-[#8c5be6] to-[#2a1454] text-white py-4 px-8  hover:text-black transition ease-in-out delay-100"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div
        className={`mt-8 md:mt-0 md:ml-8 ${
          isVisible
            ? "animate__animated animate__fadeInRight animate__slow  animate__delay-1s"
            : ""
        }`}
      >
        <ul className="space-y-12">
          <li className="flex items-center gap-6">
            <div className="bg-gradient-to-r from-[#8c5be6] to-[#2a1454] p-4 rounded-full">
              <FaPhoneAlt className="text-white" size={25} />
            </div>

            <div>
              <p className="text-gray-800 mb-1">Phone</p>
              <a
                href="tel:+01-123-654-8096"
                className="text-purple-900 font-semibold text-lg hover:text-purple-500"
              >
                +91 9045283510
              </a>
            </div>
          </li>
          <li className="flex items-center gap-6">
            <div className=" bg-gradient-to-r from-[#8c5be6] to-[#2a1454] p-4 rounded-full">
              <FaEnvelope className="text-white" size={25} />
            </div>

            <div>
              <p className="text-gray-800 mb-1">Email</p>
              <a
                href="mailto:gerolddesign@mail.com"
                className="text-purple-900 font-semibold text-lg hover:text-purple-500"
              >
                gredx.official@gmail.com
              </a>
            </div>
          </li>
          <li className="flex items-center gap-6">
            <div className=" bg-gradient-to-r from-[#8c5be6] to-[#2a1454]  p-4 rounded-full">
              <FaMapMarkerAlt className="text-white" size={25} />
            </div>

            <div>
              <p className="text-gray-800 mb-1">Address</p>
              <a
                href="#"
                className="text-purple-900 font-semibold text-lg hover:text-purple-500"
              >
                Dehradun <br /> Uttarakhand, India
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactForm;
