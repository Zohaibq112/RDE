import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

const WhatsAppFloat = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/966559545820?text=Hello,%20I%20would%20like%20to%20discuss%20your%20drilling%20and%20contracting%20services.",
      "_blank"
    );
  };

  return (
    <>
      {/* Floating Container */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Expanded Panel */}
        {isExpanded && (
          <div className="mb-4 w-80 rounded-lg border border-gray-200 bg-white shadow-xl animate-scale-in">
            {/* Header */}
            <div className="flex items-center justify-between rounded-t-lg bg-green-600 p-4 text-white">
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
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-3 p-4 text-sm">
              <div className="rounded-lg bg-gray-100 p-3 text-gray-800">
                We provide reliable and efficient solutions for industrial and
                geological projects.
              </div>

              <div className="rounded-lg bg-gray-100 p-3">
                <ul className="space-y-1 text-xs text-gray-700">
                  <li>✔ Rock & Core Drilling Services</li>
                  <li>✔ Quarrying & Mining Support</li>
                  <li>✔ Salt Exploration & Consulting</li>
                  <li>✔ Contract Drilling Projects</li>
                  <li>✔ Site Assessment & Advisory</li>
                </ul>
              </div>

              <div className="rounded-lg bg-gray-100 p-3 text-gray-800">
                Contact us directly on WhatsApp to discuss your project or
                request a quotation.
              </div>
            </div>

            {/* CTA */}
            <div className="border-t border-gray-200 p-4">
              <button
                onClick={handleWhatsAppClick}
                className="flex w-full items-center justify-center space-x-2 rounded-lg bg-green-600 px-4 py-2 font-semibold text-white transition-colors duration-200 hover:bg-green-700"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Start Project Discussion</span>
              </button>
            </div>
          </div>
        )}

        {/* Floating Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="group relative rounded-full bg-green-600 p-4 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-green-700"
        >
          {/* Icon */}
          <MessageCircle className="relative z-10 h-6 w-6" />

          {/* Badge */}
          <div className="absolute -right-2 -top-2 z-20 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white animate-pulse">
            1
          </div>

          {/* Ping Ring */}
          <div className="absolute inset-0 -z-10 rounded-full bg-green-600 opacity-70 animate-ping" />
        </button>
      </div>

      {/* Teaser Bubble */}
      {!isExpanded && (
        <div className="fixed bottom-24 right-6 z-40 animate-fade-in">
          <div className="max-w-xs rounded-lg bg-white px-4 py-2 text-sm text-gray-700 shadow-lg">
            Need drilling, quarrying, or consulting services?  
            Let’s discuss your project.
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppFloat;
