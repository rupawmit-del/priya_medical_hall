import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { OrderModalProvider } from './context/OrderModalContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingActions } from './components/layout/FloatingActions';
import { OfflineIndicator } from './components/common/OfflineIndicator';
import { WhatsAppOrderModal } from './components/common/WhatsAppOrderModal';
import { IOSInstallGuide } from './components/common/IOSInstallGuide';
import { ScrollToTop } from './components/common/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Login from './pages/Login';

export default function App() {
  return (
    <ThemeProvider>
      <OrderModalProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
            {/* Offline Network Toast Banner */}
            <OfflineIndicator />

            {/* Sticky Navigation Header */}
            <Navbar />

            {/* Main View Router */}
            <main className="flex-1 w-full">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>

            {/* Global Footer with Required Tracking and WMIT anchor */}
            <Footer />

            {/* Floating Actions: Call, WhatsApp, Back to Top */}
            <FloatingActions />

            {/* Global WhatsApp Prescription Order Modal */}
            <WhatsAppOrderModal />

            {/* iOS Safari PWA Install Modal Guidance */}
            <IOSInstallGuide />
          </div>
        </BrowserRouter>
      </OrderModalProvider>
    </ThemeProvider>
  );
}
