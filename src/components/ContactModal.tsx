import React, { useState } from 'react';
import { X, Mail, Phone, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const ContactModal: React.FC = () => {
  const { isContactOpen, setIsContactOpen } = useShop();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isContactOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please complete all required fields.');
      return;
    }
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setError('Please provide a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleClose = () => {
    setIsContactOpen(false);
    setSubmitted(false);
    setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-[#F7F4EF] w-full max-w-2xl rounded-xs border border-[#EFE9E1] shadow-2xl relative overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-5 border-b border-[#EFE9E1] flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="font-serif text-lg font-medium tracking-[0.2em] uppercase text-[#24211E]">
              FORMA
            </span>
            <span className="text-xs text-[#8A6247] uppercase tracking-wider font-semibold">
              · Concierge & Atelier
            </span>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 text-[#6E6861] hover:text-[#24211E] rounded-full hover:bg-[#EFE9E1] transition-colors cursor-pointer"
            aria-label="Close contact dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {submitted ? (
            <div className="py-12 text-center space-y-4 animate-fadeIn">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-8 h-8 stroke-[1.7]" />
              </div>
              <h3 className="font-serif text-2xl text-[#24211E] font-normal">
                Message Received
              </h3>
              <p className="text-sm text-[#6E6861] max-w-md mx-auto font-light leading-relaxed">
                Thank you, <strong className="text-[#24211E]">{formData.name}</strong>. A dedicated FORMA design consultant will review your inquiry and respond to{' '}
                <span className="text-[#24211E] font-medium">{formData.email}</span> within one business day.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleClose}
                  className="px-6 py-2.5 bg-[#24211E] hover:bg-[#8A6247] text-white text-xs font-medium uppercase tracking-wider rounded-xs cursor-pointer transition-colors"
                >
                  Return to Storefront
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8A6247] block mb-1">
                  GET IN TOUCH
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#24211E] font-normal">
                  Connect with Our Design Studio
                </h2>
                <p className="text-xs sm:text-sm text-[#6E6861] font-light mt-1">
                  Inquiries regarding custom commissions, trade partnerships, or product dimensions.
                </p>
              </div>

              {/* Direct Info Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 p-4 bg-white rounded-xs border border-[#EFE9E1] text-xs">
                <div className="flex items-center gap-2 text-[#6E6861]">
                  <Phone className="w-4 h-4 text-[#8A6247] shrink-0" />
                  <span>+1 (800) 367-6200</span>
                </div>
                <div className="flex items-center gap-2 text-[#6E6861]">
                  <Mail className="w-4 h-4 text-[#8A6247] shrink-0" />
                  <span>concierge@forma.com</span>
                </div>
                <div className="flex items-center gap-2 text-[#6E6861]">
                  <MapPin className="w-4 h-4 text-[#8A6247] shrink-0" />
                  <span>Portland, OR · Studio 4B</span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-[#6E6861] uppercase tracking-wider font-medium mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Julian Ross"
                      className="w-full bg-white border border-[#DCC9B7] px-3.5 py-2.5 rounded-2xs focus:outline-none focus:border-[#24211E]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#6E6861] uppercase tracking-wider font-medium mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="julian@studio.com"
                      className="w-full bg-white border border-[#DCC9B7] px-3.5 py-2.5 rounded-2xs focus:outline-none focus:border-[#24211E]"
                    />
                  </div>
                </div>

                <div className="text-xs">
                  <label className="block text-[#6E6861] uppercase tracking-wider font-medium mb-1">
                    Subject / Area of Interest
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-white border border-[#DCC9B7] px-3.5 py-2.5 rounded-2xs focus:outline-none focus:border-[#24211E] cursor-pointer"
                  >
                    <option value="General Inquiry">General Product Inquiry</option>
                    <option value="Trade & Interior Architects">Trade & Architect Program</option>
                    <option value="Custom Finishing">Bespoke Timber & Fabric Customization</option>
                    <option value="Delivery Concierge">White Glove Scheduling Assistance</option>
                  </select>
                </div>

                <div className="text-xs">
                  <label className="block text-[#6E6861] uppercase tracking-wider font-medium mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your room, floor plan, or project specifications..."
                    className="w-full bg-white border border-[#DCC9B7] p-3.5 rounded-2xs focus:outline-none focus:border-[#24211E] resize-none"
                  />
                </div>

                {error && <p className="text-xs text-red-600">{error}</p>}

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    className="px-8 py-3.5 bg-[#24211E] hover:bg-[#8A6247] text-white text-xs font-medium uppercase tracking-[0.16em] rounded-xs flex items-center gap-2 shadow-xs cursor-pointer transition-colors"
                  >
                    <span>Transmit Message</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
