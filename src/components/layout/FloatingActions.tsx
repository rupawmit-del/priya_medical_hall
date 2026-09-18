import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp, ShoppingBag } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/siteConfig';
import { useOrderModal } from '../../context/OrderModalContext';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { openOrderModal } = useOrderModal();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Desktop / Tablet Side Actions */}
      <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
        {/* Back to Top */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="pointer-events-auto w-11 h-11 rounded-full bg-slate-900/90 dark:bg-slate-700/90 hover:bg-slate-900 text-white shadow-xl flex items-center justify-center transition active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
            aria-label="Back to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Floating Call Button */}
        <a
          href={`tel:${BUSINESS_CONFIG.phone}`}
          className="pointer-events-auto hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-sky-600 hover:bg-sky-700 text-white shadow-xl transition active:scale-95 group focus:outline-none focus:ring-2 focus:ring-sky-400"
          aria-label="Call Store"
          title="Direct Call to Pharmacist"
        >
          <Phone className="w-4 h-4 animate-bounce" />
          <span className="text-xs font-bold whitespace-nowrap">Call Store</span>
        </a>

        {/* Floating WhatsApp Button */}
        <button
          onClick={() => openOrderModal()}
          className="pointer-events-auto relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xl transition active:scale-95 group focus:outline-none focus:ring-2 focus:ring-emerald-400 cursor-pointer"
          aria-label="Order Medicine via WhatsApp"
          title="WhatsApp Medicine Order & Inquiry"
        >
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"></span>
          </span>
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="text-xs sm:text-sm font-bold tracking-wide">
            WhatsApp Order
          </span>
        </button>
      </div>

      {/* Mobile Sticky Bottom Floating Action Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-2 px-4 flex items-center gap-2 shadow-2xl">
        <a
          href={`tel:${BUSINESS_CONFIG.phone}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-xs font-bold transition active:scale-95"
        >
          <Phone className="w-4 h-4 text-emerald-600" />
          <span>Call Now</span>
        </a>

        <button
          onClick={() => openOrderModal()}
          className="flex-[1.5] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-md transition active:scale-95"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp Order</span>
        </button>

        <a
          href={BUSINESS_CONFIG.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold transition"
          title="Get Directions"
        >
          📍
        </a>
      </div>
    </>
  );
};
