import React from 'react';
import { X, BookOpen, ArrowRight, Calendar, User } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import workshopImg from '../assets/images/craft_workshop_story_1790594652797.jpg';
import loungeImg from '../assets/images/featured_lounge_chair_1790594621678.jpg';
import diningImg from '../assets/images/category_dining_space_1790594637317.jpg';

export const JournalModal: React.FC = () => {
  const { isJournalOpen, setIsJournalOpen, setActiveFilter } = useShop();

  if (!isJournalOpen) return null;

  const articles = [
    {
      title: 'The Art of Tactility: Why Unbleached Belgian Linen Endures',
      date: 'September 2026',
      author: 'Elena Lindqvist',
      category: 'Material Culture',
      image: loungeImg,
      summary: 'Exploring how flax fibres grown in damp Atlantic soils produce a textile that grows softer and more expressive with each passing decade.',
    },
    {
      title: 'Light, Proportion, and Quiet Spaces: Scandinavian Minimalism Reconsidered',
      date: 'August 2026',
      author: 'Marcus Vance',
      category: 'Interior Architecture',
      image: diningImg,
      summary: 'Why modern interiors flourish when we remove visual noise and allow the grain of solid quarter-sawn oak to capture natural morning daylight.',
    },
    {
      title: 'Behind the Grain: Inside Our Baltic Woodworking Atelier',
      date: 'July 2026',
      author: 'Julian Thorne',
      category: 'Craftsmanship',
      image: workshopImg,
      summary: 'A photo essay on hand-rubbed wax oils, traditional mortise-and-tenon joints, and zero-waste wood offcut philosophies.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-[#F7F4EF] w-full max-w-4xl rounded-xs border border-[#EFE9E1] shadow-2xl relative overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="p-5 border-b border-[#EFE9E1] flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center gap-2.5">
            <BookOpen className="w-5 h-5 text-[#8A6247]" />
            <span className="font-serif text-lg font-medium tracking-[0.2em] uppercase text-[#24211E]">
              FORMA Journal
            </span>
          </div>
          <button
            onClick={() => setIsJournalOpen(false)}
            className="p-1.5 text-[#6E6861] hover:text-[#24211E] rounded-full hover:bg-[#EFE9E1] transition-colors cursor-pointer"
            aria-label="Close journal dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-[0.22em] text-[#8A6247] font-semibold block mb-1">
              ARCHITECTURAL ESSAYS & CRAFT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#24211E] font-normal">
              Notes on Modern Living
            </h2>
            <p className="text-xs sm:text-sm text-[#6E6861] font-light mt-2">
              Reflections on sustainable forestry, tactile materials, and the timeless art of domestic peace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((art, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xs border border-[#EFE9E1] overflow-hidden flex flex-col justify-between group hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="aspect-16/10 overflow-hidden bg-[#EFE9E1]">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-[#8A6247] font-semibold mb-2">
                      <span>{art.category}</span>
                      <span className="text-[#6E6861] font-normal">{art.date}</span>
                    </div>
                    <h3 className="font-serif text-lg font-medium text-[#24211E] leading-snug group-hover:text-[#8A6247] transition-colors mb-2">
                      {art.title}
                    </h3>
                    <p className="text-xs text-[#6E6861] font-light leading-relaxed">
                      {art.summary}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-[#EFE9E1]/80 mt-4 flex items-center justify-between text-xs text-[#6E6861]">
                  <span className="text-[11px] font-medium">{art.author}</span>
                  <span className="text-[#8A6247] font-medium flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Read Essay</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-[#EFE9E1] rounded-xs border border-[#DCC9B7]/50 text-center">
            <h4 className="font-serif text-xl text-[#24211E] mb-1">Explore Curated Furniture Pieces</h4>
            <p className="text-xs text-[#6E6861] mb-4">
              All pieces featured in our journal are crafted at our regional studio.
            </p>
            <button
              onClick={() => {
                setIsJournalOpen(false);
                setActiveFilter('all');
                const el = document.getElementById('shop');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-6 py-2.5 bg-[#24211E] hover:bg-[#8A6247] text-white text-xs font-medium uppercase tracking-wider rounded-xs cursor-pointer transition-colors"
            >
              Shop Curated Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
