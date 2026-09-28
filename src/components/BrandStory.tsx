import React, { useState } from 'react';
import { ArrowUpRight, Award, ShieldCheck, Leaf } from 'lucide-react';
import workshopImg from '../assets/images/craft_workshop_story_1790594652797.jpg';

export const BrandStory: React.FC = () => {
  const [showStoryModal, setShowStoryModal] = useState(false);

  return (
    <section id="story" className="py-20 lg:py-28 bg-[#EFE9E1]/40 border-t border-[#EFE9E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Workshop Atelier Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-sm overflow-hidden aspect-4/3 bg-[#EFE9E1] shadow-sm">
              <img
                src={workshopImg}
                alt="Woodworking atelier with craftsmen hand-shaping solid oak furniture"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 bg-[#F7F4EF]/90 backdrop-blur-xs px-3.5 py-2 rounded-2xs border border-[#EFE9E1] text-[11px] text-[#24211E]">
                <span className="font-medium">The FORMA Atelier</span> · Baltic Oak Studio
              </div>
            </div>
          </div>

          {/* Right Column: Story Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8A6247] block mb-3">
              OUR ATELIER
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#24211E] font-normal leading-[1.15] mb-6">
              Made for Beautiful Everyday Living
            </h2>

            <p className="text-base sm:text-lg text-[#6E6861] font-light leading-relaxed mb-6">
              From the materials we choose to the smallest finishing detail, every piece is created with a simple philosophy: furniture should feel as good as it looks.
            </p>

            <p className="text-sm text-[#6E6861] font-light leading-relaxed mb-8">
              Founded in 2026, FORMA brings together architectural discipline and organic tactility. We work directly with generational woodworkers and independent master weavers across Europe to craft furniture free of synthetic shortcuts and fleeting trends.
            </p>

            {/* Metrics & Quantitative rigor */}
            <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-[#DCC9B7]/50 text-[#24211E]">
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-medium tabular-nums text-[#8A6247]">
                  100%
                </div>
                <div className="text-xs text-[#6E6861] mt-1 font-light">
                  FSC-Certified Hardwoods
                </div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-medium tabular-nums text-[#8A6247]">
                  10-Yr
                </div>
                <div className="text-xs text-[#6E6861] mt-1 font-light">
                  Structural Warranty
                </div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-medium tabular-nums text-[#8A6247]">
                  Zero
                </div>
                <div className="text-xs text-[#6E6861] mt-1 font-light">
                  Plastic Packaging
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={() => setShowStoryModal(true)}
                className="inline-flex items-center px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] text-[#24211E] border border-[#24211E] hover:bg-[#24211E] hover:text-white transition-all cursor-pointer rounded-xs group"
              >
                <span>Read Full Story</span>
                <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Story Modal */}
      {showStoryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-[#F7F4EF] max-w-2xl w-full p-8 sm:p-10 rounded-sm border border-[#EFE9E1] shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowStoryModal(false)}
              className="absolute top-6 right-6 text-sm uppercase tracking-widest text-[#6E6861] hover:text-[#24211E] font-medium"
            >
              Close
            </button>
            <span className="text-xs uppercase tracking-widest text-[#8A6247] font-semibold block mb-2">
              THE MANIFESTO
            </span>
            <h3 className="font-serif text-3xl text-[#24211E] mb-4">
              Quiet Architecture in the Domestic Sphere
            </h3>
            <div className="space-y-4 text-sm text-[#6E6861] font-light leading-relaxed">
              <p>
                At FORMA, we believe that modern homes need fewer things, but things made with profound intention. An armrest curved to match the natural angle of human repose. A table surface sanded with three grades of grain to invite touch without glare.
              </p>
              <p>
                Our timber is harvested from responsibly managed regional forests in the Baltic basin. For every tree felled for our workshop, three saplings are planted in stewardship programs managed by the European Forestry Alliance.
              </p>
              <p>
                By selling directly to modern homeowners and designers without middlemen or distributor markups, we ensure that premium materials like solid quarter-sawn oak, Italian saddle leather, and Belgian flax linen remain accessible.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-[#EFE9E1] flex justify-end">
              <button
                onClick={() => setShowStoryModal(false)}
                className="px-6 py-2.5 bg-[#24211E] text-white text-xs uppercase tracking-wider font-medium cursor-pointer"
              >
                Return to Collection
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
