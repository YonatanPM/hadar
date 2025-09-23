import React, { useEffect, useState, useRef } from "react";
import { Handshake, UserPlus, Book, Heart, Clock, Home } from "lucide-react";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "מטפלת מוסמכת ",
      description: "עם הכשרה בעזרה ראשונה ו-BA במדעי ההתנהגות",
      icon: Book,
      color: "bg-amber-300",
    },
    {
      title: "יחס חם ואישי",
      description:
        "מותאם לצרכים של כל ילד עם פעילויות מגוונות, מעודדות התפתחות ועניין",
      icon: Heart,
      color: "bg-amber-400",
    },
    {
      title: "עדכונים שוטפים להורים ",
      description: "כולל תמונות כדי שתוכלו להיות חלק מהחוויה גם מרחוק",
      icon: Clock,
      color: "bg-amber-300",
    },
    {
      title: "עזרה במטלות קלות בבית  ",
      description: " ללא תוספת תשלום",
      icon: Home,
      color: "bg-amber-400",
    },
    {
      title: " הנחות לילד נוסף",
      description:
        "חבילות מיוחדות לתאומים או הנחות לאחים, וכן הנחות בהוספת ילד נוסף",
      icon: UserPlus,
      color: "bg-amber-300",
    },
    {
      title: "שירות פרילנס",
      description: " העסקה מסודרת למול קבלות",
      icon: Handshake,
      color: "bg-amber-400",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-amber-50 relative"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-[1800ms] ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-700">
            מה מקבלים הילדים וההורים:
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            טיפול מקצועי ומותאם אישית לכל ילד ומשפחה
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group hover:shadow-2xl transition-all duration-[1800ms] border-0 overflow-hidden bg-white rounded-lg shadow-lg transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 300}ms` : "0ms",
              }}
            >
              <div className="p-0">
                <div className={`${service.color} p-6 text-center relative`}>
                  <service.icon className="w-12 h-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all duration-500"></div>
                </div>
                <div className="p-6 bg-white text-center">
                  <h3 className="text-xl font-bold text-gray-700 mb-4 group-hover:text-amber-600 transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
