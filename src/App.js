import React, { useState, useEffect } from "react";

import Header from "./components/sections/Header.jsx";
import Hero from "./components/sections/Hero.jsx";
import About from "./components/sections/About.jsx";
import Services from "./components/sections/Services.jsx";
import Contact from "./components/sections/Contact.jsx";
import Footer from "./components/sections/Footer.jsx";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set(["hero"]));

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 100);

      // Update active section based on scroll position
      const sections = ["hero", "about", "services", "contact"];
      let currentSection = "hero";

      for (let i = 0; i < sections.length; i++) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element && element.offsetTop <= scrollY + window.innerHeight / 2) {
          currentSection = sectionId;
        }
      }
      setActiveSection(currentSection);

      // Add fade-in animations for sections coming into view
      const newVisibleSections = new Set(visibleSections);
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (
          element &&
          element.getBoundingClientRect().top < window.innerHeight * 0.8
        ) {
          newVisibleSections.add(sectionId);
        }
      });

      // Only update state if the set has changed to avoid re-renders
      if (newVisibleSections.size !== visibleSections.size) {
        setVisibleSections(newVisibleSections);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleSections]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFBF5] text-gray-800" dir="rtl">
      <Header
        activeSection={activeSection}
        isScrolled={isScrolled}
        scrollToSection={scrollToSection}
      />

      <main>
        <div className="transition-all duration-[2000ms] ease-out opacity-100 translate-y-0">
          <Hero scrollToSection={scrollToSection} />
        </div>

        <div
          className={`transition-all duration-[2200ms] ease-out transform ${
            visibleSections.has("about")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-20"
          }`}
        >
          <About />
        </div>

        <div
          className={`transition-all duration-[2200ms] ease-out transform ${
            visibleSections.has("services")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-20"
          }`}
        >
          <Services />
        </div>

        <div
          className={`transition-all duration-[2400ms] ease-out transform ${
            visibleSections.has("contact")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-20"
          }`}
        >
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}
