import React, { useEffect, useState, useRef } from "react";
import { Facebook, Phone, Mail, Send } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contactCards = [
    {
      title: "טלפון / WhatsApp",
      icon: Phone,
      buttonText: "שלחו הודעה",
      link: "https://wa.me/972527767744",
      info: "052-776-7744",
    },
    {
      title: "הדף שלי",
      icon: Facebook,
      buttonText: "בקרו אותי כאן",
      link: "https://www.facebook.com/HadarCare",
      info: null,
    },
    {
      title: "שלחו לי אימייל",
      icon: Mail,
      buttonText: "שלחו אימייל",
      link: "mailto:hadarco91@gmail.com",
      info: "hadarco91@gmail.com",
    },
  ];

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-20 bg-amber-50 text-gray-800"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* כותרת */}
        <div
          className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-[1800ms] ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
<<<<<<< HEAD
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-700">
            בואו ניצור קשר
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
=======
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-700">
פרטי התקשרות</h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
>>>>>>> 458d3433d96702ee460ec89b25a46a09fc2cb051
            אשמח לענות על כל שאלה ולתאם פגישת היכרות ללא התחייבות
          </p>
        </div>

        {/* כרטיסי קשר */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 max-w-4xl mx-auto">
          {contactCards.map((card, index) => (
            <Card
              key={index}
              className={`bg-white shadow-lg hover:shadow-xl transition-all duration-[1600ms] transform min-h-[280px] sm:h-80 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 400}ms` : "0ms",
              }}
            >
              <CardContent className="p-6 sm:p-8 text-center h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <card.icon className="w-7 h-7 sm:w-8 sm:h-8 text-amber-500" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                    {card.title}
                  </h3>
                  {card.info && (
                    <div className="mb-4 sm:mb-6 text-base sm:text-lg font-semibold text-gray-700 break-words px-2">
                      {card.info}
                    </div>
                  )}
                </div>

                <div className="mt-auto">
                  <a
                    href={card.link}
                    target={
                      card.link.startsWith("mailto:") ? "_self" : "_blank"
                    }
                    rel="noopener noreferrer"
                    className="inline-block w-full"
                  >
                    <Button className="bg-amber-400 hover:bg-amber-500 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-500 w-full">
                      {card.buttonText}
                      <Send className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
