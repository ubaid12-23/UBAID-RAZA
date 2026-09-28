/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BenefitsBar } from './components/BenefitsBar';
import { CategorySection } from './components/CategorySection';
import { FeaturedCollection } from './components/FeaturedCollection';
import { ProductGrid } from './components/ProductGrid';
import { PromoBanner } from './components/PromoBanner';
import { CraftsmanshipSection } from './components/CraftsmanshipSection';
import { BrandStory } from './components/BrandStory';
import { Testimonials } from './components/Testimonials';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchOverlay } from './components/SearchOverlay';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CheckoutModal } from './components/CheckoutModal';
import { ContactModal } from './components/ContactModal';
import { AccountModal } from './components/AccountModal';
import { JournalModal } from './components/JournalModal';
import { NotFoundView } from './components/NotFoundView';
import { Toast } from './components/Toast';

function AppContent() {
  const { currentView } = useShop();

  return (
    <div className="min-h-screen bg-[#F7F4EF] text-[#24211E] flex flex-col font-sans selection:bg-[#DCC9B7] selection:text-[#24211E]">
      {/* Sticky Global Navigation */}
      <Header />

      {/* Main Content Sections or 404 View */}
      <main className="flex-1">
        {currentView === '404' ? (
          <NotFoundView />
        ) : (
          <>
            {/* 1. Hero Section */}
            <Hero />

            {/* 2. Trust & Benefits Strip */}
            <BenefitsBar />

            {/* 3. Shop by Category */}
            <CategorySection />

            {/* 4. Featured Signature Collection */}
            <FeaturedCollection />

            {/* 5. Product Grid (New Arrivals + Filter + Sort) */}
            <ProductGrid />

            {/* 6. Promotional Editorial Banner */}
            <PromoBanner />

            {/* 7. Craftsmanship & Materials */}
            <CraftsmanshipSection />

            {/* 8. About & Brand Story */}
            <BrandStory />

            {/* 9. Customer Testimonials */}
            <Testimonials />

            {/* 10. Newsletter Subscription */}
            <Newsletter />
          </>
        )}
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Drawers & Overlays */}
      <CartDrawer />
      <WishlistDrawer />
      <SearchOverlay />
      <ProductDetailModal />
      <CheckoutModal />
      <ContactModal />
      <AccountModal />
      <JournalModal />
      <Toast />
    </div>
  );
}

export default function App() {
  return (
    <ShopProvider>
      <AppContent />
    </ShopProvider>
  );
}

