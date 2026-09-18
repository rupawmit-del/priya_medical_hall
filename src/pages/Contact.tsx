import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Navigation, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  ExternalLink,
  ShieldCheck,
  Building
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/siteConfig';
import { SEO } from '../components/common/SEO';
import { useOrderModal } from '../context/OrderModalContext';

export const Contact: React.FC = () => {
  const { openOrderModal } = useOrderModal();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Medicine Availability Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) {
      setError('Please fill in all mandatory fields.');
      return;
    }

    setError('');
    setSubmitted(true);

    // Option to also forward message straight to WhatsApp
    const waText = encodeURIComponent(
      `*Inquiry from Website Contact Form:*\n👤 *Name:* ${name}\n📞 *Phone:* ${phone}\n📌 *Subject:* ${subject}\n📝 *Message:* ${message}`
    );
    window.open(`https://wa.me/${BUSINESS_CONFIG.whatsappUrlNumber}?text=${waText}`, '_blank');
  };

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 min-h-screen">
      <SEO 
        title="Contact & Location - Price Amit Medical Hall" 
        description="Contact Price Amit Medical Hall in Rajunir, Bihar. Address, phone 08935862873, WhatsApp ordering, Google Maps directions, and store opening hours."
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
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-2 text-white">
            Contact & Store Location
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-2xl">
            We are here to answer your medicine inquiries, check emergency supplies, or assist with prescription order fulfillment.
          </p>
        </div>
      </section>

      {/* Contact Grid & Map Section */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Business Details & Action Buttons */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href={`tel:${BUSINESS_CONFIG.phone}`}
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-emerald-500 transition text-center group"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-950 text-sky-600 flex items-center justify-center mb-2 group-hover:scale-110 transition">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Call Now</span>
                <span className="text-[11px] text-slate-400">{BUSINESS_CONFIG.formattedPhone}</span>
              </a>

              <button
                onClick={() => openOrderModal()}
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-emerald-500 transition text-center group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center mb-2 group-hover:scale-110 transition">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">WhatsApp</span>
                <span className="text-[11px] text-slate-400">Order & Chat</span>
              </button>

              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-emerald-500 transition text-center group"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 flex items-center justify-center mb-2 group-hover:scale-110 transition">
                  <Navigation className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Directions</span>
                <span className="text-[11px] text-slate-400">Open Maps</span>
              </a>
            </div>

            {/* Business Information Card */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
                Business Information
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                  <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-white block">Full Store Address:</strong>
                    <span>{BUSINESS_CONFIG.address}</span>
                    <span className="block text-xs text-slate-400 mt-0.5">
                      Landmark: {BUSINESS_CONFIG.landmark} (Plus Code: {BUSINESS_CONFIG.plusCode})
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                  <Clock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-white block">Counter Timings:</strong>
                    <span>{BUSINESS_CONFIG.workingHours.weekdays}</span>
                    <span className="block text-slate-400">{BUSINESS_CONFIG.workingHours.sunday}</span>
                    <span className="block text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">
                      {BUSINESS_CONFIG.workingHours.emergency}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                  <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-white block">Direct Phone & WhatsApp:</strong>
                    <a href={`tel:${BUSINESS_CONFIG.phone}`} className="hover:text-emerald-600 font-semibold">
                      {BUSINESS_CONFIG.formattedPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                  <Mail className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-white block">Official Email:</strong>
                    <a href={`mailto:${BUSINESS_CONFIG.email}`} className="hover:text-emerald-600 truncate">
                      {BUSINESS_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-white block">Licensing Credentials:</strong>
                    <span>Drug License: {BUSINESS_CONFIG.licenseNumber}</span>
                    <span className="block text-xs text-slate-400">GSTIN: {BUSINESS_CONFIG.gstin}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form & Embedded Map */}
          <div className="lg:col-span-7 space-y-8">
            {/* Contact Form Card */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Send an Inquiry or Medicine Request
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                Fill out this form to inquire about medicine availability, bulk clinical requirements, or diagnostic machine demonstrations.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    Inquiry Forwarded Successfully!
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
                    Your request was transmitted to our counter staff and opened on WhatsApp for immediate priority review.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Your Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Anand Kumar"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Phone / WhatsApp <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 08935862873"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Inquiry Topic / Subject
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="Medicine Availability Inquiry">Medicine Availability Inquiry</option>
                      <option value="Prescription Fulfillment Request">Prescription Fulfillment Request</option>
                      <option value="Blood Pressure / Sugar Monitor Pricing">Blood Pressure / Sugar Monitor Pricing</option>
                      <option value="Surgical / Clinic Bulk Supply">Surgical / Clinic Bulk Supply</option>
                      <option value="Home Care & Elderly Comfort Equipment">Home Care & Elderly Comfort Equipment</option>
                      <option value="Other Medical Questions">Other Medical Questions</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Your Message / Required Medicines <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Specify medicine names, dosages, or any questions for our pharmacist..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition active:scale-95 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => openOrderModal()}
                      className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm transition"
                    >
                      <span>Upload Rx Modal</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Embedded Google Map */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">
                    Location on Google Maps
                  </h4>
                </div>
                <a
                  href={BUSINESS_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                >
                  <span>Open Full Map</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="w-full h-72 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800">
                <iframe
                  title="Price Amit Medical Hall Location"
                  src={BUSINESS_CONFIG.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                <span>📍 Plus Code: <strong>{BUSINESS_CONFIG.plusCode}</strong></span>
                <span>Bazar Road, Rajunir, Bihar 803116</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
