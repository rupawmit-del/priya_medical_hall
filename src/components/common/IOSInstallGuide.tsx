import React from 'react';
import { X, Share2, PlusSquare, CheckCircle, Smartphone } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/siteConfig';

interface IOSInstallGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IOSInstallGuide: React.FC<IOSInstallGuideProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ios-modal-title"
    >
      <div 
        className="w-full max-w-md rounded-2xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-800 p-6 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
            <Smartphone className="w-6 h-6" />
          </div>
          <div>
            <h3 id="ios-modal-title" className="text-lg font-bold text-slate-900 dark:text-white">
              Install on iPhone / iPad
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {BUSINESS_CONFIG.shortName} App
            </p>
          </div>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-300 mb-5">
          Install our pharmacy web app to your iOS home screen for 1-tap medicine stock checking and instant WhatsApp prescription ordering:
        </p>

        <div className="space-y-3.5 bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              1
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                Tap the <Share2 className="w-4 h-4 text-sky-600 inline" /> Share button
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Located at the bottom of Safari toolbar (or top bar on iPad).
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              2
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                Select <PlusSquare className="w-4 h-4 text-emerald-600 inline" /> &quot;Add to Home Screen&quot;
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Scroll down in the share sheet until you see the plus square icon.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              3
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                Tap <CheckCircle className="w-4 h-4 text-emerald-500 inline" /> &quot;Add&quot;
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Located in the top right corner. The app icon will appear on your screen!
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 text-sm transition shadow-sm"
        >
          Got it, close instructions
        </button>
      </div>
    </div>
  );
};
