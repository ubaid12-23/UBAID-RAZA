import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F7F4EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.22em] text-[#8A6247] font-semibold block mb-3">
            VERIFIED REVIEWS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#24211E] font-normal tracking-tight mb-4">
            Loved by Modern Homes
          </h2>
          <p className="text-base text-[#6E6861] font-light">
            Real spaces shaped by FORMA pieces around the world.
          </p>
        </div>

        {/* 3 Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#EFE9E1]/50 p-8 sm:p-10 rounded-sm border border-[#EFE9E1] flex flex-col justify-between transition-all duration-300 hover:bg-white hover:shadow-xs"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-[#8A6247] mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-[#DCC9B7] mb-3 stroke-[1]" />

                {/* Quote Text */}
                <p className="font-serif text-lg text-[#24211E] font-normal leading-relaxed italic mb-6">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-6 border-t border-[#DCC9B7]/50">
                <div className="font-medium text-sm text-[#24211E]">
                  {testimonial.author}
                </div>
                <div className="text-xs text-[#6E6861] mt-0.5">
                  {testimonial.location}
                </div>
                <div className="text-[11px] text-[#8A6247] font-medium mt-1">
                  {testimonial.item}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
