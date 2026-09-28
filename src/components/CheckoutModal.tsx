import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Truck, CreditCard, ArrowRight, Printer } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const CheckoutModal: React.FC = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    cartSubtotal,
    clearCart,
  } = useShop();

  const [step, setStep] = useState<'details' | 'confirmation'>('details');
  const [formData, setFormData] = useState({
    firstName: 'Eleanor',
    lastName: 'Vance',
    email: 'eleanor.vance@example.com',
    phone: '+1 (503) 555-0192',
    address: '842 NW 13th Avenue, Apt 4B',
    city: 'Portland',
    state: 'OR',
    zip: '97209',
    deliveryMethod: 'white-glove',
    paymentMethod: 'card',
  });

  const [orderNumber, setOrderNumber] = useState('');

  if (!isCheckoutOpen) return null;

  const deliveryCost = formData.deliveryMethod === 'express' ? 180 : 0;
  const grandTotal = cartSubtotal + deliveryCost;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedOrderNum = `RZI-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderNumber(generatedOrderNum);
    setStep('confirmation');
  };

  const handleFinishAndReturn = () => {
    clearCart();
    setIsCheckoutOpen(false);
    setStep('details');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 lg:p-6 animate-fadeIn">
      <div className="bg-[#F7F4EF] w-full max-w-3xl rounded-xs border border-[#EFE9E1] shadow-2xl relative overflow-hidden my-auto max-h-[95vh] flex flex-col">
        
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-[#EFE9E1] flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center gap-3">
            <span className="font-serif text-lg font-medium tracking-[0.16em] uppercase text-[#24211E]">
              RAZA INTERIOR
            </span>
            <span className="text-xs text-[#6E6861] uppercase tracking-wider">
              · {step === 'details' ? 'White Glove Checkout' : 'Order Confirmed'}
            </span>
          </div>
          {step === 'details' && (
            <button
              onClick={() => setIsCheckoutOpen(false)}
              className="p-1.5 text-[#6E6861] hover:text-[#24211E] rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {step === 'details' ? (
            <form onSubmit={handleSubmitOrder} className="space-y-8">
              
              {/* Shipping Address */}
              <div>
                <h3 className="font-serif text-lg font-medium text-[#24211E] mb-4 flex items-center gap-2">
                  <span>1. Delivery Destination</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-[#6E6861] uppercase tracking-wider font-medium mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full bg-white border border-[#DCC9B7] px-3.5 py-2.5 rounded-2xs focus:outline-none focus:border-[#24211E]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#6E6861] uppercase tracking-wider font-medium mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full bg-white border border-[#DCC9B7] px-3.5 py-2.5 rounded-2xs focus:outline-none focus:border-[#24211E]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#6E6861] uppercase tracking-wider font-medium mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-[#DCC9B7] px-3.5 py-2.5 rounded-2xs focus:outline-none focus:border-[#24211E]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#6E6861] uppercase tracking-wider font-medium mb-1">
                      Phone Number (for delivery appointment)
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-[#DCC9B7] px-3.5 py-2.5 rounded-2xs focus:outline-none focus:border-[#24211E]"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[#6E6861] uppercase tracking-wider font-medium mb-1">
                      Street Address
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-white border border-[#DCC9B7] px-3.5 py-2.5 rounded-2xs focus:outline-none focus:border-[#24211E]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#6E6861] uppercase tracking-wider font-medium mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-white border border-[#DCC9B7] px-3.5 py-2.5 rounded-2xs focus:outline-none focus:border-[#24211E]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[#6E6861] uppercase tracking-wider font-medium mb-1">
                        State
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className="w-full bg-white border border-[#DCC9B7] px-3.5 py-2.5 rounded-2xs focus:outline-none focus:border-[#24211E]"
                      />
                    </div>
                    <div>
                      <label className="block text-[#6E6861] uppercase tracking-wider font-medium mb-1">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.zip}
                        onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                        className="w-full bg-white border border-[#DCC9B7] px-3.5 py-2.5 rounded-2xs focus:outline-none focus:border-[#24211E]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery Service Tier */}
              <div className="pt-6 border-t border-[#EFE9E1]">
                <h3 className="font-serif text-lg font-medium text-[#24211E] mb-4">
                  2. Delivery & Assembly
                </h3>
                <div className="space-y-3">
                  <label className="flex items-start gap-3 p-4 bg-white border border-[#DCC9B7] rounded-xs cursor-pointer">
                    <input
                      type="radio"
                      name="deliveryMethod"
                      value="white-glove"
                      checked={formData.deliveryMethod === 'white-glove'}
                      onChange={() => setFormData({ ...formData, deliveryMethod: 'white-glove' })}
                      className="mt-1 accent-[#8A6247]"
                    />
                    <div className="flex-1 text-xs">
                      <div className="flex justify-between font-semibold text-[#24211E]">
                        <span>Complimentary White Glove Delivery</span>
                        <span className="text-emerald-700">Free</span>
                      </div>
                      <p className="text-[#6E6861] mt-0.5">
                        Scheduled appointment, in-room placement, unboxing, and full debris recycling.
                      </p>
                    </div>
                  </label>

                  <label className="flex items-start gap-3 p-4 bg-white border border-[#DCC9B7] rounded-xs cursor-pointer">
                    <input
                      type="radio"
                      name="deliveryMethod"
                      value="express"
                      checked={formData.deliveryMethod === 'express'}
                      onChange={() => setFormData({ ...formData, deliveryMethod: 'express' })}
                      className="mt-1 accent-[#8A6247]"
                    />
                    <div className="flex-1 text-xs">
                      <div className="flex justify-between font-semibold text-[#24211E]">
                        <span>Expedited Atelier Courier</span>
                        <span className="tabular-nums font-mono">$180</span>
                      </div>
                      <p className="text-[#6E6861] mt-0.5">
                        Guaranteed priority dispatch within 48 hours + dedicated transport specialist.
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Payment Method */}
              <div className="pt-6 border-t border-[#EFE9E1]">
                <h3 className="font-serif text-lg font-medium text-[#24211E] mb-4">
                  3. Payment Method
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                    className={`p-4 border rounded-xs text-left cursor-pointer transition-all ${
                      formData.paymentMethod === 'card'
                        ? 'bg-white border-[#24211E] shadow-2xs'
                        : 'bg-[#F7F4EF] border-[#DCC9B7]'
                    }`}
                  >
                    <CreditCard className="w-5 h-5 text-[#8A6247] mb-2" />
                    <div className="font-semibold text-[#24211E]">Credit / Debit Card</div>
                    <div className="text-[11px] text-[#6E6861]">Visa, Mastercard, Amex</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'apple' })}
                    className={`p-4 border rounded-xs text-left cursor-pointer transition-all ${
                      formData.paymentMethod === 'apple'
                        ? 'bg-white border-[#24211E] shadow-2xs'
                        : 'bg-[#F7F4EF] border-[#DCC9B7]'
                    }`}
                  >
                    <div className="font-serif text-base font-semibold text-[#24211E] mb-1">Pay</div>
                    <div className="font-semibold text-[#24211E]">Apple Pay</div>
                    <div className="text-[11px] text-[#6E6861]">Instant biometric checkout</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'delivery' })}
                    className={`p-4 border rounded-xs text-left cursor-pointer transition-all ${
                      formData.paymentMethod === 'delivery'
                        ? 'bg-white border-[#24211E] shadow-2xs'
                        : 'bg-[#F7F4EF] border-[#DCC9B7]'
                    }`}
                  >
                    <Truck className="w-5 h-5 text-[#8A6247] mb-2" />
                    <div className="font-semibold text-[#24211E]">Pay on Inspection</div>
                    <div className="text-[11px] text-[#6E6861]">Inspect at delivery before release</div>
                  </button>
                </div>
              </div>

              {/* Order Total & Submit */}
              <div className="pt-6 border-t border-[#EFE9E1] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#6E6861]">
                  <div>Total Due: <strong className="font-serif text-xl text-[#24211E] ml-1 tabular-nums">${grandTotal.toLocaleString()}</strong></div>
                  <span>Includes all sales tax & White Glove placement</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-[#24211E] hover:bg-[#8A6247] text-white text-xs font-medium uppercase tracking-[0.18em] rounded-xs flex items-center justify-center gap-2 shadow-md cursor-pointer transition-colors"
                >
                  <span>Place Reservation Order</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          ) : (
            /* Order Confirmation View */
            <div className="py-8 text-center space-y-6 animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-9 h-9 stroke-[1.7]" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8A6247] block mb-2">
                  ORDER CONFIRMED
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#24211E] font-normal mb-2">
                  Thank You, {formData.firstName}
                </h2>
                <p className="text-sm text-[#6E6861] max-w-md mx-auto">
                  Order <strong className="font-mono text-[#24211E]">{orderNumber}</strong> has been received by our Portland atelier. A formal receipt and delivery coordinator contact will arrive at <span className="text-[#24211E] font-medium">{formData.email}</span>.
                </p>
              </div>

              {/* Receipt Box */}
              <div className="bg-white p-6 rounded-xs border border-[#EFE9E1] text-left text-xs max-w-lg mx-auto shadow-2xs">
                <div className="flex justify-between border-b border-[#EFE9E1] pb-3 mb-3">
                  <span className="text-[#6E6861]">Delivery Address:</span>
                  <span className="font-medium text-[#24211E] text-right">
                    {formData.address}, {formData.city}, {formData.state} {formData.zip}
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#EFE9E1] pb-3 mb-3">
                  <span className="text-[#6E6861]">Service Level:</span>
                  <span className="font-medium text-[#24211E]">
                    {formData.deliveryMethod === 'express' ? 'Expedited Atelier Courier' : 'Complimentary White Glove'}
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#EFE9E1] pb-3 mb-3">
                  <span className="text-[#6E6861]">Items Reserved:</span>
                  <span className="font-medium text-[#24211E]">
                    {cart.map((i) => `${i.product.name} (${i.selectedColor}) × ${i.quantity}`).join(', ')}
                  </span>
                </div>
                <div className="flex justify-between pt-1 font-serif text-base font-semibold text-[#24211E]">
                  <span>Total Amount Paid:</span>
                  <span className="tabular-nums">${grandTotal.toLocaleString()}</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => window.print()}
                  className="px-6 py-3 border border-[#DCC9B7] bg-white text-[#24211E] text-xs font-medium uppercase tracking-wider rounded-xs flex items-center gap-2 cursor-pointer hover:bg-[#EFE9E1]"
                >
                  <Printer className="w-4 h-4" /> Print Confirmation
                </button>
                <button
                  onClick={handleFinishAndReturn}
                  className="px-8 py-3 bg-[#24211E] hover:bg-[#8A6247] text-white text-xs font-medium uppercase tracking-wider rounded-xs cursor-pointer transition-colors"
                >
                  Return to Storefront
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
