import React, { useState, useMemo } from 'react';
import { Search, X, Pill, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';
import medicineStockData from '../../data/medicineStock.json';
import { MedicineItem } from '../../types';
import { useOrderModal } from '../../context/OrderModalContext';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { openOrderModal } = useOrderModal();

  const results = useMemo(() => {
    if (!searchTerm.trim()) return [];
    const term = searchTerm.toLowerCase();
    return (medicineStockData as MedicineItem[]).filter(
      (m) =>
        m.name.toLowerCase().includes(term) ||
        m.brand.toLowerCase().includes(term) ||
        m.genericName.toLowerCase().includes(term) ||
        m.category.toLowerCase().includes(term)
    ).slice(0, 8);
  }, [searchTerm]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center bg-slate-950/60 backdrop-blur-sm p-4 pt-16 sm:pt-24"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="w-full max-w-2xl rounded-2xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search medicine name, brand (e.g. Paracetamol, Dolo, Augmentin, BP Monitor)..."
            className="w-full bg-transparent text-sm sm:text-base text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-xs text-slate-400 hover:text-slate-600 p-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 max-h-[60vh] overflow-y-auto">
          {!searchTerm.trim() ? (
            <div className="py-8 text-center text-slate-400 text-xs sm:text-sm">
              <Pill className="w-8 h-8 mx-auto mb-2 text-slate-300 dark:text-slate-600" />
              <p>Type to search real-time medicine inventory and stock availability.</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {['Dolo 650', 'Augmentin', 'Pan 40', 'Omron BP', 'ORS Electral', 'Insulin'].map((quick) => (
                  <button
                    key={quick}
                    onClick={() => setSearchTerm(quick)}
                    className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 hover:text-emerald-600 transition"
                  >
                    {quick}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="py-8 text-center">
              <AlertCircle className="w-8 h-8 mx-auto mb-2 text-amber-500" />
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                No exact match found in current catalog.
              </p>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                We can arrange rare or unlisted medicines within 12–24 hours upon request.
              </p>
              <button
                onClick={() => {
                  onClose();
                  openOrderModal(searchTerm);
                }}
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition"
              >
                Inquire &quot;{searchTerm}&quot; via WhatsApp
              </button>
            </div>
          ) : (
            <div className="space-y-2.5">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-1">
                Matching Medicines ({results.length})
              </div>
              {results.map((med) => (
                <div
                  key={med.id}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/30 border border-slate-100 dark:border-slate-800 transition"
                >
                  <div className="min-w-0 flex-1 pr-3">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate">
                        {med.name}
                      </h4>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          med.status === 'Available'
                            ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                            : med.status === 'Limited Stock'
                            ? 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300'
                            : 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300'
                        }`}
                      >
                        {med.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">
                      {med.brand} • {med.packSize} • ₹{med.discountedPrice || med.mrp}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      onClose();
                      openOrderModal(`${med.name} (${med.brand})`);
                    }}
                    className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition"
                  >
                    <span>Order</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
