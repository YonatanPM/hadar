import React, { useEffect, useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import { Button } from "../ui/button";

export default function Hero({ scrollToSection }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12"
    >
      {/* רקע */}
      <div className="absolute inset-0 bg-[#FFFBF5]"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center max-w-6xl mx-auto">
          {/* טקסט */}
          <div
            className={`flex flex-col justify-center space-y-8 text-center md:text-start transition-all duration-[1800ms] ease-out transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="space-y-4 sm:space-y-6">
              <h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-700 leading-tight"
                style={{
                  minHeight: "auto",
                  lineHeight: "1.2",
                  display: "block",
                }}
              >
                הדר - מטפלת פרטית לגיל הרך
              </h1>
              <h2
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 font-light leading-relaxed"
                style={{
                  minHeight: "auto",
                  lineHeight: "1.5",
                  display: "block",
                }}
              >
                "בידיים עדינות, בלב פתוח אני מטפלת, מלמדת ומאמינה."
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-end">
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="bg-amber-400 hover:bg-amber-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto"
              >
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                צרו קשר עכשיו
              </Button>
              <Button
                onClick={() => scrollToSection("services")}
                variant="outline"
                size="lg"
                className="border-2 border-amber-400 text-amber-600 hover:bg-amber-400 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 w-full sm:w-auto"
              >
                גלו את השירותים
              </Button>
            </div>
          </div>

          {/* תמונה */}
          <div
            className={`flex items-center justify-center transition-all duration-[2200ms] ease-out transform ${
              isVisible
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 translate-x-12 scale-90"
            }`}
          >
            <div
              className="relative w-full max-w-sm sm:w-96 md:w-[30rem] mx-auto md:mx-0"
              style={{ aspectRatio: "3/2" }}
            >
              <img
                src="/fingers.png"
                alt="ידיים של תינוק ואמא"
                className="rounded-2xl shadow-2xl w-full h-full object-cover z-10"
                width="480"
                height="320"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* חץ גלילה */}
      <div
        className={`absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-[2500ms] ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400" />
      </div>
    </section>
  );
}
