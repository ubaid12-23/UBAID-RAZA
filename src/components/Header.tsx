import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, Menu, X, ArrowRight, User } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Header: React.FC = () => {
  const {
    cartCount,
    wishlist,
    setIsCartOpen,
    setIsWishlistOpen,
    setIsSearchOpen,
    setIsAccountOpen,
    setIsContactOpen,
    setIsJournalOpen,
    setActiveFilter,
    setCurrentView,
  } = useShop();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPromo, setShowPromo] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string, filter?: string) => {
    setCurrentView('home');
    if (filter) {
      setActiveFilter(filter);
    }
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Optional Slim Announcement Strip */}
      {showPromo && (
        <div className="bg-[#24211E] text-[#F7F4EF] text-xs py-2 px-4 transition-all">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex-1 text-center font-normal tracking-wide">
              <span>Complimentary White Glove Delivery on orders over $1,500</span>
              <span className="mx-2 hidden sm:inline" aria-hidden="true">·</span>
              <button
                onClick={() => handleNavClick('shop')}
                className="underline underline-offset-4 hover:text-[#DCC9B7] transition-colors cursor-pointer hidden sm:inline-block ml-1"
              >
                Explore Collection
              </button>
            </div>
            <button
              onClick={() => setShowPromo(false)}
              className="text-[#DCC9B7] hover:text-white p-1 text-xs cursor-pointer"
              aria-label="Close notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F7F4EF]/95 backdrop-blur-md shadow-xs py-3.5 border-b border-[#EFE9E1]'
            : 'bg-[#F7F4EF] py-5 border-b border-[#EFE9E1]/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Single text element wordmark */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentView('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="font-serif text-2xl sm:text-3xl tracking-[0.22em] font-medium text-[#24211E] uppercase hover:opacity-85 transition-opacity"
              >
                FORMA
              </a>
            </div>

            {/* Zone 2: 4-6 clean text navigation links */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-xs uppercase tracking-[0.16em] font-medium text-[#6E6861]">
              <button
                onClick={() => handleNavClick('hero')}
                className="hover:text-[#24211E] transition-colors cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('shop')}
                className="hover:text-[#24211E] transition-colors cursor-pointer"
              >
                Shop
              </button>
              <button
                onClick={() => handleNavClick('categories')}
                className="hover:text-[#24211E] transition-colors cursor-pointer"
              >
                Collections
              </button>
              <button
                onClick={() => handleNavClick('story')}
                className="hover:text-[#24211E] transition-colors cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => setIsJournalOpen(true)}
                className="hover:text-[#24211E] transition-colors cursor-pointer"
              >
                Journal
              </button>
              <button
                onClick={() => setIsContactOpen(true)}
                className="hover:text-[#24211E] transition-colors cursor-pointer"
              >
                Contact
              </button>
            </nav>

            {/* Zone 3: 4 utility actions: Search, Account, Wishlist, Cart */}
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-[#24211E] hover:text-[#8A6247] transition-colors p-1.5 cursor-pointer rounded-full hover:bg-[#EFE9E1]"
                aria-label="Search collection"
                title="Search"
              >
                <Search className="w-5 h-5 stroke-[1.6]" />
              </button>

              <button
                onClick={() => setIsAccountOpen(true)}
                className="text-[#24211E] hover:text-[#8A6247] transition-colors p-1.5 cursor-pointer rounded-full hover:bg-[#EFE9E1]"
                aria-label="Account & orders"
                title="Account"
              >
                <User className="w-5 h-5 stroke-[1.6]" />
              </button>

              <button
                onClick={() => setIsWishlistOpen(true)}
                className="relative text-[#24211E] hover:text-[#8A6247] transition-colors p-1.5 cursor-pointer rounded-full hover:bg-[#EFE9E1]"
                aria-label={`Wishlist with ${wishlist.length} items`}
                title="Wishlist"
              >
                <Heart className="w-5 h-5 stroke-[1.6]" />
                {wishlist.length > 0 && (
                  <span className="absolute top-0 right-0 w-4 h-4 bg-[#8A6247] text-white text-[10px] font-medium rounded-full flex items-center justify-center tabular-nums">
                    {wishlist.length}
                  </span>
                )}
              </button>

              <button
                onClick={() => setIsCartOpen(true)}
                className="relative flex items-center gap-2 text-[#24211E] hover:text-[#8A6247] transition-colors p-1.5 cursor-pointer rounded-full hover:bg-[#EFE9E1]"
                aria-label={`Cart with ${cartCount} items`}
                title="Shopping Bag"
              >
                <ShoppingBag className="w-5 h-5 stroke-[1.6]" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 w-4 h-4 bg-[#24211E] text-[#F7F4EF] text-[10px] font-medium rounded-full flex items-center justify-center tabular-nums">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile hamburger menu toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-[#24211E] p-1.5 cursor-pointer rounded-full hover:bg-[#EFE9E1]"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 stroke-[1.6]" />
                ) : (
                  <Menu className="w-5 h-5 stroke-[1.6]" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down / Full Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#F7F4EF] border-t border-[#EFE9E1] px-6 py-8 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#6E6861] font-semibold">
                Menu
              </span>
              <button
                onClick={() => handleNavClick('hero')}
                className="text-left font-serif text-xl text-[#24211E] flex items-center justify-between py-2 border-b border-[#EFE9E1]"
              >
                Home <ArrowRight className="w-4 h-4 text-[#6E6861]" />
              </button>
              <button
                onClick={() => handleNavClick('shop')}
                className="text-left font-serif text-xl text-[#24211E] flex items-center justify-between py-2 border-b border-[#EFE9E1]"
              >
                Shop All Furniture <ArrowRight className="w-4 h-4 text-[#6E6861]" />
              </button>
              <button
                onClick={() => handleNavClick('categories')}
                className="text-left font-serif text-xl text-[#24211E] flex items-center justify-between py-2 border-b border-[#EFE9E1]"
              >
                Collections <ArrowRight className="w-4 h-4 text-[#6E6861]" />
              </button>
              <button
                onClick={() => handleNavClick('story')}
                className="text-left font-serif text-xl text-[#24211E] flex items-center justify-between py-2 border-b border-[#EFE9E1]"
              >
                About & Atelier <ArrowRight className="w-4 h-4 text-[#6E6861]" />
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsJournalOpen(true);
                }}
                className="text-left font-serif text-xl text-[#24211E] flex items-center justify-between py-2 border-b border-[#EFE9E1]"
              >
                Journal <ArrowRight className="w-4 h-4 text-[#6E6861]" />
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsContactOpen(true);
                }}
                className="text-left font-serif text-xl text-[#24211E] flex items-center justify-between py-2 border-b border-[#EFE9E1]"
              >
                Contact & Trade <ArrowRight className="w-4 h-4 text-[#6E6861]" />
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsAccountOpen(true);
                }}
                className="text-left font-serif text-xl text-[#24211E] flex items-center justify-between py-2 border-b border-[#EFE9E1]"
              >
                Account & Orders <ArrowRight className="w-4 h-4 text-[#6E6861]" />
              </button>

              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsSearchOpen(true);
                  }}
                  className="w-full py-3 px-4 bg-[#EFE9E1] text-[#24211E] text-xs font-medium tracking-wider uppercase rounded-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Search className="w-4 h-4" /> Search Collection
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

