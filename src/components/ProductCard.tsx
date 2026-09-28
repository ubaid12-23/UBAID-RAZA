import React from 'react';
import { Heart, Plus, Star } from 'lucide-react';
import { Product } from '../data/products';
import { useShop } from '../context/ShopContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { wishlist, toggleWishlist, addToCart, setSelectedProduct } = useShop();
  const isWishlisted = wishlist.includes(product.id);

  const handleCardClick = (e: React.MouseEvent) => {
    // If target was not an interactive button, open detail modal
    setSelectedProduct(product);
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1, product.colors[0]?.name);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group relative flex flex-col bg-white rounded-xs border border-[#EFE9E1] overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer"
    >
      {/* Top Image Showcase */}
      <div className="relative aspect-4/3 sm:aspect-square overflow-hidden bg-[#F7F4EF]">
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Status indicator / tag */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
          {product.isNew && (
            <span className="text-[10px] tracking-widest uppercase font-semibold text-[#8A6247] bg-[#F7F4EF]/90 backdrop-blur-xs px-2 py-0.5 rounded-2xs border border-[#EFE9E1]">
              New Design
            </span>
          )}
          {product.originalPrice && (
            <span className="text-[10px] tracking-widest uppercase font-semibold text-[#24211E] bg-[#DCC9B7]/90 backdrop-blur-xs px-2 py-0.5 rounded-2xs">
              Seasonal Save
            </span>
          )}
        </div>

        {/* Wishlist Heart Button */}
        <button
          onClick={handleWishlistClick}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all duration-200 z-10 cursor-pointer ${
            isWishlisted
              ? 'bg-[#8A6247] text-white shadow-xs'
              : 'bg-white/80 text-[#24211E] hover:bg-white hover:text-[#8A6247]'
          }`}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : 'stroke-[1.6]'}`} />
        </button>

        {/* Quick Add Overlay on Hover (Desktop) */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-all duration-200 hidden sm:block z-10">
          <button
            onClick={handleQuickAdd}
            className="w-full py-2.5 px-4 bg-[#24211E]/95 hover:bg-[#8A6247] text-white text-xs font-medium uppercase tracking-wider backdrop-blur-xs rounded-2xs flex items-center justify-center gap-1.5 shadow-md cursor-pointer transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Quick Add</span>
          </button>
        </div>
      </div>

      {/* Card Content & Pricing */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between bg-white">
        <div>
          {/* Unboxed Metadata (Zero-pill discipline) */}
          <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-[#6E6861] mb-1.5 font-medium">
            <span>{product.categoryLabel}</span>
            <div className="flex items-center gap-1 text-[#24211E]">
              <Star className="w-3 h-3 fill-[#8A6247] text-[#8A6247]" />
              <span className="tabular-nums font-semibold">{product.rating}</span>
            </div>
          </div>

          {/* Product Name */}
          <h3 className="font-serif text-lg text-[#24211E] font-medium leading-snug group-hover:text-[#8A6247] transition-colors mb-2">
            {product.name}
          </h3>

          <p className="text-xs text-[#6E6861] font-light line-clamp-2 mb-3">
            {product.shortDescription}
          </p>
        </div>

        {/* Bottom Info: Price & Swatches */}
        <div className="pt-3 border-t border-[#EFE9E1]/80 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-semibold text-[#24211E] tabular-nums">
              ${product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-[#6E6861] line-through tabular-nums">
                ${product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          {/* Color swatches */}
          <div className="flex items-center gap-1.5">
            {product.colors.map((color, idx) => (
              <span
                key={idx}
                title={color.name}
                className="w-3 h-3 rounded-full border border-black/10 inline-block"
                style={{ backgroundColor: color.hex }}
              />
            ))}
          </div>
        </div>

        {/* Mobile Quick Add Button */}
        <div className="mt-3 sm:hidden pt-2 border-t border-[#EFE9E1]">
          <button
            onClick={handleQuickAdd}
            className="w-full py-2 bg-[#24211E] text-white text-xs font-medium uppercase tracking-wider rounded-2xs flex items-center justify-center gap-1"
          >
            <Plus className="w-3.5 h-3.5" /> Quick Add
          </button>
        </div>
      </div>
    </div>
  );
};
