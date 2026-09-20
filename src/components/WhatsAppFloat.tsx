import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

const WhatsAppFloat = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/923015600599?text=Hello,%20I%20would%20like%20to%20discuss%20your%20drilling%20and%20contracting%20services.",
      "_blank"
    );
  };

  return (
    <>
      {/* Floating Container */}
      <div className="fixed z-50 bottom-6 right-6">
        {/* Expanded Panel */}
        {isExpanded && (
          <div className="mb-4 bg-white border border-gray-200 rounded-lg shadow-xl w-80 animate-scale-in">
            {/* Header */}
            <div className="flex items-center justify-between p-4 text-white bg-green-600 rounded-t-lg">
              <div>
                <h4 className="text-sm font-semibold">
                  Industrial Drilling & Consulting
                </h4>
                <p className="text-xs opacity-90">
                  Professional Engineering Services
                </p>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-white/80 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-3 text-sm">
              <div className="p-3 text-gray-800 bg-gray-100 rounded-lg">
                We provide reliable and efficient solutions for industrial and
                geological projects.
              </div>

              <div className="p-3 bg-gray-100 rounded-lg">
                <ul className="space-y-1 text-xs text-gray-700">
                  <li>✔ Rock & Core Drilling Services</li>
                  <li>✔ Quarrying & Mining Support</li>
                  <li>✔ Salt Exploration & Consulting</li>
                  <li>✔ Contract Drilling Projects</li>
                  <li>✔ Site Assessment & Advisory</li>
                </ul>
              </div>

              <div className="p-3 text-gray-800 bg-gray-100 rounded-lg">
                Contact us directly on WhatsApp to discuss your project or
                request a quotation.
              </div>
            </div>

            {/* CTA */}
            <div className="p-4 border-t border-gray-200">
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center justify-center w-full px-4 py-2 space-x-2 font-semibold text-white transition-colors duration-200 bg-green-600 rounded-lg hover:bg-green-700"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Start Project Discussion</span>
              </button>
            </div>
          </div>
        )}

        {/* Floating Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="relative p-4 text-white transition-all duration-300 bg-green-600 rounded-full shadow-2xl group hover:scale-110 hover:bg-green-700"
        >
          {/* Icon */}
          <MessageCircle className="relative z-10 w-6 h-6" />

          {/* Badge */}
          <div className="absolute z-20 flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -right-2 -top-2 animate-pulse">
            1
          </div>

          {/* Ping Ring */}
          <div className="absolute inset-0 bg-green-600 rounded-full -z-10 opacity-70 animate-ping" />
        </button>
      </div>

      {/* Teaser Bubble */}
      {!isExpanded && (
        <div className="fixed z-40 bottom-24 right-6 animate-fade-in">
          <div className="max-w-xs px-4 py-2 text-sm text-gray-700 bg-white rounded-lg shadow-lg">
            Need drilling, quarrying, or consulting services?  
            Let’s discuss your project.
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppFloat;
