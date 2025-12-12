import React, { useEffect, useState, useRef } from "react";
import getYearsOfExperience from "../../util/expirenceCounter";
export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (element) {
            observer.unobserve(element);
          }
        }
      },
      { threshold: 0.2 }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 bg-white"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-[1600ms] ease-out transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
<<<<<<< HEAD
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-700">
              עלי
=======
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-700">
              אודות
>>>>>>> 458d3433d96702ee460ec89b25a46a09fc2cb051
            </h2>
            <div className="w-20 h-1 bg-amber-400 mx-auto mb-6 sm:mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <div
              className={`space-y-6 transition-all duration-[2000ms] ease-out transform ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }`}
              style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
            >
              <div className="text-lg sm:text-xl text-center md:text-start leading-relaxed text-gray-600">
                <p className="mb-4 sm:mb-6">
                  שמי הדר, מטפלת פרטית לגיל הרך עם ניסיון של{" "}
                  {getYearsOfExperience()} שנים בעבודה עם תינוקות ופעוטות. במהלך
                  השנים צברתי ידע וניסיון מקצועי רב בתואר ראשון במדעי ההתנהגות,
                  בקורס מטפלות לגיל הרך ובעבודתי במעונות יום וכל זה מלווה אותי
                  בכל טיפול שאני מעניקה.{" "}
                </p>

                <p className="mb-4 sm:mb-6">
                  כל ילד שמגיע אליי זוכה ליחס חם ואוהב, בסביבה מאורגנת, נעימה
                  ובטוחה. בעבודתי אני משתדלת ליצור חוויות מותאמות אישית לכל ילד,
                  עם פעילויות מגוונות שמתאימות לשלב ההתפתחות שלו ומעודדות צמיחה,
                  סקרנות וביטחון עצמי.
                </p>
              </div>
            </div>

            <div
              className={`flex items-center justify-center transition-all duration-[2200ms] ease-out transform ${
                isVisible
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 -translate-x-12 scale-90"
              }`}
              style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
            >
              <div className="relative flex justify-center md:justify-start">
                <img
                  src="/hadar-c-m.jpeg"
                  alt="הדר, המטפלת, מחייכת"
                  className="rounded-2xl shadow-2xl w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-[22rem] object-contain z-10"
                  width="288"
                  height="352"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
