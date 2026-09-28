import React, { useState } from 'react';
import { X, User, Package, ShieldCheck, ArrowRight, LogIn } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const AccountModal: React.FC = () => {
  const { isAccountOpen, setIsAccountOpen, showToast } = useShop();
  const [tab, setTab] = useState<'signin' | 'track'>('signin');
  const [orderQuery, setOrderQuery] = useState('');
  const [orderResult, setOrderResult] = useState<string | null>(null);

  if (!isAccountOpen) return null;

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderQuery.trim()) return;
    setOrderResult(
      `Order #${orderQuery.toUpperCase()}: In Production at Baltic Oak Atelier. Scheduled for White Glove Delivery dispatch within 3 business days.`
    );
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Signed in to FORMA Member Concierge');
    setIsAccountOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-[#F7F4EF] w-full max-w-lg rounded-xs border border-[#EFE9E1] shadow-2xl relative overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-5 border-b border-[#EFE9E1] flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-[#8A6247]" />
            <h2 className="font-serif text-lg font-medium text-[#24211E]">
              Client Account & Orders
            </h2>
          </div>
          <button
            onClick={() => setIsAccountOpen(false)}
            className="p-1.5 text-[#6E6861] hover:text-[#24211E] rounded-full hover:bg-[#EFE9E1] transition-colors cursor-pointer"
            aria-label="Close account dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="grid grid-cols-2 border-b border-[#EFE9E1] bg-[#EFE9E1]/50 text-xs font-medium uppercase tracking-wider">
          <button
            onClick={() => setTab('signin')}
            className={`py-3 text-center cursor-pointer transition-colors ${
              tab === 'signin'
                ? 'bg-white text-[#24211E] border-b-2 border-[#24211E] font-semibold'
                : 'text-[#6E6861] hover:text-[#24211E]'
            }`}
          >
            Member Sign In
          </button>
          <button
            onClick={() => setTab('track')}
            className={`py-3 text-center cursor-pointer transition-colors ${
              tab === 'track'
                ? 'bg-white text-[#24211E] border-b-2 border-[#24211E] font-semibold'
                : 'text-[#6E6861] hover:text-[#24211E]'
            }`}
          >
            Track Order
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {tab === 'signin' ? (
            <form onSubmit={handleSignIn} className="space-y-4">
              <div className="text-center mb-6">
                <span className="text-xs uppercase tracking-widest text-[#8A6247] font-semibold block mb-1">
                  PRIVILEGES & TRADE
                </span>
                <h3 className="font-serif text-2xl text-[#24211E]">Welcome to FORMA</h3>
                <p className="text-xs text-[#6E6861] mt-1 font-light">
                  Access reserved interior design finishes, saved palettes, and order history.
                </p>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="block text-[#6E6861] uppercase tracking-wider font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    defaultValue="client@studio.com"
                    className="w-full bg-white border border-[#DCC9B7] px-3.5 py-2.5 rounded-2xs focus:outline-none focus:border-[#24211E]"
                  />
                </div>
                <div>
                  <label className="block text-[#6E6861] uppercase tracking-wider font-medium mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    defaultValue="••••••••••••"
                    className="w-full bg-white border border-[#DCC9B7] px-3.5 py-2.5 rounded-2xs focus:outline-none focus:border-[#24211E]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#24211E] hover:bg-[#8A6247] text-white text-xs font-medium uppercase tracking-[0.16em] rounded-xs flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-xs"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Sign In</span>
                </button>
              </div>

              <div className="pt-4 border-t border-[#EFE9E1] text-center text-xs text-[#6E6861]">
                <span>Are you a registered Architect or Interior Designer? </span>
                <span className="text-[#8A6247] font-medium underline cursor-pointer">
                  Join Trade Program
                </span>
              </div>
            </form>
          ) : (
            <form onSubmit={handleTrackOrder} className="space-y-4">
              <div className="text-center mb-6">
                <Package className="w-8 h-8 text-[#8A6247] mx-auto mb-2" />
                <h3 className="font-serif text-2xl text-[#24211E]">Track Your Delivery</h3>
                <p className="text-xs text-[#6E6861] mt-1 font-light">
                  Enter your order reservation number (e.g., FRM-8291) to view status.
                </p>
              </div>

              <div className="text-xs">
                <label className="block text-[#6E6861] uppercase tracking-wider font-medium mb-1">
                  Order Number
                </label>
                <input
                  type="text"
                  required
                  value={orderQuery}
                  onChange={(e) => setOrderQuery(e.target.value)}
                  placeholder="FRM-8291"
                  className="w-full bg-white border border-[#DCC9B7] px-3.5 py-2.5 rounded-2xs focus:outline-none focus:border-[#24211E] uppercase"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#24211E] hover:bg-[#8A6247] text-white text-xs font-medium uppercase tracking-[0.16em] rounded-xs flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <span>Track Status</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {orderResult && (
                <div className="mt-4 p-4 bg-white rounded-xs border border-emerald-200 text-xs text-[#24211E] animate-fadeIn flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">{orderResult}</p>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
