import React, { useState } from 'react';
import { 
  X, 
  ZoomIn, 
  Filter, 
  ChevronLeft, 
  ChevronRight, 
  MessageCircle, 
  MapPin, 
  Camera 
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/siteConfig';
import { GALLERY_DATA } from '../data/galleryData';
import { GalleryItem } from '../types';
import { SEO } from '../components/common/SEO';
import { useOrderModal } from '../context/OrderModalContext';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const { openOrderModal } = useOrderModal();

  const categories = ['All', 'Store', 'Shelves', 'Products', 'Equipment', 'Counter'];

  const filteredImages = selectedCategory === 'All'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((img) => img.category === selectedCategory);

  const activeImage = activeImageIndex !== null ? filteredImages[activeImageIndex] : null;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % filteredImages.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 min-h-screen">
      <SEO 
        title="Store Photo Gallery - Price Amit Medical Hall" 
        description="View our store front, sanitized interior, organized medicine shelves, cold storage equipment, and medical devices at Price Amit Medical Hall in Bihar."
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
            Visual Tour
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-2 text-white">
            Pharmacy Store & Facilities Gallery
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-2xl">
            Take a transparent look inside our clean, air-conditioned premises, organized prescription racks, and temperature-controlled medical storage.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          <Filter className="w-4 h-4 text-slate-400 shrink-0 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setActiveImageIndex(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {cat === 'All' ? 'All Photos' : cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => setActiveImageIndex(idx)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={img.imageUrl}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 rounded-full bg-white/90 text-slate-900 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
                <span className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-md bg-slate-900/80 text-white backdrop-blur-xs">
                  {img.category}
                </span>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
                    {img.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                    {img.caption}
                  </p>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-emerald-600 font-semibold">
                  <span>Click to zoom in</span>
                  <span>🔍</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* POPUP LIGHTBOX ZOOM MODAL */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-150"
          onClick={() => setActiveImageIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveImageIndex(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-950/80 text-white hover:bg-slate-800 transition"
              aria-label="Close image zoom"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Previous */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-950/70 text-white hover:bg-slate-800 transition"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Navigation Next */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-950/70 text-white hover:bg-slate-800 transition"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Preview Container */}
            <div className="relative max-h-[70vh] flex items-center justify-center bg-black">
              <img
                src={activeImage.imageUrl}
                alt={activeImage.title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Lightbox Caption & Details */}
            <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-800">
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  {activeImage.category}
                </span>
                <h3 className="text-lg font-bold text-white mt-0.5">
                  {activeImage.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1 max-w-xl">
                  {activeImage.caption}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => {
                    setActiveImageIndex(null);
                    openOrderModal(activeImage.title);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Gallery;
