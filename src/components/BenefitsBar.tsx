import React from 'react';
import { Truck, ShieldCheck, Sparkles, Headphones } from 'lucide-react';

export const BenefitsBar: React.FC = () => {
  const benefits = [
    {
      icon: Truck,
      title: 'Free Delivery',
      description: 'Complimentary delivery on qualifying orders',
    },
    {
      icon: ShieldCheck,
      title: 'Secure Checkout',
      description: 'Protected and reliable payments',
    },
    {
      icon: Sparkles,
      title: 'Premium Craftsmanship',
      description: 'Made with attention to every detail',
    },
    {
      icon: Headphones,
      title: 'Dedicated Support',
      description: 'Here whenever you need us',
    },
  ];

  return (
    <section className="bg-[#EFE9E1]/60 border-y border-[#EFE9E1] py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#DCC9B7]/40">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className={`flex flex-col items-center text-center p-3 sm:p-4 ${
                  index > 1 ? 'pt-6 lg:pt-4' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-[#F7F4EF] flex items-center justify-center text-[#8A6247] mb-3 shadow-2xs">
                  <Icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h4 className="font-serif text-base font-medium text-[#24211E] mb-1">
                  {benefit.title}
                </h4>
                <p className="text-xs text-[#6E6861] max-w-[200px] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
