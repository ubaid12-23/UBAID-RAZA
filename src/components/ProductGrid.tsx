import React, { useState, useMemo } from 'react';
import { SlidersHorizontal, ArrowUpDown, Filter, X } from 'lucide-react';
import { PRODUCTS, Product } from '../data/products';
import { ProductCard } from './ProductCard';
import { useShop } from '../context/ShopContext';

export const ProductGrid: React.FC = () => {
  const { activeFilter, setActiveFilter, priceRange, setPriceRange } = useShop();
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [selectedPriceFilter, setSelectedPriceFilter] = useState<'all' | 'under-500' | '500-1000' | 'over-1000'>('all');

  const filterTabs = [
    { key: 'all', label: 'All Pieces' },
    { key: 'living', label: 'Living Room' },
    { key: 'dining', label: 'Dining Room' },
    { key: 'lighting', label: 'Lighting' },
    { key: 'office', label: 'Home Office' },
    { key: 'signature', label: 'Signature Only' },
    { key: 'new', label: 'New Arrivals' },
  ];

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Category / Special filter
    if (activeFilter === 'signature') {
      result = result.filter((p) => p.isSignature);
    } else if (activeFilter === 'new') {
      result = result.filter((p) => p.isNew);
    } else if (activeFilter !== 'all') {
      result = result.filter((p) => p.category === activeFilter);
    }

    // Price filter
    if (selectedPriceFilter === 'under-500') {
      result = result.filter((p) => p.price < 500);
    } else if (selectedPriceFilter === '500-1000') {
      result = result.filter((p) => p.price >= 500 && p.price <= 1000);
    } else if (selectedPriceFilter === 'over-1000') {
      result = result.filter((p) => p.price > 1000);
    }

    // Sorting
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [activeFilter, selectedPriceFilter, sortBy]);

  const handleResetFilters = () => {
    setActiveFilter('all');
    setSelectedPriceFilter('all');
    setSortBy('featured');
  };

  return (
    <section id="shop" className="py-20 lg:py-28 bg-[#F7F4EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8A6247] block mb-2">
              CURATED COLLECTION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#24211E] font-normal tracking-tight">
              Furniture for Calm & Mindful Living
            </h2>
            <p className="text-sm text-[#6E6861] font-light mt-1">
              Solid hardwoods, Belgian flax linens, and hand-rubbed wax finishes.
            </p>
          </div>

          {/* Controls: Price Range Filter & Sort */}
          <div className="flex flex-wrap items-center gap-3 self-start md:self-end">
            {/* Price filter dropdown */}
            <div className="flex items-center gap-1.5 text-xs text-[#6E6861]">
              <Filter className="w-3.5 h-3.5 text-[#8A6247]" />
              <select
                value={selectedPriceFilter}
                onChange={(e) => setSelectedPriceFilter(e.target.value as any)}
                className="bg-white border border-[#EFE9E1] text-[#24211E] text-xs py-2 px-3 rounded-2xs focus:outline-none focus:border-[#8A6247] cursor-pointer"
                aria-label="Filter by price"
              >
                <option value="all">All Prices</option>
                <option value="under-500">Under $500</option>
                <option value="500-1000">$500 – $1,000</option>
                <option value="over-1000">Over $1,000</option>
              </select>
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-1.5 text-xs text-[#6E6861]">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#8A6247]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white border border-[#EFE9E1] text-[#24211E] text-xs py-2 px-3 rounded-2xs focus:outline-none focus:border-[#8A6247] cursor-pointer"
                aria-label="Sort products"
              >
                <option value="featured">Featured First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {(activeFilter !== 'all' || selectedPriceFilter !== 'all') && (
              <button
                onClick={handleResetFilters}
                className="text-xs uppercase tracking-wider text-[#8A6247] hover:text-[#24211E] flex items-center gap-1 font-medium cursor-pointer ml-1"
              >
                <X className="w-3.5 h-3.5" /> Reset
              </button>
            )}
          </div>
        </div>

        {/* Filter Navigation Tabs (Zero-pill, clean segmented control buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-[#EFE9E1] scrollbar-none">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.14em] font-medium transition-all whitespace-nowrap cursor-pointer rounded-xs ${
                  isActive
                    ? 'bg-[#24211E] text-white shadow-2xs'
                    : 'text-[#6E6861] hover:text-[#24211E] hover:bg-[#EFE9E1]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Product Grid: 4 columns on large screens, 2 on mobile */}
        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredAndSortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center bg-white rounded-xs border border-[#EFE9E1] p-8">
            <SlidersHorizontal className="w-8 h-8 text-[#8A6247] mx-auto mb-3" />
            <h3 className="font-serif text-xl text-[#24211E] mb-2">No pieces found matching criteria</h3>
            <p className="text-xs text-[#6E6861] mb-6">
              Try adjusting your price range or switching back to view all pieces.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-6 py-2.5 bg-[#24211E] text-white text-xs uppercase tracking-wider font-medium cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Bottom Catalog Note */}
        <div className="mt-14 pt-8 border-t border-[#EFE9E1] flex flex-col sm:flex-row items-center justify-between text-xs text-[#6E6861]">
          <span>Showing {filteredAndSortedProducts.length} curated designs</span>
          <span className="mt-2 sm:mt-0 font-medium text-[#8A6247]">
            Complimentary White Glove Delivery on qualifying orders
          </span>
        </div>

      </div>
    </section>
  );
};
