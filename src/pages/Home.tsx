import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  HeartHandshake, 
  Pill, 
  Stethoscope, 
  Activity, 
  Baby, 
  ChevronRight, 
  Search, 
  Star,
  Send,
  HelpCircle
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/siteConfig';
import { SERVICES_DATA } from '../data/servicesData';
import initialStockData from '../data/medicineStock.json';
import { REVIEWS_DATA } from '../data/reviewsData';
import { FAQ_DATA } from '../data/faqData';
import { HEALTH_TIPS_DATA } from '../data/healthTipsData';
import { useOrderModal } from '../context/OrderModalContext';
import { SEO } from '../components/common/SEO';
import { MedicineItem } from '../types';

export const Home: React.FC = () => {
  const { openOrderModal } = useOrderModal();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  // Featured services limited to maximum 6 as strictly required by prompt
  const featuredServices = SERVICES_DATA.slice(0, 6);
  // Featured products from medicine stock
  const featuredProducts = (initialStockData as MedicineItem[]).slice(0, 4);
  // Customer reviews preview
  const reviewsPreview = REVIEWS_DATA.slice(0, 3);
  // FAQ preview
  const faqPreview = FAQ_DATA.slice(0, 3);
  // Health tips preview
  const healthTipsPreview = HEALTH_TIPS_DATA.slice(0, 2);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSuccess(true);
      setTimeout(() => setNewsletterSuccess(false), 4000);
      setNewsletterEmail('');
    }
  };

  return (
    <div className="w-full">
      <SEO 
        title="Price Amit Medical Hall - Your Trusted Medical Store in Bihar" 
        description="Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care and daily medical essentials at affordable prices in Rajunir, Bihar."
      />

      {/* HERO BANNER */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
        {/* Background Image with optimized dark overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 scale-105 transition duration-700"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1800&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-emerald-950/80" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 z-10 w-full">
          <div className="max-w-3xl space-y-6">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs sm:text-sm font-semibold backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Genuine Prescription Drugs • Govt. Licensed Chemist</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              {BUSINESS_CONFIG.tagline}
            </h1>

            {/* Mandatory Exact Description */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-normal">
              Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care and daily medical essentials at affordable prices.
            </p>

            {/* Mandatory 3 Buttons: Call Now, WhatsApp Order, Get Directions */}
            <div className="pt-3 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <a
                href={`tel:${BUSINESS_CONFIG.phone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm sm:text-base shadow-lg transition active:scale-95"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Call Now</span>
              </a>

              <button
                onClick={() => openOrderModal()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-900/40 transition active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Order</span>
              </button>

              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-white font-bold text-sm sm:text-base backdrop-blur-sm transition active:scale-95"
              >
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-800 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Cold-Chain Insulins & Vaccines</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Fair Discounted Prices</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Live Stock Availability</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHORT ABOUT PREVIEW */}
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 relative">
              <div className="aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1586015555751-63c2c11a6ef5?auto=format&fit=crop&w=1000&q=80"
                  alt="Price Amit Medical Hall Store"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-emerald-700 text-white p-6 rounded-2xl shadow-xl hidden sm:block border-4 border-white dark:border-slate-900">
                <p className="text-3xl font-black">14+</p>
                <p className="text-xs font-semibold text-emerald-200 uppercase tracking-wider">Years of Community Trust</p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                About Our Medical Store
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Dedicated to Genuine Patient Health & Affordable Care in Bihar
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Founded with the vision to make authentic medications readily available in the Rajunir and Kovilpatti region, <strong>{BUSINESS_CONFIG.businessName}</strong> has grown into the primary healthcare destination for local families and medical practitioners.
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                We combine licensed pharmacist oversight with state-of-the-art cold refrigeration and digital computerized tracking so that every dosage you take is safe and effective.
              </p>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold transition shadow-xs"
                >
                  <span>Read Full Business Story & Achievements</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES (MAXIMUM 6 PREVIEW) */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                Our Healthcare Offerings
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
                Featured Pharmacy Services
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 transition"
            >
              <span>View All Categories & Services</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((srv) => (
              <div
                key={srv.id}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-200 dark:border-emerald-800">
                      <Pill className="w-6 h-6" />
                    </div>
                    {srv.badge && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                        {srv.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {srv.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => openOrderModal(srv.title)}
                    className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Order Category</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                  <Link
                    to="/services"
                    className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                  >
                    Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-md transition"
            >
              <span>Explore All 8 Healthcare Categories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
              Quality Assured
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              Why Doctors & Patients Trust Us
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              Patient safety and medication efficacy remain the bedrock of our pharmacy operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-center">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 mx-auto flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1.5">100% Genuine Brands</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Direct procurement from authorized pharmaceutical distributors. No spurious or substandard batches.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-center">
              <div className="w-12 h-12 rounded-xl bg-sky-100 dark:bg-sky-950 text-sky-600 mx-auto flex items-center justify-center mb-4">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1.5">Strict Cold Storage</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                24/7 temperature-controlled refrigerators ensuring full potency for sensitive insulins and biologicals.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-center">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 mx-auto flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1.5">Affordable Fair Pricing</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Clear discounts on chronic medications with transparent computerized tax billing on every purchase.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-center">
              <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 mx-auto flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1.5">WhatsApp Rx Support</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Send prescription photos for rapid pharmacist verification, stock reservation, and prompt delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS & STOCK PREVIEW */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                Popular Healthcare Essentials
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
                Featured Medicines & Diagnostics
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition"
            >
              <span>Open Live Inventory Checker</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((med) => (
              <div
                key={med.id}
                className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase text-slate-400">
                      {med.category}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                      {med.status}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base line-clamp-1">
                    {med.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {med.brand} • {med.packSize}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-2">
                    {med.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-base font-extrabold text-emerald-600">
                      ₹{med.discountedPrice || med.mrp}
                    </span>
                    {med.discountedPrice && (
                      <span className="ml-1 text-xs text-slate-400 line-through">
                        ₹{med.mrp}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => openOrderModal(`${med.name} (${med.brand})`)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Order</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS PREVIEW */}
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
              Community Testimonials
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              What Local Patrons Say
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Summarized feedback from families and patients in Rajunir and Nalanda district.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviewsPreview.map((rev) => (
              <div
                key={rev.id}
                className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">{rev.name}</p>
                    <p className="text-slate-400">{rev.location}</p>
                  </div>
                  {rev.verified && (
                    <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-2 py-0.5 rounded-full">
                      Verified Buyer
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
              Common Inquiries
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              Frequently Asked Questions Preview
            </h2>
          </div>

          <div className="space-y-4">
            {faqPreview.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs"
              >
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <span>Have a specific medicine question? Ask our Pharmacist</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* LATEST HEALTH TIPS PREVIEW */}
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                Wellness & Patient Education
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
                Latest Health Tips Preview
              </h2>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-1 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <span>Read Store Story & Guidance</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {healthTipsPreview.map((tip) => (
              <div
                key={tip.id}
                className="flex flex-col sm:flex-row gap-5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 overflow-hidden"
              >
                <img
                  src={tip.imageUrl}
                  alt={tip.title}
                  className="w-full sm:w-44 h-40 object-cover rounded-xl shrink-0"
                  loading="lazy"
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-400 mb-1">
                      <span className="text-emerald-600">{tip.category}</span>
                      <span>•</span>
                      <span>{tip.readTime}</span>
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base line-clamp-2">
                      {tip.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                      {tip.summary}
                    </p>
                  </div>

                  <button
                    onClick={() => openOrderModal()}
                    className="mt-3 text-xs font-bold text-emerald-600 dark:text-emerald-400 text-left hover:underline"
                  >
                    Consult Pharmacist on this topic →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMINENT CTA SECTION */}
      <section className="py-16 bg-gradient-to-r from-emerald-800 to-teal-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded-full bg-white/20 text-emerald-200 text-xs font-bold uppercase tracking-wider">
              Fast Prescription Fulfilment
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Need Medicines Urgently or Have a Doctor Prescription?
            </h2>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              Send us a photo of your prescription on WhatsApp or call our pharmacist directly. We verify authenticity, check stock, and prepare your package for immediate pickup or delivery.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openOrderModal()}
                className="px-6 py-3.5 rounded-xl bg-white text-emerald-900 font-bold text-sm shadow-xl hover:bg-emerald-50 transition active:scale-95 cursor-pointer"
              >
                Send Prescription on WhatsApp
              </button>
              <a
                href={`tel:${BUSINESS_CONFIG.phone}`}
                className="px-6 py-3.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-950 text-white border border-emerald-500/40 font-bold text-sm transition"
              >
                Call Pharmacist: {BUSINESS_CONFIG.formattedPhone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="py-12 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
            Subscribe for Monthly Healthcare Updates & Stock Alerts
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-xl mx-auto">
            Stay informed on seasonal health advisories, vaccination availability, and chronic medicine discount notifications.
          </p>

          <form onSubmit={handleNewsletterSubmit} className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto">
            <input
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Enter your email address..."
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold transition shrink-0 cursor-pointer"
            >
              Subscribe
            </button>
          </form>

          {newsletterSuccess && (
            <p className="mt-3 text-xs text-emerald-600 font-bold animate-fade-in">
              ✓ Thank you for subscribing! You will receive verified pharmacy updates.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};
export default Home;
