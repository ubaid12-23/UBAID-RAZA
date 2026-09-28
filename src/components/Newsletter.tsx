import React, { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please provide a valid email address');
      return;
    }
    setError('');
    setSubscribed(true);
  };

  return (
    <section className="py-20 bg-[#EFE9E1]/60 border-t border-[#EFE9E1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs uppercase tracking-[0.24em] text-[#8A6247] font-semibold block mb-3">
          FORMA JOURNAL & PRIVILEGES
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl text-[#24211E] font-normal mb-4">
          Inspired Living, Delivered
        </h2>

        <p className="text-base text-[#6E6861] font-light max-w-lg mx-auto mb-8">
          Get new collection announcements, interior inspiration, and exclusive offers delivered quietly to your inbox.
        </p>

        {subscribed ? (
          <div className="bg-[#F7F4EF] border border-[#DCC9B7] p-6 max-w-md mx-auto rounded-xs text-center animate-fadeIn">
            <CheckCircle2 className="w-8 h-8 text-[#8A6247] mx-auto mb-2" />
            <h4 className="font-serif text-xl text-[#24211E] font-medium mb-1">
              Welcome to the Inner Circle
            </h4>
            <p className="text-xs text-[#6E6861] mb-3">
              We've dispatched our inaugural interior journal to <strong className="text-[#24211E]">{email}</strong>.
            </p>
            <div className="inline-block bg-[#EFE9E1] px-3 py-1 rounded text-xs text-[#24211E] font-mono tracking-wider font-semibold">
              USE CODE: FORMA10 for 10% off your first order
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                placeholder="Your email address"
                className="flex-1 bg-white border border-[#DCC9B7] text-[#24211E] text-xs px-4 py-3.5 focus:outline-none focus:border-[#24211E] transition-colors rounded-xs"
                required
              />
              <button
                type="submit"
                className="px-8 py-3.5 bg-[#24211E] hover:bg-[#8A6247] text-white text-xs font-medium uppercase tracking-[0.16em] transition-colors cursor-pointer rounded-xs flex items-center justify-center gap-2"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            {error && <p className="text-xs text-red-600 mt-2 text-left">{error}</p>}
            <p className="text-[11px] text-[#6E6861] mt-3 font-light">
              We respect your tranquility. Unsubscribe at any time with a single click.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};
