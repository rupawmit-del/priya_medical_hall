import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Phone, UploadCloud, FileCheck, AlertCircle, Clock, MapPin, User, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/siteConfig';
import { useOrderModal } from '../../context/OrderModalContext';

export const WhatsAppOrderModal: React.FC = () => {
  const { isOrderModalOpen, prefillMedicine, closeOrderModal } = useOrderModal();

  const [customerName, setCustomerName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [medicineName, setMedicineName] = useState('');
  const [hasPrescription, setHasPrescription] = useState<'Yes' | 'No'>('No');
  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null);
  const [preferredDeliveryTime, setPreferredDeliveryTime] = useState('Earliest Possible / Same Day');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (prefillMedicine) {
      setMedicineName(prefillMedicine);
    }
  }, [prefillMedicine]);

  if (!isOrderModalOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPrescriptionFile(e.target.files[0]);
      setHasPrescription('Yes');
    }
  };

  const handleSendViaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerName.trim()) {
      setError('Please provide your customer name.');
      return;
    }

    if (!mobileNumber.trim() || mobileNumber.replace(/\D/g, '').length < 10) {
      setError('Please provide a valid 10-digit mobile number.');
      return;
    }

    if (!medicineName.trim() && hasPrescription !== 'Yes') {
      setError('Please specify the medicine required or indicate prescription attached.');
      return;
    }

    setError('');

    // Construct formatted WhatsApp message
    const lines = [
      `*Hello ${BUSINESS_CONFIG.businessName}*`,
      `*New Medicine / Healthcare Order:*`,
      `---------------------------------`,
      `👤 *Customer Name:* ${customerName.trim()}`,
      `📞 *Phone:* ${mobileNumber.trim()}`,
      email.trim() ? `✉️ *Email:* ${email.trim()}` : null,
      address.trim() ? `📍 *Address:* ${address.trim()}` : null,
      `💊 *Medicine Required:* ${medicineName.trim() || 'Refer to attached prescription'}`,
      `📄 *Prescription Available:* ${hasPrescription}${prescriptionFile ? ` (${prescriptionFile.name})` : ''}`,
      `⏰ *Preferred Time:* ${preferredDeliveryTime}`,
      message.trim() ? `📝 *Notes/Message:* ${message.trim()}` : null,
      `---------------------------------`,
      `_Sent from website: ${window.location.origin}_`
    ].filter(Boolean);

    const fullMessage = lines.join('\n');
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappUrlNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    closeOrderModal();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur-sm p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
    >
      <div 
        className="w-full max-w-xl rounded-2xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeOrderModal}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-200 dark:border-emerald-800">
            <MessageCircle className="w-6 h-6" />
          </div>
          <div>
            <h2 id="order-modal-title" className="text-xl font-bold text-slate-900 dark:text-white">
              WhatsApp Medicine Order
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Direct verification with licensed chemist at {BUSINESS_CONFIG.shortName}
            </p>
          </div>
        </div>

        {error && (
          <div className="mb-4 flex items-center gap-2 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs font-medium">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSendViaWhatsApp} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Customer Name <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Singh"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Mobile / WhatsApp Number <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="tel"
                  required
                  placeholder="e.g. 08935862873"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Email Address (Optional)
              </label>
              <input
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Preferred Pickup / Delivery Time
              </label>
              <div className="relative">
                <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <select
                  value={preferredDeliveryTime}
                  onChange={(e) => setPreferredDeliveryTime(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="Earliest Possible / Same Day">Earliest Possible / Today</option>
                  <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                  <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                  <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                  <option value="Store Counter Pickup">Store Counter Pickup (Keep Packed)</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Delivery Address / Locality
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="e.g. Near Bazar Chowk, Rajunir, Bihar"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Medicine Names & Quantities <span className="text-rose-500">*</span>
            </label>
            <textarea
              rows={2}
              required={hasPrescription !== 'Yes'}
              placeholder="e.g. Paracetamol 650mg - 2 strips, Azithral 500mg - 1 strip..."
              value={medicineName}
              onChange={(e) => setMedicineName(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Upload Prescription */}
          <div className="p-4 rounded-xl border border-dashed border-emerald-400/80 bg-emerald-50/50 dark:bg-emerald-950/20">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <UploadCloud className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    Upload Doctor Prescription
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    JPG, PNG, PDF (You can also attach directly in WhatsApp chat)
                  </p>
                </div>
              </div>

              <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition shadow-xs">
                <span>Browse File</span>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>

            {prescriptionFile && (
              <div className="mt-2.5 flex items-center justify-between text-xs bg-white dark:bg-slate-800 p-2 rounded-lg border border-emerald-200 dark:border-emerald-800">
                <span className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-medium truncate">
                  <FileCheck className="w-4 h-4 shrink-0" />
                  {prescriptionFile.name}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setPrescriptionFile(null);
                    setHasPrescription('No');
                  }}
                  className="text-rose-500 hover:text-rose-700 font-bold ml-2"
                >
                  Remove
                </button>
              </div>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Additional Note or Instructions
            </label>
            <input
              type="text"
              placeholder="e.g. Please check if generic substitute is available"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition active:scale-[0.98] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send via WhatsApp</span>
            </button>

            <a
              href={`tel:${BUSINESS_CONFIG.phone}`}
              className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm transition"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Call Now</span>
            </a>
          </div>

          <p className="text-[11px] text-center text-slate-400">
            🔒 By submitting, you will be redirected to official WhatsApp chat with {BUSINESS_CONFIG.shortName}.
          </p>
        </form>
      </div>
    </div>
  );
};
