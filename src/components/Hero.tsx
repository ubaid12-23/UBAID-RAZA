import React, { useState } from 'react';
import { ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';
import heroImg from '../assets/images/hero_forma_living_1790594601715.jpg';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';

export const Hero: React.FC = () => {
  const { setSelectedProduct } = useShop();
  const [imageLoaded, setImageLoaded] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleHeroItemClick = () => {
    // Luna Modular Sofa
    const sofa = PRODUCTS[0];
    if (sofa) setSelectedProduct(sofa);
  };

  return (
    <section id="hero" className="relative pt-6 pb-16 lg:py-20 overflow-hidden bg-[#F7F4EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center max-w-xl">
            {/* Clean unboxed eyebrow text */}
            <div className="flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#8A6247]">
              <span>CRAFTED FOR MODERN LIVING</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#6E6861]">EST. 2026</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#24211E] font-normal leading-[1.12] tracking-tight mb-6 text-balance">
              Furniture That Transforms Your Space
            </h1>

            {/* Supporting paragraph */}
            <p className="text-base sm:text-lg text-[#6E6861] font-light leading-relaxed mb-8 max-w-lg">
              Discover thoughtfully designed pieces created to bring comfort, character, and timeless beauty into every room.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={() => scrollToSection('shop')}
                className="inline-flex items-center justify-center px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] text-white bg-[#24211E] hover:bg-[#8A6247] transition-all duration-200 shadow-xs cursor-pointer group rounded-xs"
              >
                <span>Shop Collection</span>
                <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={() => scrollToSection('story')}
                className="inline-flex items-center justify-center px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] text-[#24211E] bg-transparent border border-[#24211E]/30 hover:border-[#24211E] hover:bg-[#EFE9E1]/50 transition-all duration-200 cursor-pointer rounded-xs"
              >
                Explore Our Story
              </button>
            </div>

            {/* Editorial trust markers */}
            <div className="pt-6 border-t border-[#EFE9E1] grid grid-cols-2 gap-4 text-xs text-[#6E6861]">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#8A6247] stroke-[1.5]" />
                <span>Sustainable European Oak & Beech</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#8A6247] stroke-[1.5]" />
                <span>10-Year Structural Frame Warranty</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Showcase Imagery */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden rounded-md bg-[#EFE9E1] shadow-sm aspect-4/3 sm:aspect-16/11 lg:aspect-4/3 group">
              {/* Fallback container with neutral gradient */}
              <div
                className={`absolute inset-0 bg-[#EFE9E1] transition-opacity duration-700 ${
                  imageLoaded ? 'opacity-0' : 'opacity-100'
                }`}
              />

              <img
                src={heroImg}
                alt="Contemporary living room interior with Luna modular sofa and warm wood furniture"
                referrerPolicy="no-referrer"
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-102 ${
                  imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-98'
                }`}
              />

              {/* Refined Floating Tag */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#F7F4EF]/90 backdrop-blur-md px-4 py-3 rounded-xs border border-[#EFE9E1] shadow-xs flex items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#6E6861]">
                    Featured Centerpiece
                  </div>
                  <div className="font-serif text-sm font-medium text-[#24211E]">
                    Luna Modular Sofa in Oatmeal
                  </div>
                </div>
                <button
                  onClick={handleHeroItemClick}
                  className="text-xs uppercase tracking-wider font-semibold text-[#8A6247] hover:text-[#24211E] flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>View</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
