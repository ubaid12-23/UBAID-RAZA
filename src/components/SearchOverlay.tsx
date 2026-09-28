import React, { useEffect, useRef } from 'react';
import { Search, X, ArrowRight, CornerDownLeft } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';

export const SearchOverlay: React.FC = () => {
  const {
    isSearchOpen,
    setIsSearchOpen,
    searchQuery,
    setSearchQuery,
    setSelectedProduct,
  } = useShop();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const quickSearches = ['Sofa', 'Dining Table', 'Lounge Chair', 'Walnut', 'Lighting', 'Travertine'];

  const filteredProducts = searchQuery.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.materials.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleSelectProduct = (product: any) => {
    setIsSearchOpen(false);
    setSelectedProduct(product);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#F7F4EF]/95 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        
        {/* Top Close Bar */}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setIsSearchOpen(false)}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#6E6861] hover:text-[#24211E] cursor-pointer"
          >
            <span>Close</span>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Big Editorial Search Bar */}
        <div className="relative border-b-2 border-[#24211E] pb-4 mb-8">
          <div className="flex items-center gap-4">
            <Search className="w-7 h-7 text-[#8A6247]" />
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search modern furniture, lighting, materials..."
              className="w-full bg-transparent font-serif text-2xl sm:text-4xl text-[#24211E] placeholder:text-[#DCC9B7] focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs uppercase text-[#6E6861] hover:text-[#24211E]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Quick Search Suggestions */}
        {!searchQuery.trim() && (
          <div>
            <div className="text-xs uppercase tracking-widest text-[#6E6861] font-semibold mb-4">
              Suggested Searches
            </div>
            <div className="flex flex-wrap gap-2">
              {quickSearches.map((term) => (
                <button
                  key={term}
                  onClick={() => setSearchQuery(term)}
                  className="px-4 py-2 bg-[#EFE9E1] hover:bg-[#DCC9B7] text-[#24211E] text-xs font-medium uppercase tracking-wider rounded-xs cursor-pointer transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-[#EFE9E1]">
              <div className="text-xs uppercase tracking-widest text-[#6E6861] font-semibold mb-4">
                Popular Design Collections
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {PRODUCTS.slice(0, 3).map((p) => (
                  <div
                    key={p.id}
                    onClick={() => handleSelectProduct(p)}
                    className="flex items-center gap-3 p-3 bg-white rounded-xs border border-[#EFE9E1] cursor-pointer hover:border-[#8A6247] transition-colors"
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-12 h-12 object-cover rounded-2xs"
                    />
                    <div>
                      <div className="font-serif text-sm font-medium text-[#24211E]">
                        {p.name}
                      </div>
                      <div className="text-xs text-[#8A6247] tabular-nums font-semibold">
                        ${p.price.toLocaleString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Search Results */}
        {searchQuery.trim() && (
          <div>
            <div className="flex items-center justify-between text-xs uppercase tracking-widest text-[#6E6861] font-semibold mb-6">
              <span>Results for "{searchQuery}"</span>
              <span>{filteredProducts.length} items found</span>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleSelectProduct(product)}
                    className="group bg-white rounded-xs border border-[#EFE9E1] overflow-hidden p-4 cursor-pointer hover:shadow-md transition-all"
                  >
                    <div className="aspect-4/3 overflow-hidden bg-[#F7F4EF] rounded-2xs mb-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-[#6E6861]">
                      {product.categoryLabel}
                    </div>
                    <h4 className="font-serif text-base font-medium text-[#24211E] group-hover:text-[#8A6247]">
                      {product.name}
                    </h4>
                    <div className="text-xs font-semibold text-[#24211E] tabular-nums mt-1">
                      ${product.price.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-xs border border-[#EFE9E1] p-8">
                <p className="font-serif text-xl text-[#24211E] mb-2">No matching pieces</p>
                <p className="text-xs text-[#6E6861] max-w-sm mx-auto mb-6">
                  We couldn't find anything matching "{searchQuery}". Try searching for categories like "sofa", "table", or "walnut".
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-6 py-2.5 bg-[#24211E] text-white text-xs uppercase tracking-wider font-medium cursor-pointer"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
