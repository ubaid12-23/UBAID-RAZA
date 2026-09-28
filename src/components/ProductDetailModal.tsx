import React, { useState } from 'react';
import {
  X,
  Star,
  Heart,
  ShoppingBag,
  Truck,
  RotateCcw,
  ShieldCheck,
  ChevronDown,
  Plus,
  Minus,
  Check,
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS, Product } from '../data/products';

export const ProductDetailModal: React.FC = () => {
  const {
    selectedProduct,
    setSelectedProduct,
    addToCart,
    wishlist,
    toggleWishlist,
  } = useShop();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState<string | null>('materials');

  if (!selectedProduct) return null;

  // Active color default
  const currentColor = selectedColor || selectedProduct.colors[0]?.name || 'Standard';
  const isWishlisted = wishlist.includes(selectedProduct.id);

  const images = [
    selectedProduct.image,
    selectedProduct.secondaryImage || selectedProduct.image,
  ];

  const handleAddToCart = () => {
    addToCart(selectedProduct, quantity, currentColor);
    setSelectedProduct(null);
  };

  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== selectedProduct.id && (p.category === selectedProduct.category || p.isSignature)
  ).slice(0, 3);

  const toggleAccordionSection = (key: string) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 lg:p-6 animate-fadeIn">
      <div className="bg-[#F7F4EF] w-full max-w-5xl rounded-xs border border-[#EFE9E1] shadow-2xl relative overflow-hidden my-auto max-h-[95vh] flex flex-col">
        
        {/* Sticky Header Close */}
        <div className="p-4 sm:p-5 border-b border-[#EFE9E1] flex items-center justify-between bg-white shrink-0">
          <div className="text-xs uppercase tracking-widest text-[#8A6247] font-semibold">
            {selectedProduct.categoryLabel} Edition
          </div>
          <button
            onClick={() => setSelectedProduct(null)}
            className="p-1.5 text-[#6E6861] hover:text-[#24211E] rounded-full hover:bg-[#EFE9E1] transition-colors cursor-pointer"
            aria-label="Close product view"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto flex-1 p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Gallery Column (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              {/* Main Image */}
              <div className="aspect-4/3 rounded-xs overflow-hidden bg-white border border-[#EFE9E1] shadow-2xs">
                <img
                  src={images[activeImageIndex]}
                  alt={selectedProduct.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-20 h-20 rounded-2xs overflow-hidden border-2 cursor-pointer transition-all ${
                      activeImageIndex === idx
                        ? 'border-[#24211E] opacity-100 shadow-xs'
                        : 'border-[#EFE9E1] opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`View ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Purchase & Information Column (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                {/* Rating & Reviews */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center text-[#8A6247]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-[#24211E] font-medium tabular-nums">
                    {selectedProduct.rating}
                  </span>
                  <span className="text-xs text-[#6E6861]">
                    ({selectedProduct.reviewCount} customer reviews)
                  </span>
                </div>

                {/* Title */}
                <h1 className="font-serif text-2xl sm:text-3xl font-medium text-[#24211E] mb-2 leading-snug">
                  {selectedProduct.name}
                </h1>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="font-serif text-2xl font-semibold text-[#24211E] tabular-nums">
                    ${selectedProduct.price.toLocaleString()}
                  </span>
                  {selectedProduct.originalPrice && (
                    <span className="text-sm text-[#6E6861] line-through tabular-nums">
                      ${selectedProduct.originalPrice.toLocaleString()}
                    </span>
                  )}
                  <span className="text-xs text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-medium">
                    In Stock
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#6E6861] font-light leading-relaxed mb-6">
                  {selectedProduct.description}
                </p>

                {/* Color Finishes Swatch Selector */}
                <div className="mb-6">
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#24211E] block mb-2.5">
                    Finish / Upholstery: <span className="text-[#8A6247] font-normal">{currentColor}</span>
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {selectedProduct.colors.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColor(c.name)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-xs border text-xs cursor-pointer transition-all ${
                          currentColor === c.name
                            ? 'border-[#24211E] bg-white text-[#24211E] shadow-2xs'
                            : 'border-[#DCC9B7] bg-[#F7F4EF] text-[#6E6861] hover:border-[#24211E]'
                        }`}
                      >
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-black/10 shrink-0"
                          style={{ backgroundColor: c.hex }}
                        />
                        <span>{c.name}</span>
                        {currentColor === c.name && <Check className="w-3 h-3 text-[#24211E]" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity & CTA */}
                <div className="flex items-center gap-3 mb-6">
                  {/* Quantity Stepper */}
                  <div className="flex items-center border border-[#DCC9B7] rounded-xs bg-white">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 text-[#6E6861] hover:text-[#24211E] cursor-pointer"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 text-xs font-semibold text-[#24211E] tabular-nums">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 text-[#6E6861] hover:text-[#24211E] cursor-pointer"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Add to Cart */}
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 py-3.5 px-6 bg-[#24211E] hover:bg-[#8A6247] text-white text-xs font-medium uppercase tracking-[0.16em] rounded-xs flex items-center justify-center gap-2 shadow-md cursor-pointer transition-colors"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Bag — ${(selectedProduct.price * quantity).toLocaleString()}</span>
                  </button>

                  {/* Wishlist */}
                  <button
                    onClick={() => toggleWishlist(selectedProduct.id)}
                    className={`p-3.5 rounded-xs border transition-colors cursor-pointer ${
                      isWishlisted
                        ? 'border-[#8A6247] bg-[#8A6247] text-white'
                        : 'border-[#DCC9B7] bg-white text-[#24211E] hover:border-[#24211E]'
                    }`}
                    aria-label="Wishlist toggle"
                  >
                    <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                  </button>
                </div>

                {/* Lead time notice */}
                <div className="text-xs text-[#8A6247] font-medium flex items-center gap-1.5 mb-6">
                  <Truck className="w-4 h-4" />
                  <span>{selectedProduct.leadTime}</span>
                </div>
              </div>

              {/* Accordions: Specifications, Delivery, Care */}
              <div className="border-t border-[#EFE9E1] divide-y divide-[#EFE9E1] text-xs">
                
                {/* Materials & Dimensions */}
                <div className="py-3">
                  <button
                    onClick={() => toggleAccordionSection('materials')}
                    className="w-full flex items-center justify-between font-semibold uppercase tracking-wider text-[#24211E] cursor-pointer text-left"
                  >
                    <span>Materials & Dimensions</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openAccordion === 'materials' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openAccordion === 'materials' && (
                    <div className="mt-2.5 space-y-2 text-[#6E6861] font-light leading-relaxed animate-fadeIn">
                      <p>
                        <strong className="font-medium text-[#24211E]">Dimensions:</strong>{' '}
                        {selectedProduct.dimensions}
                      </p>
                      <p>
                        <strong className="font-medium text-[#24211E]">Materials:</strong>{' '}
                        {selectedProduct.materials}
                      </p>
                    </div>
                  )}
                </div>

                {/* Care Guide */}
                <div className="py-3">
                  <button
                    onClick={() => toggleAccordionSection('care')}
                    className="w-full flex items-center justify-between font-semibold uppercase tracking-wider text-[#24211E] cursor-pointer text-left"
                  >
                    <span>Care & Longevity</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openAccordion === 'care' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openAccordion === 'care' && (
                    <div className="mt-2.5 text-[#6E6861] font-light leading-relaxed animate-fadeIn">
                      <p>{selectedProduct.care}</p>
                    </div>
                  )}
                </div>

                {/* Delivery & Warranty */}
                <div className="py-3">
                  <button
                    onClick={() => toggleAccordionSection('delivery')}
                    className="w-full flex items-center justify-between font-semibold uppercase tracking-wider text-[#24211E] cursor-pointer text-left"
                  >
                    <span>White Glove Delivery & 10-Yr Guarantee</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openAccordion === 'delivery' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openAccordion === 'delivery' && (
                    <div className="mt-2.5 text-[#6E6861] font-light leading-relaxed space-y-1.5 animate-fadeIn">
                      <p>• Room of choice placement & package debris removal included.</p>
                      <p>• 30-day home trial with simple return pickup service.</p>
                      <p>• 10-year structural integrity guarantee on all solid wood frames.</p>
                    </div>
                  )}
                </div>

              </div>

            </div>

          </div>

          {/* "You May Also Like" Related Products Strip */}
          <div className="mt-12 pt-8 border-t border-[#EFE9E1]">
            <h3 className="font-serif text-xl font-medium text-[#24211E] mb-6">
              You May Also Like
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => {
                    setSelectedProduct(rel);
                    setActiveImageIndex(0);
                  }}
                  className="flex items-center gap-3 p-3 bg-white rounded-xs border border-[#EFE9E1] cursor-pointer hover:border-[#8A6247] transition-all"
                >
                  <img
                    src={rel.image}
                    alt={rel.name}
                    className="w-16 h-16 object-cover rounded-2xs"
                  />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#6E6861]">
                      {rel.categoryLabel}
                    </span>
                    <h4 className="font-serif text-sm font-medium text-[#24211E] line-clamp-1">
                      {rel.name}
                    </h4>
                    <span className="text-xs font-semibold text-[#8A6247] tabular-nums">
                      ${rel.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
