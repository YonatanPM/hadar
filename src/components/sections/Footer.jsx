import React from "react";
import { Phone, Mail, Facebook } from "lucide-react";

export default function Footer() {
  const WhatsappIcon = (props) => (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
      {...props}
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.357 1.849 6.081l-1.117 4.082 4.162-1.085z" />
    </svg>
  );

  return (
    <footer className="bg-amber-100 text-gray-700 pt-16 pb-8" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 items-start text-center sm:text-right">
          {/* Image column on the right (first in RTL) */}
          <div className="flex items-center justify-center sm:justify-start">
            <div className="relative">
              <img
                src="/citrus.png"
                alt="פריחת ההדרים"
                className="rounded-2xl w-62 h-62 object-contain"
              />
              <div className="absolute -inset-2 bg-amber-200/30 rounded-2xl transform rotate-2 -z-10"></div>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">
              פרטים חשובים
            </h4>
            <div className="flex flex-col space-y-3 text-sm text-gray-600">
              <div>🕐 זמינות: 4 ימים בשבוע ראשון-חמישי 8:00-17:00</div>
              <div>📍 אזור רחובות-נס ציונה</div>
              <div>👶 גילאים: 0-4 שנים</div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">הישארו בקשר</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:052-776-7744"
                  className="flex items-center justify-center sm:justify-start gap-2 text-gray-700 hover:text-amber-600 transition-colors"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span>052-776-7744</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hadarco91@gmail.com"
                  className="flex items-center justify-center sm:justify-start gap-2 text-gray-700 hover:text-amber-600 transition-colors"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  <span>hadarco91@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800 md:invisible">
              רשתות חברתיות
            </h4>
            <div className="flex justify-center sm:justify-start space-x-4 space-x-reverse pt-2">
              <a
                href="https://www.facebook.com/HadarCare/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="בקרו בעמוד הפייסבוק של הדר"
                className="p-2 text-blue-600 hover:text-blue-700 transition-colors rounded-full hover:bg-blue-100"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/972527767744"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="שלחו הודעת וואטסאפ להדר"
                className="p-2 text-green-500 hover:text-green-700 transition-colors rounded-full hover:bg-green-100"
              >
                <WhatsappIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-200 mt-12 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} הדר כהן מעיין - מטפלת פרטית. כל הזכויות
            שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
}
