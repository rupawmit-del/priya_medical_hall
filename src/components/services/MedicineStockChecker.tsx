import React, { useState, useMemo } from 'react';
import { Search, Filter, CheckCircle2, AlertTriangle, XCircle, ArrowUpDown, MessageCircle, Info, RefreshCw } from 'lucide-react';
import initialStockData from '../../data/medicineStock.json';
import { MedicineItem, StockStatus } from '../../types';
import { useOrderModal } from '../../context/OrderModalContext';

export const MedicineStockChecker: React.FC = () => {
  const [medicines] = useState<MedicineItem[]>(initialStockData as MedicineItem[]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'name' | 'mrp' | 'quantity'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const { openOrderModal } = useOrderModal();

  const categories = useMemo(() => {
    const set = new Set<string>();
    medicines.forEach((m) => set.add(m.category));
    return ['All', ...Array.from(set)];
  }, [medicines]);

  const filteredMedicines = useMemo(() => {
    return medicines
      .filter((med) => {
        const matchesSearch =
          med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          med.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
          med.genericName.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory =
          selectedCategory === 'All' || med.category === selectedCategory;

        const matchesStatus =
          selectedStatus === 'All' || med.status === selectedStatus;

        return matchesSearch && matchesCategory && matchesStatus;
      })
      .sort((a, b) => {
        let diff = 0;
        if (sortBy === 'name') diff = a.name.localeCompare(b.name);
        if (sortBy === 'mrp') diff = (a.discountedPrice || a.mrp) - (b.discountedPrice || b.mrp);
        if (sortBy === 'quantity') diff = a.availableQuantity - b.availableQuantity;
        return sortOrder === 'asc' ? diff : -diff;
      });
  }, [medicines, searchTerm, selectedCategory, selectedStatus, sortBy, sortOrder]);

  const toggleSort = (field: 'name' | 'mrp' | 'quantity') => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  const getStatusBadge = (status: StockStatus, qty: number) => {
    switch (status) {
      case 'Available':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Available ({qty})</span>
          </span>
        );
      case 'Limited Stock':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Limited Stock ({qty})</span>
          </span>
        );
      case 'Out of Stock':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-800">
            <XCircle className="w-3.5 h-3.5" />
            <span>Out of Stock</span>
          </span>
        );
    }
  };

  return (
    <div id="medicine-stock-checker" className="w-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
      {/* Header Bar */}
      <div className="bg-gradient-to-r from-emerald-700 to-teal-800 text-white p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-emerald-100 text-xs font-semibold mb-2">
              <RefreshCw className="w-3.5 h-3.5 animate-spin-slow" />
              Live Pharmacy Inventory System
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Real-Time Medicine Stock Checker
            </h3>
            <p className="text-emerald-100 text-sm mt-1 max-w-xl">
              Verify immediate counter availability, expiry dates, and batch information before visiting or ordering.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => openOrderModal()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-emerald-800 hover:bg-emerald-50 text-sm font-bold shadow-md transition active:scale-95"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Order Unlisted Medicine</span>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-6 relative">
          <Search className="w-5 h-5 text-emerald-200 absolute left-4 top-3.5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by Medicine Name, Brand (e.g. Paracetamol, Cipla, Telma, Omron)..."
            className="w-full pl-12 pr-10 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-emerald-200/80 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white focus:bg-white/20 transition"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-4 top-3.5 text-xs text-white/70 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Filter and Controls */}
      <div className="p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <Filter className="w-4 h-4 text-slate-400 shrink-0 mr-1" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Status:</span>
            {(['All', 'Available', 'Limited Stock', 'Out of Stock'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition cursor-pointer ${
                  selectedStatus === status
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Count & Sort Info */}
      <div className="px-6 py-3 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
        <span>Showing <strong>{filteredMedicines.length}</strong> items in inventory</span>
        <div className="flex items-center gap-3">
          <span>Sort:</span>
          <button 
            onClick={() => toggleSort('name')} 
            className={`font-semibold hover:text-emerald-600 flex items-center gap-0.5 ${sortBy === 'name' ? 'text-emerald-600' : ''}`}
          >
            Name <ArrowUpDown className="w-3 h-3" />
          </button>
          <button 
            onClick={() => toggleSort('mrp')} 
            className={`font-semibold hover:text-emerald-600 flex items-center gap-0.5 ${sortBy === 'mrp' ? 'text-emerald-600' : ''}`}
          >
            Price <ArrowUpDown className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Medicines Table / List */}
      <div className="overflow-x-auto">
        {filteredMedicines.length === 0 ? (
          <div className="p-12 text-center">
            <Info className="w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
            <h4 className="text-base font-bold text-slate-700 dark:text-slate-300">
              No medicines match your current filters
            </h4>
            <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
              Looking for a rare medicine or specific dosage? Contact our licensed pharmacist directly to arrange urgent delivery.
            </p>
            <button
              onClick={() => openOrderModal(searchTerm)}
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition"
            >
              Request on WhatsApp
            </button>
          </div>
        ) : (
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-slate-50/80 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 font-semibold border-b border-slate-200 dark:border-slate-800">
                <th className="py-3 px-4 sm:px-6">Medicine & Brand</th>
                <th className="py-3 px-4 hidden md:table-cell">Category</th>
                <th className="py-3 px-4">Price (MRP)</th>
                <th className="py-3 px-4 hidden sm:table-cell">Expiry / Batch</th>
                <th className="py-3 px-4">Stock Status</th>
                <th className="py-3 px-4 text-right">Quick Order</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filteredMedicines.map((med) => (
                <tr
                  key={med.id}
                  className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition"
                >
                  <td className="py-3.5 px-4 sm:px-6">
                    <div className="font-bold text-slate-900 dark:text-white">
                      {med.name}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2 mt-0.5">
                      <span>{med.brand}</span>
                      <span>•</span>
                      <span className="italic">{med.packSize}</span>
                      {med.requiresPrescription && (
                        <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-1.5 py-0.2 rounded">
                          Rx Required
                        </span>
                      )}
                    </div>
                  </td>

                  <td className="py-3.5 px-4 hidden md:table-cell">
                    <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs">
                      {med.category}
                    </span>
                  </td>

                  <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-white">
                    {med.discountedPrice ? (
                      <div>
                        <span className="text-emerald-600 font-bold">₹{med.discountedPrice.toFixed(2)}</span>
                        <span className="ml-1.5 text-xs text-slate-400 line-through">₹{med.mrp.toFixed(2)}</span>
                      </div>
                    ) : (
                      <span>₹{med.mrp.toFixed(2)}</span>
                    )}
                  </td>

                  <td className="py-3.5 px-4 hidden sm:table-cell text-xs text-slate-600 dark:text-slate-400">
                    <div>Exp: <strong className="text-slate-800 dark:text-slate-200">{med.expiry}</strong></div>
                    <div className="text-[11px] text-slate-400 font-mono">B: {med.batchNo}</div>
                  </td>

                  <td className="py-3.5 px-4">
                    {getStatusBadge(med.status, med.availableQuantity)}
                  </td>

                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={() => openOrderModal(`${med.name} (${med.brand})`)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-xs shadow-xs transition active:scale-95 cursor-pointer ${
                        med.status === 'Out of Stock'
                          ? 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-emerald-600 hover:text-white'
                          : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                      }`}
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>{med.status === 'Out of Stock' ? 'Pre-Order' : 'WhatsApp'}</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Footer hint */}
      <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500">
        💡 Medicine prices are indicative of latest batch MRP discounts. Standard billing occurs on computerized tax invoice.
      </div>
    </div>
  );
};
