import React from 'react';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';

export const WishlistDrawer: React.FC = () => {
  const {
    wishlist,
    toggleWishlist,
    addToCart,
    isWishlistOpen,
    setIsWishlistOpen,
    setSelectedProduct,
  } = useShop();

  if (!isWishlistOpen) return null;

  const wishlistedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div
        onClick={() => setIsWishlistOpen(false)}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F7F4EF] flex flex-col shadow-2xl border-l border-[#EFE9E1]">
          
          {/* Header */}
          <div className="p-6 border-b border-[#EFE9E1] flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#8A6247] fill-current" />
              <h2 className="font-serif text-xl font-medium text-[#24211E]">
                Saved Favorites
              </h2>
              <span className="text-xs text-[#6E6861] font-mono">({wishlistedProducts.length})</span>
            </div>
            <button
              onClick={() => setIsWishlistOpen(false)}
              className="p-1 text-[#6E6861] hover:text-[#24211E] transition-colors cursor-pointer"
              aria-label="Close wishlist"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {wishlistedProducts.length === 0 ? (
              <div className="text-center py-20">
                <Heart className="w-12 h-12 text-[#DCC9B7] mx-auto mb-4 stroke-[1.2]" />
                <h3 className="font-serif text-xl text-[#24211E] mb-2">No saved pieces</h3>
                <p className="text-xs text-[#6E6861] mb-6">
                  Save pieces you love by tapping the heart icon on any product.
                </p>
                <button
                  onClick={() => setIsWishlistOpen(false)}
                  className="px-6 py-3 bg-[#24211E] text-white text-xs uppercase tracking-wider font-medium cursor-pointer rounded-xs"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              wishlistedProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-4 p-4 bg-white rounded-xs border border-[#EFE9E1] shadow-2xs"
                >
                  <div
                    onClick={() => {
                      setIsWishlistOpen(false);
                      setSelectedProduct(product);
                    }}
                    className="w-20 h-20 bg-[#F7F4EF] rounded-2xs overflow-hidden shrink-0 cursor-pointer"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4
                          onClick={() => {
                            setIsWishlistOpen(false);
                            setSelectedProduct(product);
                          }}
                          className="font-serif text-sm font-medium text-[#24211E] hover:text-[#8A6247] cursor-pointer"
                        >
                          {product.name}
                        </h4>
                        <button
                          onClick={() => toggleWishlist(product.id)}
                          className="text-[#6E6861] hover:text-red-600 transition-colors p-0.5 cursor-pointer"
                          aria-label="Remove from wishlist"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="text-xs font-semibold text-[#24211E] tabular-nums mt-1">
                        ${product.price.toLocaleString()}
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => {
                          addToCart(product, 1, product.colors[0]?.name);
                        }}
                        className="w-full py-2 bg-[#24211E] hover:bg-[#8A6247] text-white text-[11px] font-medium uppercase tracking-wider rounded-2xs flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>Move to Bag</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {wishlistedProducts.length > 0 && (
            <div className="p-6 border-t border-[#EFE9E1] bg-white">
              <button
                onClick={() => {
                  wishlistedProducts.forEach((p) => addToCart(p, 1, p.colors[0]?.name));
                }}
                className="w-full py-3.5 bg-[#EFE9E1] hover:bg-[#DCC9B7] text-[#24211E] text-xs font-medium uppercase tracking-[0.16em] rounded-xs flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <span>Add All to Shopping Bag</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
