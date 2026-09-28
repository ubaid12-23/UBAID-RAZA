import React from 'react';
import { Layers, Hammer, Compass } from 'lucide-react';
import { EDITORIAL_FEATURES } from '../data/products';

export const CraftsmanshipSection: React.FC = () => {
  const icons = [Layers, Hammer, Compass];

  return (
    <section className="py-20 lg:py-28 bg-[#F7F4EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.22em] text-[#8A6247] font-semibold block mb-3">
            PHILOSOPHY & INTEGRITY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#24211E] font-normal tracking-tight mb-4">
            Designed to Last
          </h2>
          <p className="text-base text-[#6E6861] font-light">
            We reject the disposable furniture paradigm. Every FORMA piece is engineered for generational permanence.
          </p>
        </div>

        {/* 3 Visual Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EDITORIAL_FEATURES.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={item.id}
                className="bg-white p-8 sm:p-10 rounded-sm border border-[#EFE9E1] transition-all duration-300 hover:shadow-sm hover:border-[#DCC9B7] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-full bg-[#EFE9E1] flex items-center justify-center text-[#8A6247]">
                      <Icon className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8A6247] bg-[#F7F4EF] px-2.5 py-1 rounded-2xs border border-[#EFE9E1]">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#24211E] font-medium mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs uppercase tracking-wider text-[#8A6247] font-semibold mb-4">
                    {item.subtitle}
                  </div>

                  <p className="text-sm text-[#6E6861] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#EFE9E1] flex items-center justify-between text-xs text-[#6E6861]">
                  <span>FORMA Studio Standard</span>
                  <span className="font-medium text-[#24211E]">0{index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
