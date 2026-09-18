import React, { useState } from 'react';
import { 
  Pill, 
  HeartPulse, 
  Activity, 
  Stethoscope, 
  Baby, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  MessageCircle, 
  ArrowRight,
  Filter
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/siteConfig';
import { SERVICES_DATA } from '../data/servicesData';
import { MedicineStockChecker } from '../components/services/MedicineStockChecker';
import { SEO } from '../components/common/SEO';
import { useOrderModal } from '../context/OrderModalContext';

export const Services: React.FC = () => {
  const { openOrderModal } = useOrderModal();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Prescription Medicines',
    'OTC Medicines',
    'Health Devices',
    'Medical Equipment',
    'Baby Care',
    'Supplements',
    'Home Care',
    'Personal Care'
  ];

  const filteredServices = selectedCategory === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === selectedCategory);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Pill': return <Pill className="w-6 h-6" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6" />;
      case 'Activity': return <Activity className="w-6 h-6" />;
      case 'Stethoscope': return <Stethoscope className="w-6 h-6" />;
      case 'Baby': return <Baby className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      default: return <ShieldCheck className="w-6 h-6" />;
    }
  };

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950">
      <SEO 
        title="Pharmacy Services & Medicine Stock Checker - Price Amit Medical Hall" 
        description="Explore complete pharmacy services: Prescription drugs, OTC, diagnostic equipment, baby care, surgical supplies, and real-time medicine stock availability checker."
      />

      {/* Page Hero */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1600&q=80')`
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
              Comprehensive Healthcare Range
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-2 text-white">
              Pharmacy Services & Medicine Inventory
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              Explore our specialized medical categories, diagnostic equipment, and search the live computerized stock checker below for immediate batch availability.
            </p>
          </div>
        </div>
      </section>

      {/* EXCLUSIVE FEATURE: LIVE MEDICINE STOCK CHECKER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 mb-16">
        <MedicineStockChecker />
      </section>

      {/* CATEGORY-WISE SERVICES LIST */}
      <section className="py-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
              Complete Healthcare Solutions
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              Category-Wise Pharmacy Services
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
              Every category is backed by certified sourcing, batch traceability, and expert pharmacist counseling.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Detailed Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-200 dark:border-emerald-800 shrink-0">
                      {getServiceIcon(service.iconName)}
                    </div>
                    {service.badge && (
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    {service.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {service.fullDesc}
                  </p>

                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide">
                      Key Highlights & Assurances:
                    </p>
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Card CTA */}
                <div className="pt-5 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <span className="text-xs text-slate-400">
                    Need items in this category?
                  </span>
                  <button
                    onClick={() => openOrderModal(service.title)}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition active:scale-95 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire / Order via WhatsApp</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Services;
