import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Toast: React.FC = () => {
  const { toastMessage } = useShop();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fadeIn pointer-events-none">
      <div className="bg-[#24211E] text-white px-5 py-3 rounded-xs shadow-xl border border-[#3B3835] flex items-center gap-2.5 text-xs font-medium tracking-wide">
        <CheckCircle2 className="w-4 h-4 text-[#DCC9B7] shrink-0" />
        <span>{toastMessage}</span>
      </div>
    </div>
  );
};
