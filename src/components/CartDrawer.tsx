import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    cartCount,
    cartSubtotal,
    isCartOpen,
    setIsCartOpen,
    setIsCheckoutOpen,
  } = useShop();

  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');

  if (!isCartOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 1500;
  const progressPercent = Math.min(100, Math.round((cartSubtotal / FREE_SHIPPING_THRESHOLD) * 100));
  const amountToFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - cartSubtotal);

  const discountAmount = promoApplied ? Math.round(cartSubtotal * 0.1) : 0;
  const finalTotal = cartSubtotal - discountAmount;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'FORMA10') {
      setPromoApplied(true);
      setPromoError('');
    } else {
      setPromoError('Invalid promo code. Try "FORMA10"');
    }
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
      />

      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F7F4EF] flex flex-col shadow-2xl border-l border-[#EFE9E1]">
          
          {/* Header */}
          <div className="p-6 border-b border-[#EFE9E1] flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#8A6247]" />
              <h2 className="font-serif text-xl font-medium text-[#24211E]">
                Shopping Bag
              </h2>
              <span className="text-xs text-[#6E6861] font-mono">({cartCount})</span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1 text-[#6E6861] hover:text-[#24211E] transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-[#EFE9E1]/70 px-6 py-3 border-b border-[#EFE9E1] text-xs">
            {amountToFreeShipping > 0 ? (
              <p className="text-[#6E6861]">
                Add <strong className="text-[#24211E] tabular-nums">${amountToFreeShipping.toLocaleString()}</strong> more for Complimentary White Glove Delivery
              </p>
            ) : (
              <p className="text-[#8A6247] font-medium flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> You've unlocked Complimentary White Glove Delivery!
              </p>
            )}
            <div className="w-full h-1.5 bg-[#DCC9B7]/50 rounded-full mt-2 overflow-hidden">
              <div
                className="h-full bg-[#8A6247] transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="text-center py-20">
                <ShoppingBag className="w-12 h-12 text-[#DCC9B7] mx-auto mb-4" />
                <h3 className="font-serif text-xl text-[#24211E] mb-2">Your bag is empty</h3>
                <p className="text-xs text-[#6E6861] mb-6">
                  Explore our modern furniture collections to find timeless pieces for your home.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-3 bg-[#24211E] text-white text-xs uppercase tracking-wider font-medium cursor-pointer rounded-xs"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedColor}`}
                  className="flex gap-4 p-4 bg-white rounded-xs border border-[#EFE9E1] shadow-2xs"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-20 bg-[#F7F4EF] rounded-2xs overflow-hidden shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif text-sm font-medium text-[#24211E]">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.selectedColor)}
                          className="text-[#6E6861] hover:text-red-600 transition-colors p-0.5 cursor-pointer"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="text-[11px] text-[#8A6247] font-medium mt-0.5">
                        Finish: {item.selectedColor}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-[#EFE9E1] rounded-2xs bg-[#F7F4EF]">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedColor, item.quantity - 1)}
                          className="p-1.5 text-[#6E6861] hover:text-[#24211E] cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-medium text-[#24211E] tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedColor, item.quantity + 1)}
                          className="p-1.5 text-[#6E6861] hover:text-[#24211E] cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Line Item Total */}
                      <div className="text-xs font-semibold text-[#24211E] tabular-nums">
                        ${(item.product.price * item.quantity).toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Area */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-[#EFE9E1] bg-white space-y-4">
              {/* Promo code field */}
              {!promoApplied ? (
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Promo code (e.g. FORMA10)"
                      className="w-full bg-[#F7F4EF] border border-[#DCC9B7] text-xs px-3 py-2 uppercase rounded-2xs focus:outline-none focus:border-[#24211E]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#EFE9E1] hover:bg-[#DCC9B7] text-[#24211E] text-xs font-medium uppercase tracking-wider rounded-2xs cursor-pointer transition-colors"
                  >
                    Apply
                  </button>
                </form>
              ) : (
                <div className="flex items-center justify-between text-xs bg-emerald-50 text-emerald-800 p-2.5 rounded-2xs border border-emerald-200">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Tag className="w-3.5 h-3.5" /> FORMA10 applied (10% Off)
                  </span>
                  <button
                    onClick={() => {
                      setPromoApplied(false);
                      setPromoCode('');
                    }}
                    className="text-emerald-700 underline text-[11px] cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              )}
              {promoError && <p className="text-[11px] text-red-600">{promoError}</p>}

              {/* Price Calculations */}
              <div className="space-y-1.5 text-xs text-[#6E6861] pt-2 border-t border-[#EFE9E1]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-[#24211E] font-medium tabular-nums">
                    ${cartSubtotal.toLocaleString()}
                  </span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Inaugural Privileges (10%)</span>
                    <span className="font-medium tabular-nums">-${discountAmount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>White Glove Delivery</span>
                  <span className="text-[#24211E] font-medium">
                    {cartSubtotal >= FREE_SHIPPING_THRESHOLD ? 'Complimentary' : '$120'}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-semibold text-[#24211E] pt-2 border-t border-[#EFE9E1]">
                  <span>Estimated Total</span>
                  <span className="tabular-nums">
                    ${(finalTotal + (cartSubtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 120)).toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleProceedToCheckout}
                className="w-full py-4 bg-[#24211E] hover:bg-[#8A6247] text-white text-xs font-medium uppercase tracking-[0.18em] rounded-xs flex items-center justify-center gap-2 shadow-md cursor-pointer transition-colors"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
