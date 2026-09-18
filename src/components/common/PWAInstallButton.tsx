import React, { useState } from 'react';
import { usePWAInstall } from '../../hooks/usePWAInstall';
import { IOSInstallGuide } from './IOSInstallGuide';

interface PWAInstallButtonProps {
  className?: string;
  isMobile?: boolean;
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({ className = '', isMobile = false }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [installedNotice, setInstalledNotice] = useState(false);

  // If running inside standalone mode, don't show the install button
  if (isInstalled) {
    return null;
  }

  const handleInstallClick = async () => {
    if (isInstallable) {
      const success = await install();
      if (success) {
        setInstalledNotice(true);
        setTimeout(() => setInstalledNotice(false), 4000);
      }
    } else if (isIOS) {
      setShowIOSGuide(true);
    } else {
      // General instructions fallback
      alert('To install this app on your device: open browser settings (⋮ or ⋯) and select "Install App" or "Add to Home screen".');
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleInstallClick}
        className={`inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs md:text-sm font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-400 min-h-[40px] whitespace-nowrap cursor-pointer ${className}`}
        aria-label="Add Price Amit Medical Hall App to Home Screen"
        title="Install as Progressive Web App"
      >
        <span className="text-base" role="img" aria-label="mobile phone">📲</span>
        <span>{isMobile ? 'Add App to Home' : 'Add to Home'}</span>
      </button>

      {installedNotice && (
        <div className="fixed bottom-20 right-5 z-50 bg-emerald-700 text-white text-xs px-4 py-2.5 rounded-xl shadow-lg animate-fade-in">
          ✓ App installed successfully!
        </div>
      )}

      <IOSInstallGuide isOpen={showIOSGuide} onClose={() => setShowIOSGuide(false)} />
    </>
  );
};
