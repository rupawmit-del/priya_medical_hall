import React from 'react';
import { X, Code2, Globe, ShieldCheck, Mail, Phone, ExternalLink } from 'lucide-react';

interface WMITModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WMITModal: React.FC<WMITModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
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
          <div className="w-12 h-12 rounded-xl bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center border border-sky-200 dark:border-sky-800">
            <Code2 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              WebMaker IT Solutions (WMIT)
            </h3>
            <p className="text-xs text-sky-600 dark:text-sky-400 font-medium">
              Digital Healthcare & Enterprise Web Solutions
            </p>
          </div>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
          This digital portal for <strong>Price Amit Medical Hall</strong> was architected by <strong>WebMaker IT Solutions (WMIT)</strong>. Features full PWA support, computerized medicine stock checking, WhatsApp prescription gateway, and local SEO engineering.
        </p>

        <div className="space-y-3 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-slate-500 dark:text-slate-400">Technical Partner:</span>
            <span className="font-semibold text-slate-800 dark:text-slate-200">WebMaker IT Solutions</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-500 dark:text-slate-400">Architecture:</span>
            <span className="font-semibold text-slate-800 dark:text-slate-200">React + Vite + Tailwind + PWA</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-500 dark:text-slate-400">Website:</span>
            <a
              href="https://webmakerit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 dark:text-sky-400 font-bold hover:underline inline-flex items-center gap-1"
            >
              webmakerit.com
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-5 w-full rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-sky-600 dark:hover:bg-sky-700 text-white font-medium py-2.5 text-sm transition"
        >
          Close Information
        </button>
      </div>
    </div>
  );
};
