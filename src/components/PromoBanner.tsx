import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import promoImg from '../assets/images/promo_sofa_setting_1790594667950.jpg';
import { useShop } from '../context/ShopContext';

export const PromoBanner: React.FC = () => {
  const { setActiveFilter } = useShop();

  const handleShopSale = () => {
    setActiveFilter('all');
    const shopEl = document.getElementById('shop');
    if (shopEl) {
      const yOffset = -70;
      const y = shopEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 lg:py-20 bg-[#F7F4EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EFE9E1] rounded-sm overflow-hidden border border-[#DCC9B7]/50 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8A6247] block mb-3">
                SEASONAL COLLECTION
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#24211E] font-normal leading-[1.14] mb-4">
                Elevate Your Everyday
              </h2>

              <p className="text-base text-[#6E6861] font-light leading-relaxed mb-8 max-w-md">
                Save up to 30% on selected pieces designed for modern living. Refined comfort, timeless silhouettes, and organic finishes crafted to last.
              </p>

              <div>
                <button
                  onClick={handleShopSale}
                  className="inline-flex items-center px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] text-white bg-[#24211E] hover:bg-[#8A6247] transition-colors cursor-pointer rounded-xs shadow-xs group"
                >
                  <span>Shop The Sale</span>
                  <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>

              {/* Editorial Note */}
              <div className="mt-8 pt-6 border-t border-[#DCC9B7]/60 flex items-center gap-4 text-xs text-[#6E6861]">
                <span>Limited Seasonal Archival Release</span>
                <span aria-hidden="true">·</span>
                <span>White Glove Delivery Included</span>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-6 relative aspect-16/10 lg:aspect-auto lg:h-[460px] overflow-hidden">
              <img
                src={promoImg}
                alt="Contemporary minimalist interior living room with curated armchairs and honed limestone table"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
