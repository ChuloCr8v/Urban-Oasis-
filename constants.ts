import type { AmenityCategory, Highlight, Review, Attraction } from './types';
import { Wifi, Tv, KeyRound, Car, Building2, Briefcase, UtensilsCrossed, Sofa, Refrigerator, BedDouble, Bath, ShieldCheck, Siren, Sparkles, Coffee, MapPin, Shirt, Wind, Music, MonitorPlay } from 'lucide-react';

export const PROPERTY_DETAILS = {
  name: "The Urban Oasis",
  city: "Downtown Metropolis",
  title: "Luxury 2-Bedroom Apartment in Downtown Metropolis",
  description: "Experience unparalleled comfort and style in the heart of the city. A sanctuary designed for the modern traveler.",
  rating: 4.98,
  reviewsCount: 150,
  nightlyPrice: 250,
  weeklyDiscount: 15,
  monthlyDiscount: 25,
  whatsappLink: "https://wa.me/1234567890",
  emailLink: "mailto:booking@urbanoasis.com",
  instagramLink: "https://instagram.com/urban.oasis.stay",
  instagramHandle: "@urban.oasis.stay",
};

export const HERO_IMAGES: string[] = [
  "https://images.unsplash.com/photo-1560185893-a55de8537e4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
  "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80",
];

export const HIGHLIGHTS: Highlight[] = [
  { title: "Blazing-Fast WiFi", icon: Wifi, image: "https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { title: "65\" 4K Smart TV", icon: Tv, image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { title: "Self Check-In", icon: KeyRound, image: "https://images.unsplash.com/photo-1582610116234-a3c17a54b200?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { title: "Secure Parking", icon: Car, image: "https://images.unsplash.com/photo-1599933572289-53b7d1497a73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { title: "City Views", icon: Building2, image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { title: "Workspace", icon: Briefcase, image: "https://images.unsplash.com/photo-1497032628192-86f99079de7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { title: "Full Kitchen", icon: UtensilsCrossed, image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { title: "Luxury Decor", icon: Sofa, image: "https://images.unsplash.com/photo-1618221195710-dd6b41fa2247?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
];

export const GALLERY_IMAGES: string[] = [
  "https://images.unsplash.com/photo-1618221195710-dd6b41fa2247?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1598928636135-d146006a9206?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1617104679265-693c049d5a32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
];

export const AMENITIES: AmenityCategory[] = [
  {
    category: "Living & Entertainment",
    description: "A spacious, open-plan sanctuary designed for relaxation and social gatherings.",
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1560185893-a55de8537e4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    items: [
      { 
        name: "Plush Sofa & Seating", 
        icon: Sofa, 
        description: "Italian leather sectional with deep memory foam cushions." 
      },
      { 
        name: "Home Theater System", 
        icon: Tv, 
        description: "65-inch 4K OLED TV with Sonos surround sound." 
      },
      { 
        name: "Gigabit WiFi", 
        icon: Wifi, 
        description: "Dedicated fiber line reaching speeds up to 1Gbps." 
      },
      { 
        name: "Streaming Hub", 
        icon: MonitorPlay, 
        description: "Pre-logged accounts for Netflix, HBO, and Disney+." 
      },
    ],
  },
  {
    category: "Gourmet Kitchen",
    description: "Fully equipped culinary workspace for the aspiring chef.",
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    items: [
      { 
        name: "Chef's Station", 
        icon: UtensilsCrossed, 
        description: "Professional knife set, cast iron skillets, and premium cookware." 
      },
      { 
        name: "Coffee Bar", 
        icon: Coffee, 
        description: "Nespresso Vertuo with a selection of pods and aeroccino." 
      },
      { 
        name: "Modern Appliances", 
        icon: Refrigerator, 
        description: "Stainless steel fridge with ice maker and filtered water." 
      },
      { 
        name: "Dining Essentials", 
        icon: Sparkles, 
        description: "Bone china dinnerware, crystal glasses, and full placemats." 
      },
    ],
  },
  {
    category: "Rest & Recovery",
    description: "Tranquil bedrooms optimized for the deepest sleep experience.",
    images: [
      "https://images.unsplash.com/photo-1616594039964-40891a9046c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    items: [
      { 
        name: "King Size Suites", 
        icon: BedDouble, 
        description: "Hybrid mattresses with cooling gel technology." 
      },
      { 
        name: "Premium Bedding", 
        icon: Sparkles, 
        description: "400-thread count Egyptian cotton linens and down duvets." 
      },
      { 
        name: "Blackout Environment", 
        icon: Sparkles, 
        description: "Floor-to-ceiling automated heavy velvet drapes." 
      },
      { 
        name: "Storage Solutions", 
        icon: Briefcase, 
        description: "Walk-in closets with wooden hangers and luggage racks." 
      },
    ],
  },
   {
    category: "Spa Bathroom",
    description: "Rejuvenate in bathrooms designed with relaxation in mind.",
    images: [
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1598928636135-d146006a9206?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    items: [
      { 
        name: "Rainfall Shower", 
        icon: Bath, 
        description: "Oversized ceiling-mounted shower head with handheld wand." 
      },
      { 
        name: "Luxury Linens", 
        icon: Sparkles, 
        description: "Plush Turkish cotton bath sheets, hand towels, and robes." 
      },
      { 
        name: "Organic Toiletries", 
        icon: Sparkles, 
        description: "Curated selection of Aesop shampoo, conditioner, and body wash." 
      },
      { 
        name: "Styling Tools", 
        icon: Wind, 
        description: "Professional ionic hair dryer with diffuser attachments." 
      },
    ],
  },
  {
    category: "Convenience & Safety",
    description: "Thoughtful additions to make your stay effortless and secure.",
    images: [
      "https://images.unsplash.com/photo-1521783988139-89397d761dce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617104679265-693c049d5a32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    items: [
      { 
        name: "In-Unit Laundry", 
        icon: Shirt, 
        description: "High-efficiency washer and dryer with detergent provided." 
      },
      { 
        name: "Keyless Entry", 
        icon: KeyRound, 
        description: "Smart lock system with a unique code for every guest." 
      },
      { 
        name: "24/7 Building Security", 
        icon: ShieldCheck, 
        description: "Secure lobby access and overnight concierge service." 
      },
      { 
        name: "Safety Essentials", 
        icon: Siren, 
        description: "Smoke detectors, CO monitors, and fire extinguisher." 
      },
    ],
  },
];

export const REVIEWS: Review[] = [
    {
        name: "Alexandra T.",
        initials: "AT",
        rating: 5,
        text: "Absolutely stunning apartment. The attention to detail is incredible, and the view is breathtaking. Felt like a five-star hotel. Can't wait to come back!",
    },
    {
        name: "Benjamin C.",
        initials: "BC",
        rating: 5,
        text: "The perfect stay for a business trip. The workspace was comfortable, the WiFi was fast, and the location was unbeatable. Highly recommend.",
    },
    {
        name: "Chloe S.",
        initials: "CS",
        rating: 5,
        text: "We had a wonderful weekend here. The apartment is even more beautiful than the pictures. It was clean, cozy, and had everything we needed.",
    },
    {
        name: "David M.",
        initials: "DM",
        rating: 5,
        text: "Simply the best Airbnb experience I've had. The host was responsive, and the place was spotless. The location is perfect for exploring.",
    },
    {
        name: "Elena R.",
        initials: "ER",
        rating: 4,
        text: "Beautiful design and great amenities. The kitchen was well-stocked which made cooking a breeze. A bit of street noise, but the windows are good.",
    },
    {
        name: "Frank L.",
        initials: "FL",
        rating: 5,
        text: "Incredible value for the luxury you get. The gym access was a huge plus. Will definitely be booking again for my next trip.",
    },
    {
        name: "Grace H.",
        initials: "GH",
        rating: 5,
        text: "I didn't want to leave! The bed is so comfortable and the rain shower is amazing. Truly an urban oasis.",
    },
     {
        name: "Henry P.",
        initials: "HP",
        rating: 5,
        text: "Top notch security and privacy. As a solo traveler, I felt very safe. The smart lock system is very convenient.",
    },
];

export const NEARBY_ATTRACTIONS: Attraction[] = [
    { name: "Metropolis Museum", distance: "5 min walk", icon: Building2 },
    { name: "Central Park Plaza", distance: "10 min walk", icon: MapPin },
    { name: "Gourmet Market", distance: "3 min walk", icon: UtensilsCrossed },
    { name: "Skyline Deck", distance: "15 min walk", icon: Building2 },
    { name: "Metro Station", distance: "2 min walk", icon: Car },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: "What is the check-in and check-out time?",
    answer: "Check-in is from 3:00 PM onwards, and check-out is before 11:00 AM. We offer contactless self check-in via a smart lock code sent to you on the morning of your arrival."
  },
  {
    question: "Is there parking available?",
    answer: "Yes, we provide one complimentary secure underground parking spot for the duration of your stay. The clearance height is 2.1 meters."
  },
  {
    question: "Are pets allowed?",
    answer: "We love animals, but to ensure the comfort of all our guests, particularly those with allergies, we generally maintain a no-pet policy. Exceptions can be made for service animals."
  },
  {
    question: "What is your cancellation policy?",
    answer: "Full refund for cancellations made within 48 hours of booking, if the check-in date is at least 14 days away. 50% refund for cancellations made at least 7 days before check-in."
  },
  {
    question: "Do you allow parties or events?",
    answer: "No. We maintain a strict no-party policy to respect our neighbors and the community. Noise monitoring devices are installed in the property."
  }
];