import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import loungeImg from '../assets/images/featured_lounge_chair_1790594621678.jpg';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';

export const FeaturedCollection: React.FC = () => {
  const { setSelectedProduct, setActiveFilter } = useShop();

  const handleDiscover = () => {
    setActiveFilter('all');
    const shopEl = document.getElementById('shop');
    if (shopEl) {
      const yOffset = -70;
      const y = shopEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleInspectChair = () => {
    const chair = PRODUCTS.find((p) => p.id === 'arden-lounge-chair');
    if (chair) setSelectedProduct(chair);
  };

  return (
    <section id="signature" className="py-20 lg:py-28 bg-[#EFE9E1]/50 border-y border-[#EFE9E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Asymmetrical Editorial Image */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative rounded-sm overflow-hidden bg-[#EFE9E1] aspect-4/3 shadow-sm group">
              <img
                src={loungeImg}
                alt="Arden sculptural walnut lounge chair in architectural daylight"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                loading="lazy"
              />

              {/* Editorial Badge Container */}
              <div className="absolute top-6 left-6 bg-[#F7F4EF]/90 backdrop-blur-md px-3.5 py-1.5 rounded-xs border border-[#EFE9E1] text-[11px] uppercase tracking-widest text-[#24211E] font-medium">
                No. 01 Edition
              </div>

              {/* Quick View Tag on Image */}
              <button
                onClick={handleInspectChair}
                className="absolute bottom-6 right-6 bg-[#24211E] hover:bg-[#8A6247] text-white px-4 py-2.5 rounded-xs text-xs font-medium uppercase tracking-wider flex items-center gap-2 shadow-md transition-colors cursor-pointer"
              >
                <span>View Arden Chair</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Text */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8A6247] block mb-3">
              THE SIGNATURE COLLECTION
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#24211E] font-normal leading-[1.15] mb-6">
              Designed for the way you live.
            </h2>

            <p className="text-base text-[#6E6861] font-light leading-relaxed mb-8">
              Refined silhouettes, natural materials, and enduring craftsmanship come together in a collection designed to make everyday spaces feel extraordinary.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm text-[#24211E]">
                <CheckCircle2 className="w-4 h-4 text-[#8A6247] shrink-0" />
                <span>Individually sculpted solid American walnut</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#24211E]">
                <CheckCircle2 className="w-4 h-4 text-[#8A6247] shrink-0" />
                <span>100% Belgian flax linen woven by Master Weavers</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#24211E]">
                <CheckCircle2 className="w-4 h-4 text-[#8A6247] shrink-0" />
                <span>Hand-rubbed organic natural oil finish</span>
              </div>
            </div>

            <div>
              <button
                onClick={handleDiscover}
                className="inline-flex items-center px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] text-white bg-[#24211E] hover:bg-[#8A6247] transition-colors cursor-pointer shadow-xs rounded-xs group"
              >
                <span>Discover Collection</span>
                <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
