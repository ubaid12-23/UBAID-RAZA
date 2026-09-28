import heroImg from '../assets/images/hero_forma_living_1790594601715.jpg';
import loungeImg from '../assets/images/featured_lounge_chair_1790594621678.jpg';
import diningImg from '../assets/images/category_dining_space_1790594637317.jpg';
import workshopImg from '../assets/images/craft_workshop_story_1790594652797.jpg';
import promoImg from '../assets/images/promo_sofa_setting_1790594667950.jpg';

export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'living' | 'dining' | 'bedroom' | 'office' | 'lighting' | 'outdoor';
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  image: string;
  secondaryImage?: string;
  shortDescription: string;
  description: string;
  materials: string;
  dimensions: string;
  rating: number;
  reviewCount: number;
  colors: ProductColor[];
  inStock: boolean;
  isNew?: boolean;
  isSignature?: boolean;
  leadTime: string;
  care: string;
}

export interface Category {
  id: string;
  name: string;
  subtitle: string;
  itemCount: number;
  image: string;
  filterKey: Product['category'];
}

export const CATEGORIES: Category[] = [
  {
    id: 'living',
    name: 'Living Room',
    subtitle: 'Modular sofas, lounge chairs & sculptural tables',
    itemCount: 24,
    image: heroImg,
    filterKey: 'living',
  },
  {
    id: 'dining',
    name: 'Dining Room',
    subtitle: 'Solid white oak tables & curved artisanal seating',
    itemCount: 18,
    image: diningImg,
    filterKey: 'dining',
  },
  {
    id: 'bedroom',
    name: 'Bedroom',
    subtitle: 'Low platform beds & soft organic linen textiles',
    itemCount: 16,
    image: loungeImg,
    filterKey: 'bedroom',
  },
  {
    id: 'office',
    name: 'Home Office',
    subtitle: 'Ergonomic task chairs & architectural desks',
    itemCount: 12,
    image: workshopImg,
    filterKey: 'office',
  },
  {
    id: 'outdoor',
    name: 'Outdoor Living',
    subtitle: 'Weathered teak dining & woven sun loungers',
    itemCount: 14,
    image: promoImg,
    filterKey: 'outdoor',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'luna-modular-sofa',
    name: 'Luna Modular Sofa',
    category: 'living',
    categoryLabel: 'Living Room',
    price: 1890,
    originalPrice: 2200,
    image: heroImg,
    secondaryImage: promoImg,
    shortDescription: 'Deep-seat modular lounge configuration in tactile oatmeal bouclé.',
    description: 'Designed around low-slung Japanese proportions and relaxed Scandinavian comfort. The Luna Modular Sofa features generous high-resiliency foam cores layered with cruelty-free down alternative, wrapped in high-traffic textured bouclé upholstery. FSC-certified kiln-dried beech frame guaranteed for ten years.',
    materials: 'Textured Wool-Cotton Bouclé, Kiln-Dried European Beech, Sinuous Steel Springs, High-Resilience Foam',
    dimensions: 'W: 280cm × D: 110cm × H: 72cm (Seat Height: 41cm)',
    rating: 4.9,
    reviewCount: 38,
    colors: [
      { name: 'Oatmeal Bouclé', hex: '#E6DFD5' },
      { name: 'Warm Charcoal', hex: '#3B3835' },
      { name: 'Olive Felt', hex: '#636652' },
    ],
    inStock: true,
    isNew: true,
    isSignature: true,
    leadTime: 'Leaves studio in 5–7 business days',
    care: 'Vacuum weekly with a soft brush attachment. Blot spills promptly with a dry linen cloth.',
  },
  {
    id: 'arden-lounge-chair',
    name: 'Arden Lounge Chair',
    category: 'living',
    categoryLabel: 'Living Room',
    price: 749,
    originalPrice: 890,
    image: loungeImg,
    secondaryImage: heroImg,
    shortDescription: 'Curved solid walnut frame with natural textured linen cushioning.',
    description: 'An architectural statement piece combining ergonomic lumbar support with expressive organic joinery. Each Arden chair is individually hand-shaped in solid American walnut and hand-rubbed with natural organic wax oils.',
    materials: 'Solid American Walnut, 100% Belgian Flax Linen, Brass Accent Hardware',
    dimensions: 'W: 78cm × D: 84cm × H: 76cm (Seat Height: 39cm)',
    rating: 5.0,
    reviewCount: 42,
    colors: [
      { name: 'Walnut & Oatmeal Linen', hex: '#5D4037' },
      { name: 'Natural Oak & Cream', hex: '#D2B48C' },
      { name: 'Smoked Oak & Slate', hex: '#3E2723' },
    ],
    inStock: true,
    isNew: true,
    isSignature: true,
    leadTime: 'In stock — ready to ship',
    care: 'Wipe frame with a soft, lint-free dry cloth. Treat wood with beeswax once yearly.',
  },
  {
    id: 'kanso-dining-table',
    name: 'Kanso Solid Oak Dining Table',
    category: 'dining',
    categoryLabel: 'Dining Room',
    price: 1450,
    image: diningImg,
    secondaryImage: workshopImg,
    shortDescription: 'Continuous grain white oak dining surface with softly beveled edges.',
    description: 'A celebration of quiet minimalism. Crafted from sustainable white oak sourced from managed European forests, the Kanso table seats 8 to 10 guests with generous knee clearance and seamless bullnose corner detailing.',
    materials: 'Solid European White Oak, Natural Matte Polyurethane Protective Seal',
    dimensions: 'L: 220cm × W: 95cm × H: 75cm',
    rating: 4.8,
    reviewCount: 29,
    colors: [
      { name: 'White Oak Matte', hex: '#D8C3A5' },
      { name: 'Smoked Walnut', hex: '#4A3525' },
    ],
    inStock: true,
    isNew: false,
    isSignature: true,
    leadTime: 'Ships in 1–2 weeks via White Glove Delivery',
    care: 'Use placemats and trivets. Clean with warm water and mild organic dish soap.',
  },
  {
    id: 'nova-sculptural-coffee-table',
    name: 'Nova Sculptural Coffee Table',
    category: 'living',
    categoryLabel: 'Living Room',
    price: 490,
    image: promoImg,
    secondaryImage: loungeImg,
    shortDescription: 'Curved cylinder pedestal with honed travertine limestone top.',
    description: 'The Nova table anchors conversation areas with monumental weight and serene proportions. Features a honed, unfilled Roman travertine surface resting securely atop a fluted matte wood plinth.',
    materials: 'Honed Roman Travertine Limestone, Fluted Solid Ash Plinth',
    dimensions: 'Diameter: 90cm × H: 36cm',
    rating: 4.9,
    reviewCount: 19,
    colors: [
      { name: 'Travertine & Warm Ash', hex: '#E3DAC9' },
      { name: 'Noir Marble & Charcoal', hex: '#2B2B2B' },
    ],
    inStock: true,
    isNew: true,
    isSignature: false,
    leadTime: 'In stock — ready to ship',
    care: 'Wipe spills immediately. Avoid acidic liquids like citrus or wine.',
  },
  {
    id: 'haven-sideboard',
    name: 'Haven Oak Credenza',
    category: 'dining',
    categoryLabel: 'Dining Room',
    price: 1190,
    originalPrice: 1350,
    image: workshopImg,
    secondaryImage: diningImg,
    shortDescription: 'Tambour sliding door storage cabinet in quarter-sawn white oak.',
    description: 'Conceal entertainment components or curated tableware effortlessly. The Haven Credenza features precision-machined slatted tambour doors that glide smoothly into hidden interior tracks.',
    materials: 'Quarter-Sawn European White Oak, Soft-Close European Hinges',
    dimensions: 'W: 180cm × D: 48cm × H: 72cm',
    rating: 4.9,
    reviewCount: 24,
    colors: [
      { name: 'Natural White Oak', hex: '#D4B996' },
      { name: 'Ebonized Black Oak', hex: '#262626' },
    ],
    inStock: true,
    isNew: false,
    isSignature: true,
    leadTime: 'Leaves studio in 3–5 business days',
    care: 'Dust regularly with microfiber cloth. Keep away from direct heat radiators.',
  },
  {
    id: 'astrid-curved-armchair',
    name: 'Astrid Low Armchair',
    category: 'living',
    categoryLabel: 'Living Room',
    price: 680,
    image: promoImg,
    secondaryImage: heroImg,
    shortDescription: 'Organic cocoon silhouette upholstered in earth-toned wool blend.',
    description: 'Designed as a personal reading retreat. The Astrid armchair balances fluid curvature with compact floor clearance, making it suitable for both sprawling lofts and intimate bedroom alcoves.',
    materials: 'Virgin Wool & Alpaca Blend, Molded Plywood Core, Solid Walnut Base',
    dimensions: 'W: 82cm × D: 80cm × H: 74cm (Seat Height: 40cm)',
    rating: 4.7,
    reviewCount: 16,
    colors: [
      { name: 'Moss Olive', hex: '#636B46' },
      { name: 'Sand Taupe', hex: '#C2B29F' },
      { name: 'Cognac Leather', hex: '#8B4513' },
    ],
    inStock: true,
    isNew: true,
    isSignature: false,
    leadTime: 'In stock — ready to ship',
    care: 'Professional upholstery dry cleaning recommended for spot treatments.',
  },
  {
    id: 'milo-pendant-light',
    name: 'Milo Sculptural Pendant',
    category: 'lighting',
    categoryLabel: 'Lighting',
    price: 240,
    image: diningImg,
    secondaryImage: heroImg,
    shortDescription: 'Hand-blown opaline glass sphere with brushed unlacquered brass canopy.',
    description: 'Cast an ethereal, warm ambient glow over tables and kitchen islands. Each Milo glass shade is mouth-blown by European glass artisans, resulting in subtle organic variations that make each luminaire unique.',
    materials: 'Mouth-Blown Opaline Glass, Solid Brushed Brass, Braided Linen Cord',
    dimensions: 'Shade Diameter: 32cm, Adjustable Drop: up to 200cm',
    rating: 4.9,
    reviewCount: 51,
    colors: [
      { name: 'Brushed Brass & Opal', hex: '#D4AF37' },
      { name: 'Blackened Bronze & Opal', hex: '#3E3C38' },
    ],
    inStock: true,
    isNew: false,
    isSignature: false,
    leadTime: 'In stock — ready to ship',
    care: 'Clean with a dry lint-free cloth when lamp is switched off and cool.',
  },
  {
    id: 'atelier-writing-desk',
    name: 'Atelier Minimalist Desk',
    category: 'office',
    categoryLabel: 'Home Office',
    price: 890,
    image: workshopImg,
    secondaryImage: loungeImg,
    shortDescription: 'Slim architectural desk with concealed cable channel and leather inset.',
    description: 'Crafted for focused clarity and creative rituals. The Atelier Desk pairs a chamfered solid wood top with an integrated Italian saddle leather writing pad and an unseen magnetic cord management dock.',
    materials: 'Solid White Oak, Tuscan Vegetable-Tanned Saddle Leather, Brass Cable Port',
    dimensions: 'W: 140cm × D: 65cm × H: 74cm',
    rating: 4.8,
    reviewCount: 14,
    colors: [
      { name: 'Oak & Cognac Leather', hex: '#B8860B' },
      { name: 'Walnut & Black Leather', hex: '#4A3B32' },
    ],
    inStock: true,
    isNew: true,
    isSignature: false,
    leadTime: 'Leaves studio in 3–5 business days',
    care: 'Condition leather pad semi-annually with natural leather balm.',
  },
];

export const TESTIMONIALS = [
  {
    id: '1',
    quote: 'Beautiful design, exceptional quality, and incredibly thoughtful packaging. The Luna sofa completely transformed the warmth and rhythm of our living space.',
    author: 'Emily R.',
    location: 'Copenhagen, Denmark',
    item: 'Purchased Luna Modular Sofa in Oatmeal',
    rating: 5,
  },
  {
    id: '2',
    quote: 'The craftsmanship is even more impressive in person. The solid walnut joinery on the Arden chair feels like an heirloom you keep for a lifetime.',
    author: 'Daniel M.',
    location: 'Seattle, WA',
    item: 'Purchased Arden Lounge Chair',
    rating: 5,
  },
  {
    id: '3',
    quote: 'From ordering to the seamless white glove delivery, the entire experience felt elevated. It is rare to find furniture that balances comfort with such pure architectural restraint.',
    author: 'Sarah K.',
    location: 'Melbourne, Australia',
    item: 'Purchased Kanso Dining Table & Chairs',
    rating: 5,
  },
];

export const EDITORIAL_FEATURES = [
  {
    id: 'materials',
    title: 'Natural Materials',
    subtitle: 'Sourced with conscience',
    description: 'We exclusively work with sustainably harvested European white oak, FSC-certified beech, natural stone, and unbleached Belgian linens.',
    badge: '100% Traceable',
  },
  {
    id: 'craft',
    title: 'Thoughtful Craft',
    subtitle: 'Built to outlast trends',
    description: 'Traditional mortise-and-tenon joinery, hand-finished wax oils, and reinforced structural frames guaranteed for a decade of daily living.',
    badge: '10-Year Warranty',
  },
  {
    id: 'timeless',
    title: 'Timeless Design',
    subtitle: 'Calm & enduring',
    description: 'Free from fleeting ornamental gimmicks. Every silhouette is refined until only functional elegance and quiet balance remain.',
    badge: 'Original Silhouettes',
  },
];
