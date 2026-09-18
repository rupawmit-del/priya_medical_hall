import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Heart, 
  ExternalLink, 
  MessageCircle,
  AlertCircle
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/siteConfig';
import { WMITModal } from '../common/WMITModal';
import { useOrderModal } from '../../context/OrderModalContext';

export const Footer: React.FC = () => {
  const [isWmitOpen, setIsWmitOpen] = useState(false);
  const [privacyModal, setPrivacyModal] = useState(false);
  const [termsModal, setTermsModal] = useState(false);
  const [disclaimerModal, setDisclaimerModal] = useState(false);
  const { openOrderModal } = useOrderModal();

  // MANDATORY STEP 11 — GLOBAL TRACKING HOOK
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://crm.webmakerit.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid'));
    }
    if (!cid) return;

    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid,
        visitor_id: visitorId,
        session_id: sessionId,
        page_name: getPageName(),
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent,
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(() => {});
    };

    const sendExitPayload = () => {
      const payload = {
        cid: cid,
        session_id: sessionId,
        page_name: getPageName(),
        action: 'page_change'
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(() => {});
      }
    };

    sendInitPayload();

    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: NodeJS.Timeout | number;
    let isIdle = false;

    const resetIdleTimer = () => {
      if (isIdle) {
        isIdle = false;
        sendInitPayload(); // Wake up! Resume tracking
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isIdle = true;
        sendExitPayload(); // Inactive! Stop tracking
      }, 60000); // 60 Seconds
    };

    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach(evt => document.addEventListener(evt, resetIdleTimer, { passive: true }));
    resetIdleTimer(); // Initialize idle timer

    // ====================================
    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendExitPayload();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', sendExitPayload);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', sendExitPayload);
      activityEvents.forEach(evt => document.removeEventListener(evt, resetIdleTimer));
      clearTimeout(idleTimer);
    };
  }, []);

  // Handle click on WMIT popup trigger
  const handleWmitClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsWmitOpen(true);
  };

  return (
    <footer className="w-full bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Business Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-black text-xl">
                Rx
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-snug">
                  {BUSINESS_CONFIG.businessName}
                </h3>
                <span className="text-xs text-emerald-400 font-medium">Licensed Pharmacy • Bihar</span>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {BUSINESS_CONFIG.tagline}. Providing authentic prescription drugs, surgical supplies, and patient-first healthcare advisory since {BUSINESS_CONFIG.establishedYear}.
            </p>

            <div className="space-y-2 pt-1 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Drug License: {BUSINESS_CONFIG.licenseNumber}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>GSTIN: {BUSINESS_CONFIG.gstin}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                  <span>›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                  <span>›</span> About Our Store
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                  <span>›</span> Services & Categories
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-emerald-400 transition flex items-center gap-1.5 font-semibold text-emerald-300">
                  <span>›</span> Live Medicine Stock Checker
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                  <span>›</span> Store Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                  <span>›</span> Contact & Directions
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                  <span>›</span> Staff Portal Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Working Hours & Emergency */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Working Hours
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5 text-slate-300">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">{BUSINESS_CONFIG.workingHours.weekdays}</p>
                  <p className="text-slate-400">{BUSINESS_CONFIG.workingHours.sunday}</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-xs">
                <p className="font-bold text-emerald-300 flex items-center gap-1.5 mb-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  Emergency Medicines
                </p>
                <p className="text-slate-300">
                  {BUSINESS_CONFIG.workingHours.emergency}
                </p>
                <button
                  onClick={() => openOrderModal()}
                  className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 hover:text-emerald-300 cursor-pointer"
                >
                  <MessageCircle className="w-3 h-3" />
                  Message on WhatsApp →
                </button>
              </div>
            </div>
          </div>

          {/* Column 4: Location & Google Map */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Visit Store
            </h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <p className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_CONFIG.address}
                  <br />
                  <span className="text-slate-400 text-xs">(Plus Code: {BUSINESS_CONFIG.plusCode})</span>
                </span>
              </p>

              <p className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${BUSINESS_CONFIG.phone}`} className="hover:text-emerald-400 font-semibold">
                  {BUSINESS_CONFIG.formattedPhone}
                </a>
              </p>

              <p className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${BUSINESS_CONFIG.email}`} className="hover:text-emerald-400 truncate">
                  {BUSINESS_CONFIG.email}
                </a>
              </p>

              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Legal Links Bar */}
        <div className="py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 border-b border-slate-800/60">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button 
              onClick={() => setPrivacyModal(true)} 
              className="hover:text-emerald-400 transition cursor-pointer"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setTermsModal(true)} 
              className="hover:text-emerald-400 transition cursor-pointer"
            >
              Terms & Conditions
            </button>
            <button 
              onClick={() => setDisclaimerModal(true)} 
              className="hover:text-emerald-400 transition cursor-pointer"
            >
              Medical Disclaimer
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-slate-500">Connect:</span>
            <a 
              href={BUSINESS_CONFIG.socialLinks.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-emerald-400 hover:text-emerald-300 font-medium"
            >
              WhatsApp
            </a>
            <span>•</span>
            <a 
              href={BUSINESS_CONFIG.socialLinks.facebook} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* STRICT MANDATORY COPYRIGHT & WMIT ANCHOR LINE */}
        {/* The popup trigger must remain clickable and placed in the center of copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS_CONFIG.businessName}. All rights reserved.
          </p>

          {/* REQUIRED FOOTER POPUP TRIGGER — PRESERVE EXACTLY: */}
          <div className="text-center font-medium">
            <a 
              href="#" 
              onClick={handleWmitClick} 
              className="wmit-popup-trigger text-sky-400 hover:text-sky-300 font-semibold underline underline-offset-4 decoration-sky-500/40 hover:decoration-sky-400 transition cursor-pointer"
            >
              Developed by WMIT
            </a>
          </div>

          <p className="text-[11px] text-slate-500">
            Regulated by State Drugs Control Administration, Bihar
          </p>
        </div>
      </div>

      {/* WMIT POPUP MODAL */}
      <WMITModal isOpen={isWmitOpen} onClose={() => setIsWmitOpen(false)} />

      {/* Privacy Policy Modal */}
      {privacyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
          <div className="max-w-lg w-full bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-2xl text-slate-800 dark:text-slate-200">
            <h3 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">Privacy & Prescription Handling Policy</h3>
            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 mb-4">
              At {BUSINESS_CONFIG.businessName}, your medical privacy is sacred. Doctor prescriptions shared via our digital portal or WhatsApp are reviewed solely by licensed registered pharmacists to dispense authentic medications. We never sell, share, or monetize patient diagnosis details or contact information.
            </p>
            <button onClick={() => setPrivacyModal(false)} className="w-full py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold">Close</button>
          </div>
        </div>
      )}

      {/* Terms Modal */}
      {termsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
          <div className="max-w-lg w-full bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-2xl text-slate-800 dark:text-slate-200">
            <h3 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">Terms of Service</h3>
            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 mb-4">
              Prescription medications classified under Schedule H and H1 are dispensed strictly against a valid, legible doctor prescription from a registered medical practitioner. All deliveries are made with authentic computerized GST bills under prevailing Indian Pharmacy Act regulations.
            </p>
            <button onClick={() => setTermsModal(false)} className="w-full py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold">Close</button>
          </div>
        </div>
      )}

      {/* Medical Disclaimer Modal */}
      {disclaimerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
          <div className="max-w-lg w-full bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-2xl text-slate-800 dark:text-slate-200">
            <h3 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">Medical Disclaimer</h3>
            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 mb-4">
              Information on this website is provided for general health awareness and stock availability inquiries only. It should not be used as a substitute for professional medical consultation, diagnosis, or clinical advice. Never disregard doctor instructions or delay seeking treatment.
            </p>
            <button onClick={() => setDisclaimerModal(false)} className="w-full py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold">Close</button>
          </div>
        </div>
      )}
    </footer>
  );
};
export default Footer;
