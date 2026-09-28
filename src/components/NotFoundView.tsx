import React from 'react';
import { ArrowLeft, ArrowUpRight, Compass } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import promoImg from '../assets/images/promo_sofa_setting_1790594667950.jpg';

export const NotFoundView: React.FC = () => {
  const { setCurrentView, setActiveFilter } = useShop();

  const handleBackHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShopCollection = () => {
    setCurrentView('home');
    setActiveFilter('all');
    setTimeout(() => {
      const el = document.getElementById('shop');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-[#F7F4EF]">
      <div className="max-w-3xl w-full text-center">
        {/* Subtle Architectural Monogram */}
        <div className="w-16 h-16 rounded-full bg-[#EFE9E1] text-[#8A6247] flex items-center justify-center mx-auto mb-6 shadow-2xs">
          <Compass className="w-8 h-8 stroke-[1.4]" />
        </div>

        <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[#8A6247] block mb-3">
          ERROR 404 · LOCATION UNCHARTED
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#24211E] font-normal leading-tight mb-4">
          Page Not Found
        </h1>

        <p className="text-base sm:text-lg text-[#6E6861] font-light max-w-lg mx-auto leading-relaxed mb-8">
          The interior space or catalogue address you are seeking has been relocated or is currently undergoing curation. Allow us to guide you back to our studio collections.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            onClick={handleBackHome}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] text-[#24211E] bg-white border border-[#24211E]/30 hover:border-[#24211E] hover:bg-[#EFE9E1] transition-all cursor-pointer rounded-xs"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            <span>Back Home</span>
          </button>

          <button
            onClick={handleShopCollection}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] text-white bg-[#24211E] hover:bg-[#8A6247] transition-all cursor-pointer rounded-xs shadow-xs group"
          >
            <span>Shop Collection</span>
            <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Suggestion Card */}
        <div className="bg-[#EFE9E1]/70 p-6 sm:p-8 rounded-sm border border-[#DCC9B7]/50 max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-6 text-left">
          <img
            src={promoImg}
            alt="FORMA Interior"
            className="w-24 h-24 object-cover rounded-2xs shrink-0"
          />
          <div>
            <div className="text-[10px] uppercase tracking-wider text-[#8A6247] font-semibold">
              Looking for inspiration?
            </div>
            <h4 className="font-serif text-lg text-[#24211E] font-medium mt-0.5">
              Explore New 2026 Designs
            </h4>
            <p className="text-xs text-[#6E6861] font-light mt-1">
              Solid white oak tables, bouclé modular seating, and honed stone pedestals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
