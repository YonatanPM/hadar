import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header({ activeSection, isScrolled, scrollToSection }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: "about", label: "אודות" },
    { id: "services", label: "שירותים" },
    { id: "contact", label: "צור קשר" },
  ];

  const handleMenuClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 p-2 md:p-4`}
    >
      <div
        className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-in-out flex items-center justify-between h-20 ${
          isScrolled
            ? "bg-amber-100/80 backdrop-blur-lg shadow-xl rounded-full"
            : "bg-transparent h-24"
        }`}
      >
        {/* Logo on the right */}
        <div className="flex-shrink-0">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 rounded-full p-1"
            aria-label="מעבר לראש הדף"
          >
            <img
              src="citrus.png"
              alt="לוגו הדר מטפלת"
              className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-full bg-[#FFFBF5] transition-transform transform group-hover:scale-105 "
            />
            <div
              className={`flex flex-col text-right transition-all duration-500 ease-in-out overflow-hidden whitespace-nowrap ${
                isScrolled ? "max-w-40 opacity-100" : "max-w-0 opacity-0"
              }`}
            >
              <span className="font-bold text-2xl text-amber-900">הדר</span>
              <span className="text-sm text-amber-800 -mt-1">מטפלת ומחנכת</span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <div className="flex items-baseline space-x-6 space-x-reverse">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-all duration-300 text-lg relative py-1
                  focus:outline-none focus-visible:text-amber-600 focus-visible:underline
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5
                  after:transition-transform after:duration-300 after:ease-in-out
                  hover:after:scale-x-100
                  ${
                    isScrolled
                      ? "text-amber-900 hover:text-amber-700 after:bg-amber-500"
                      : "text-gray-700 hover:text-gray-900 after:bg-amber-500"
                  }
                  ${
                    activeSection === item.id
                      ? "after:scale-x-100"
                      : "after:scale-x-0"
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="p-2 rounded-md transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "סגור תפריט" : "פתח תפריט"}
          >
            {isMobileMenuOpen ? (
              <X
                className={`w-6 h-6 transition-transform duration-300 rotate-180 ${
                  isScrolled ? "text-amber-900" : "text-gray-700"
                }`}
                aria-hidden="true"
              />
            ) : (
              <Menu
                className={`w-6 h-6 transition-transform duration-300 ${
                  isScrolled ? "text-amber-900" : "text-gray-700"
                }`}
                aria-hidden="true"
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden mt-2 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="bg-amber-50/95 backdrop-blur-lg shadow-lg border border-amber-200/50 rounded-2xl overflow-hidden">
            <div className="px-4 py-6 space-y-4">
              {menuItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.id)}
                  className={`block w-full text-right py-3 px-4 rounded-lg font-medium text-lg transition-all duration-300 transform focus:outline-none focus-visible:bg-amber-200/80
                        text-amber-900 hover:bg-amber-100/70
                        ${activeSection === item.id ? "bg-amber-100/70" : ""}
                        ${
                          isMobileMenuOpen
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-8"
                        }
                      `}
                  style={{
                    transitionDelay: isMobileMenuOpen
                      ? `${index * 75}ms`
                      : "0ms",
                  }}
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
