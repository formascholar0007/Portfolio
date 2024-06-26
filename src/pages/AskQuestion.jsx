import React from "react";
import { useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function AskQuestion() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="mb-32 mt-40">
      <div
        id="map"
        className="relative h-[500px] overflow-hidden bg-cover bg-[50%] bg-no-repeat"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27551.12457128768!2d78.03291112746214!3d30.3256302920729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1719388183310!5m2!1sen!2sin"
          width="100%"
          height="500"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="container px-2  md:px-8 lg:40">
        <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)]  py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[250px] opacity-100 backdrop-blur-[30px] border border-gray-300">
          <div className="flex flex-col md:flex-row items-center lg:gap-20 min-h-screen py-6 font-Sora">
            <div className="w-full md:w-1/2 lg:w-[60%]  px-10 py-12 rounded-2xl ">
              <h2
                className="text-4xl lg:text-5xl font-bold mb-4"
                style={{
                  background: "linear-gradient(to right, #8c4ee2, #2d0082)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                How we can help you!
              </h2>
              <p className="mb-8">
                We are happy to help you out just tell us about your Quesiton!!
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
                    />
                  </div>
                  <div className="form_group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="w-full p-3 border-2 border-gray-500 bg-gray-100 rounded"
                      required
                    />
                  </div>
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

            <div className="mt-8 md:mt-0 md:ml-8 ml-8">
              <ul className="space-y-12">
                <li className="flex items-center gap-6">
                  <div className="bg-gradient-to-r from-[#8c5be6] to-[#2a1454] p-4 rounded-full">
                    <FaPhoneAlt className="text-white" size={25} />
                  </div>

                  <div>
                    <p className="text-gray-800 mb-1">Phone</p>
                    <a
                      href="tel:+01-123-654-8096"
                      className="text-purple-900 font-semibold  text-sm md:text-lg  hover:text-purple-500"
                    >
                      +91 988 654 8096
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
                      className="text-purple-900 font-semibold text-sm md:text-lg  hover:text-purple-500"
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
                      className="text-purple-900 font-semibold text-sm md:text-lg hover:text-purple-500"
                    >
                      Dehradun <br /> Uttarakhand, India
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          );
        </div>
      </div>
    </section>
  );
}

export default AskQuestion;
