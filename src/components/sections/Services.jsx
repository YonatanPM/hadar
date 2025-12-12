import React, { useEffect, useState, useRef } from "react";
import { Handshake, Book, Heart, Clock, Home } from "lucide-react";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    sectionRef.current && observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "מטפלת מוסמכת",
      description: "עם הכשרה בעזרה ראשונה ו-BA במדעי ההתנהגות",
      icon: Book,
      color: "bg-amber-400",
    },
    {
      title: "יחס חם ואישי",
      description:
        "מותאם לצרכים של כל ילד עם פעילויות מגוונות, מעודדות התפתחות ועניין",
      icon: Heart,
      color: "bg-amber-400",
    },
    {
      title: "עדכונים שוטפים להורים",
      description: "כולל תמונות כדי שתוכלו להיות חלק מהחוויה גם מרחוק",
      icon: Clock,
      color: "bg-amber-400",
    },
    {
      title: "עזרה במטלות קלות בבית",
      description: "ללא תוספת תשלום",
      icon: Home,
      color: "bg-amber-400",
    },
    {
      title: "שירות פרילנס",
      description: "העסקה מסודרת מול קבלות",
      icon: Handshake,
      color: "bg-amber-400",
    },
  ];

  return (
    <section
      id="services"
      className="py-12 sm:py-16 md:py-20 bg-amber-50"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 text-center">
        {/* כותרת */}
        <div
          className={`mb-8 sm:mb-12 md:mb-16 transition-all duration-[1500ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700 mb-4 sm:mb-6">
            מה מקבלים הילדים וההורים:
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            טיפול מקצועי ומותאם אישית לכל ילד ומשפחה
          </p>
        </div>

        {/* כרטיסים */}
        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto items-stretch">
          {services.map((service, i) => (
            <div
              key={i}
              className={`group bg-white rounded-lg shadow-lg overflow-hidden 
      transition-all duration-[1200ms] transform flex flex-col h-full
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
              style={{
                flex: "1 1 300px",
                maxWidth: "360px",
                transitionDelay: isVisible ? `${i * 250}ms` : "0ms",
              }}
            >
              <div className={`${service.color} p-6 text-center relative`}>
                <service.icon className="w-12 h-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all duration-500"></div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-700 mb-3 group-hover:text-amber-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed flex-1">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
