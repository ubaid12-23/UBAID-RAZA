import React from 'react';
import { Instagram, Facebook, Youtube, Compass, PhoneCall } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Footer: React.FC = () => {
  const {
    setActiveFilter,
    setIsContactOpen,
    setIsJournalOpen,
    setCurrentView,
    showToast,
  } = useShop();

  const handleNavClick = (sectionId: string, filter?: string) => {
    setCurrentView('home');
    if (filter) {
      setActiveFilter(filter);
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#24211E] text-[#F7F4EF] pt-20 pb-12 border-t border-[#3B3835]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-[#3B3835]">
          
          {/* Column 1: Brand Wordmark & Identity (2 cols on lg) */}
          <div className="lg:col-span-2 pr-0 lg:pr-8">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCurrentView('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="font-serif text-3xl tracking-[0.24em] font-normal text-[#F7F4EF] uppercase block mb-4"
            >
              FORMA
            </a>
            <p className="text-sm text-[#DCC9B7]/80 font-light leading-relaxed max-w-sm mb-6">
              Modern furniture studio dedicated to architectural proportion, tactile natural materials, and quiet generational craftsmanship.
            </p>
            <div className="flex items-center gap-3 text-xs text-[#DCC9B7]">
              <Compass className="w-4 h-4 text-[#C9AE94]" />
              <span>Portland Atelier · Copenhagen Design Lab</span>
            </div>
          </div>

          {/* Column 2: SHOP */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#DCC9B7] mb-5">
              SHOP
            </h4>
            <ul className="space-y-3 text-xs tracking-wide text-[#EFE9E1]/80 font-light">
              <li>
                <button
                  onClick={() => handleNavClick('shop', 'living')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Living Room
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('shop', 'dining')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Dining & Kitchen
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('shop', 'bedroom')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Bedroom Suites
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('shop', 'office')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Home Office
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('shop', 'lighting')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Architectural Lighting
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('shop', 'all')}
                  className="hover:text-white transition-colors cursor-pointer text-[#C9AE94] text-left"
                >
                  New Arrivals 2026
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: ABOUT */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#DCC9B7] mb-5">
              ABOUT
            </h4>
            <ul className="space-y-3 text-xs tracking-wide text-[#EFE9E1]/80 font-light">
              <li>
                <button
                  onClick={() => handleNavClick('story')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Our Story & Atelier
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsJournalOpen(true)}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  FORMA Journal
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('signature')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Signature Collection
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('categories')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Sustainable Materials
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="hover:text-white transition-colors cursor-pointer text-left text-[#C9AE94]"
                >
                  Trade & Interior Architects
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: HELP */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#DCC9B7] mb-5">
              HELP
            </h4>
            <ul className="space-y-3 text-xs tracking-wide text-[#EFE9E1]/80 font-light">
              <li>
                <button
                  onClick={() => showToast('Complimentary White Glove Delivery on orders over $1,500')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  White Glove Shipping
                </button>
              </li>
              <li>
                <button
                  onClick={() => showToast('30-Day In-Home Return Trial on all original designs')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Returns & Exchanges (30 Days)
                </button>
              </li>
              <li>
                <button
                  onClick={() => showToast('10-Year Structural Frame Warranty on solid hardwood pieces')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  10-Year Warranty Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => showToast('Material Care Guide included with every furniture delivery')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Material Care Handbook
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="hover:text-white transition-colors cursor-pointer text-left text-[#C9AE94]"
                >
                  Concierge Support (+1-800-367-6200)
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Area: Copyright, Creator Credit, Social & Legal */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between text-xs text-[#6E6861] gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
            <span>© 2026 FORMA. All rights reserved.</span>
            
            {/* Subtle professional creator/developer credit */}
            <span className="text-[#C9AE94]/90 text-[11px] font-normal tracking-wide">
              Designed &amp; Developed by <strong className="text-[#F7F4EF] font-medium">UBAID RAZA</strong>
            </span>

            <div className="flex items-center gap-4 text-[#DCC9B7]/70">
              <span
                onClick={() => showToast('Privacy Policy: All client information is encrypted and confidential.')}
                className="hover:text-white cursor-pointer transition-colors"
              >
                Privacy Policy
              </span>
              <span
                onClick={() => showToast('Terms of Service: FORMA Studio standard client agreement.')}
                className="hover:text-white cursor-pointer transition-colors"
              >
                Terms of Service
              </span>
              <button
                onClick={() => setCurrentView('404')}
                className="hover:text-white cursor-pointer transition-colors text-[10px] uppercase tracking-wider text-[#6E6861]"
                title="View custom 404 page"
              >
                404 Preview
              </button>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5 text-[#DCC9B7]/80">
            <button
              onClick={() => showToast('Visiting @formafurniture on Instagram')}
              className="hover:text-white cursor-pointer transition-colors"
              title="Instagram"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </button>
            <button
              onClick={() => showToast('Visiting FORMA Design Studio on Pinterest')}
              className="hover:text-white cursor-pointer transition-colors"
              title="Pinterest"
              aria-label="Pinterest"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0a12 12 0 0 0-4.37 23.18c-.06-.99-.1-2.52.02-3.6.11-.99.73-6.28.73-6.28s-.18-.38-.18-.94c0-.88.51-1.54 1.15-1.54.54 0 .8.41.8.9 0 .55-.35 1.36-.53 2.12-.15.64.32 1.16.95 1.16 1.14 0 2.02-1.2 2.02-2.94 0-1.54-1.1-2.61-2.69-2.61-1.83 0-2.91 1.37-2.91 2.8 0 .55.21 1.14.48 1.46.05.06.06.12.04.18-.05.2-.16.65-.18.74-.03.11-.1.15-.22.1-1.03-.48-1.68-1.98-1.68-3.19 0-2.59 1.88-4.97 5.43-4.97 2.85 0 5.07 2.03 5.07 4.75 0 2.83-1.79 5.11-4.27 5.11-.83 0-1.62-.43-1.89-.95l-.51 1.96c-.19.72-.7 1.62-1.04 2.18A12 12 0 1 0 12 0z"/>
              </svg>
            </button>
            <button
              onClick={() => showToast('Visiting FORMA on Facebook')}
              className="hover:text-white cursor-pointer transition-colors"
              title="Facebook"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </button>
            <button
              onClick={() => showToast('Visiting FORMA Atelier on YouTube')}
              className="hover:text-white cursor-pointer transition-colors"
              title="YouTube"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

