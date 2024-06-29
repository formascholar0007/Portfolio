import React, { useEffect, useRef, useState } from "react";
import useIntersectionObserver from "./useIntersectionObserver";

function MetricsSection() {
  const [sectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  const [experienceCount, setExperienceCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);

  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const clientsRef = useRef(null);

  useEffect(() => {
    if (isVisible) {
      startCountAnimation();
    }
  }, [isVisible]);

  const startCountAnimation = () => {
    animateCount(5, setExperienceCount, experienceRef); // Example value for experience
    animateCount(500, setProjectsCount, projectsRef);   // Example value for projects
    animateCount(1000, setClientsCount, clientsRef);    // Example value for clients
  };

  const animateCount = (targetValue, setCount, ref) => {
    let currentValue = 0;
    const step = Math.ceil(targetValue / 120);

    const animation = () => {
      if (currentValue < targetValue) {
        currentValue += step;
        setCount(currentValue);
        ref.current = requestAnimationFrame(animation);
      } else {
        setCount(formatValue(currentValue));
        cancelAnimationFrame(ref.current);
      }
    };

    ref.current = requestAnimationFrame(animation);
  };

  const formatValue = (value) => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(0)}K`; // Format to display 'K' for thousands
    }
    return value.toString(); // Return as-is if less than 1000
  };

  return (
    <div
      ref={sectionRef}
      className="mt-20 md:mt-40 flex flex-col md:flex-row justify-between w-full max-w-7xl mx-auto text-center font-Sora px-4"
    >
      <div
        className={`mb-8 md:mb-0 md:mr-8 flex-1 ${
          isVisible ? "animate__animated animate__bounceIn animate__slow" : ""
        }`}
      >
        <p className="text-4xl md:text-6xl font-bold text-purple-600">{experienceCount}</p>
        <p className="text-zinc-600 text-base md:text-lg">Years of Experience</p>
      </div>
      <div
        className={`mb-8 md:mb-0 md:mr-8 flex-1 ${
          isVisible ? "animate__animated animate__bounceIn animate__slow" : ""
        }`}
      >
        <p className="text-4xl md:text-6xl font-bold text-purple-600">{projectsCount}</p>
        <p className="text-zinc-600 text-base md:text-lg">Projects Completed</p>
      </div>
      <div
        className={`mb-8 md:mb-0 md:mr-8 flex-1 ${
          isVisible ? "animate__animated animate__bounceIn animate__slow" : ""
        }`}
      >
        <p className="text-4xl md:text-6xl font-bold text-purple-600">{clientsCount}</p>
        <p className="text-zinc-600 text-base md:text-lg">Happy Clients</p>
      </div>
    </div>
  );
}

export default MetricsSection;
