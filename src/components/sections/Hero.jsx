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
      dir="rtl"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 pb-12"
    >
      {/* רקע */}
      <div className="absolute inset-0 bg-[#FFFBF5]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* טקסט */}
          <div
            className={`flex flex-col justify-center space-y-8 text-center md:text-right transition-all duration-[1800ms] ease-out transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700 leading-tight">
                הדר - מטפלת פרטית לגיל הרך
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 font-light leading-relaxed">
                "בידיים עדינות, בלב פתוח אני מטפלת, מלמדת ומאמינה."
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="bg-amber-400 hover:bg-amber-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Phone className="ml-2 h-5 w-5" />
                צרו קשר עכשיו
              </Button>
              <Button
                onClick={() => scrollToSection("services")}
                variant="outline"
                size="lg"
                className="border-2 border-amber-400 text-amber-600 hover:bg-amber-400 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
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
            <div className="relative">
              <img
                src="/fingers.png"
                alt="ידיים של תינוק ואמא"
                className="rounded-2xl shadow-2xl w-72 h-48 sm:w-96 sm:h-64 md:w-[30rem] md:h-80 object-cover z-10"
                style={{ aspectRatio: "3/1" }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* חץ גלילה */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-[2500ms] ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <ChevronDown className="w-8 h-8 text-amber-400" />
      </div>
    </section>
  );
}
