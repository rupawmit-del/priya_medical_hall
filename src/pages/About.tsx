import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  Award, 
  Heart, 
  Clock, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Phone, 
  UserCheck,
  Building2,
  Stethoscope
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/siteConfig';
import { SEO } from '../components/common/SEO';
import { useOrderModal } from '../context/OrderModalContext';

export const About: React.FC = () => {
  const { openOrderModal } = useOrderModal();

  const timelineEvents = [
    {
      year: '2012',
      title: 'Store Founding & Licensure',
      description: 'Established on Bazar Road, Rajunir with State Drug Control licensing to supply genuine allopathic medications.'
    },
    {
      year: '2016',
      title: 'Dedicated Biological Cold Storage',
      description: 'Installed medical-grade uninterrupted power and digital 2°C–8°C refrigeration for insulins, vaccines, and biologics.'
    },
    {
      year: '2019',
      title: 'Surgical & Diagnostic Equipment Expansion',
      description: 'Partnered with Omron, Accu-Chek, and Dr. Morepen to bring hospital-grade diagnostic devices to home patients.'
    },
    {
      year: '2022',
      title: 'Computerized Batch & Expiry Automation',
      description: 'Adopted barcode-based inventory tracking, ensuring zero expired medicines on shelves and transparent tax invoices.'
    },
    {
      year: '2026',
      title: 'Digital Portal & WhatsApp Rx Gateway',
      description: 'Launched real-time online stock checker and direct WhatsApp prescription dispatch for fast doorstep fulfillment.'
    }
  ];

  const values = [
    {
      title: '100% Drug Authenticity',
      desc: 'Zero tolerance for counterfeit drugs. Every strip is procured exclusively from registered pharmaceutical manufacturers.'
    },
    {
      title: 'Ethical Pharmacist Advisory',
      desc: 'We cross-verify dosages, check for drug interactions, and ensure patients clearly understand how to take their medicines.'
    },
    {
      title: 'Affordable Community Access',
      desc: 'Committed to fair pricing, genuine manufacturer discounts, and providing economical high-quality generic alternatives.'
    },
    {
      title: 'Cold-Chain Integrity',
      desc: 'Uncompromising storage standards for temperature-sensitive lifesaving injectables and eye drops.'
    }
  ];

  return (
    <div className="w-full bg-white dark:bg-slate-900">
      <SEO 
        title="About Us - Price Amit Medical Hall" 
        description="Learn about Price Amit Medical Hall, our 14+ years journey, mission, values, licensed pharmacists, and commitment to genuine healthcare in Bihar."
      />

      {/* Page Header */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1586015555751-63c2c11a6ef5?auto=format&fit=crop&w=1600&q=80')`
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
            About Our Medical Hall
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-2 text-white">
            Our Story, Values & Commitment to Patient Care
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-2xl">
            Serving Rajunir, Kovilpatti, and the greater Nalanda district in Bihar with genuine medicines, trusted advice, and dedicated community care.
          </p>
        </div>
      </section>

      {/* BUSINESS STORY & STORE OVERVIEW */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                Our Journey Since {BUSINESS_CONFIG.establishedYear}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                From a Neighborhood Pharmacy to a Pillar of Local Healthcare
              </h2>
              
              <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  <strong>{BUSINESS_CONFIG.businessName}</strong> was founded with a singular purpose: to solve the acute shortage of genuine, properly refrigerated prescription drugs and surgical supplies in the Rajunir and Kovilpatti region of Bihar.
                </p>
                <p>
                  For over a decade, we have remained steadfastly independent and patient-focused. Unlike impersonal digital conglomerates, our licensed pharmacists know our customers by name, understand their chronic therapeutic requirements, and stand by the efficacy of every medication dispensed from our counter.
                </p>
                <p>
                  Today, we house an extensive repository of over 3,000 allopathic, pediatric, cardiac, diabetic, and surgical essentials, supported by modernized digital billing and instant WhatsApp ordering for the elderly and emergency cases.
                </p>
              </div>

              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                  <p className="text-2xl font-black text-emerald-600">100%</p>
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1">Authentic Batch Sourcing</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                  <p className="text-2xl font-black text-sky-600">24/7</p>
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1">Emergency WhatsApp Line</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1000&q=80"
                  alt="Medicine Racks at Price Amit Medical Hall"
                  className="w-full h-80 object-cover"
                />
              </div>

              {/* Owner / Pharmacist Message Box */}
              <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                    Rx
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                      Pharmacist-in-Charge Note
                    </h3>
                    <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                      Price Amit Medical Hall, Rajunir
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
                  &ldquo;A pharmacy is not merely a retail store; it is the final checkpoint of patient safety. We scrutinize prescriptions with utmost vigilance because we recognize that behind every strip of medicine lies someone&apos;s recovery and well-being.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION, VISION & VALUES */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
              Guiding Principles
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              Mission, Vision & Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Mission */}
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                To guarantee timely, uninterrupted access to 100% genuine pharmaceutical formulations and medical diagnostics for every patient in our community at honest, fair prices, guided by compassionate advisory.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-950 text-sky-600 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                To establish the benchmark for modern, ethical pharmacy operations in rural and suburban Bihar, integrating modern digital convenience with steadfast healthcare reliability.
              </p>
            </div>
          </div>

          {/* 4 Core Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center font-bold text-xs mb-3">
                  0{idx + 1}
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1.5">{v.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS TIMELINE */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
              Milestones
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              Our Journey & Key Achievements
            </h2>
          </div>

          <div className="relative border-l-2 border-emerald-500/40 ml-4 sm:ml-8 space-y-10 pl-6 sm:pl-8">
            {timelineEvents.map((evt, idx) => (
              <div key={idx} className="relative group">
                {/* Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-5 h-5 rounded-full bg-white dark:bg-slate-900 border-4 border-emerald-600 shadow-sm" />
                
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-extrabold mb-1">
                  {evt.year}
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                  {evt.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                  {evt.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US DETAILED */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <Building2 className="w-8 h-8 text-emerald-600" />
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">Clean, Sanitized Premises</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Air-conditioned medicine preservation hall maintained in compliance with Good Pharmacy Practice (GPP) standards.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <Stethoscope className="w-8 h-8 text-sky-600" />
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">Doctor Network Collaboration</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Seamless coordination with local clinics and physicians to ensure prescribed molecule variants are available without interruptions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <Heart className="w-8 h-8 text-rose-500" />
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">Patient First Always</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                We prioritize elderly and chronic care patients with prompt packaging, home dispatch advisory, and emergency refill alerts.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => openOrderModal()}
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition cursor-pointer"
            >
              Order Medicines from Our Verified Pharmacy
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
