import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../data/products';
import { useShop } from '../context/ShopContext';

export const CategorySection: React.FC = () => {
  const { setActiveFilter } = useShop();

  const handleCategoryClick = (categoryKey: string) => {
    setActiveFilter(categoryKey);
    const shopEl = document.getElementById('shop');
    if (shopEl) {
      const yOffset = -70;
      const y = shopEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="categories" className="py-20 lg:py-28 bg-[#F7F4EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.22em] text-[#8A6247] font-semibold block mb-3">
            EXPLORE THE COLLECTION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#24211E] font-normal tracking-tight mb-4">
            Rooms of Intentional Living
          </h2>
          <p className="text-base text-[#6E6861] font-light">
            Thoughtfully designed pieces for every corner of your home.
          </p>
        </div>

        {/* 5-Category Layout: Responsive Grid (2 columns on mobile, 5 columns or asymmetric layout on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.filterKey)}
              className="group cursor-pointer flex flex-col overflow-hidden bg-[#EFE9E1]/50 rounded-sm border border-[#EFE9E1] transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              {/* Category Image */}
              <div className="relative aspect-4/5 overflow-hidden bg-[#EFE9E1]">
                <img
                  src={category.image}
                  alt={category.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Overlay Title for dramatic architectural effect */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] uppercase tracking-widest text-[#DCC9B7] block mb-1">
                    {category.itemCount} Designs
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal leading-tight">
                    {category.name}
                  </h3>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="p-4 bg-[#F7F4EF] flex items-center justify-between border-t border-[#EFE9E1]">
                <span className="text-xs font-medium uppercase tracking-wider text-[#6E6861] group-hover:text-[#24211E] transition-colors">
                  Explore
                </span>
                <ArrowRight className="w-4 h-4 text-[#8A6247] transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
