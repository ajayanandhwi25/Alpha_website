export interface ProductVariant {
  weight: "10rs" | "50g" | "100g" | "200g" | "500g" | "1000g";
  label: string;
  price: number;
  originalPrice?: number;
  packageType: string;
}

export interface Product {
  id: string;
  name: string;
  hindiName: string;
  category: "pure" | "blend" | "whole" | "chhota_pack";
  categoryLabel: string;
  shortDescription: string;
  description: string;
  image: string;
  rating: number;
  reviewsCount: number;
  badge?: string;
  heatLevel?: "Mild" | "Medium" | "Spicy" | "Fiery";
  ingredients: string[];
  features: string[];
  variants: ProductVariant[];
}

import { getAssetPath } from "@/utils/basePath";

export const RAW_PRODUCTS: Product[] = [
  {
    id: "haldi-powder",
    name: "Desi Alpha Shuddh Haldi Powder",
    hindiName: "शुद्ध हल्दी पाउडर",
    category: "pure",
    categoryLabel: "Khaalis Masale",
    shortDescription: "High-curcumin Alleppey turmeric, naturally stone-ground for rich golden hue and immunity.",
    description: "Desi Alpha Turmeric Powder is sourced from fertile soils and processed under low temperatures (cryo-ground) to lock in natural curcumin oils (>3.5%). 100% free from metanil yellow or chemical colors.",
    image: "/images/haldi.jpg",
    rating: 4.9,
    reviewsCount: 428,
    badge: "High Curcumin >3.5%",
    heatLevel: "Mild",
    ingredients: ["100% Pure Natural Turmeric Rhizomes"],
    features: ["Natural Golden Color", "No Added Starch or Dyes", "Rich in Natural Curcumin", "Traditional Stone Ground"],
    variants: [
      { weight: "10rs", label: "₹10 Chhota Sachet (20g)", price: 10, packageType: "Trial Pouch" },
      { weight: "50g", label: "50g Pouch", price: 28, originalPrice: 32, packageType: "Moisture-proof Pouch" },
      { weight: "100g", label: "100g Zipper Box", price: 52, originalPrice: 60, packageType: "Aroma-lock Box" },
      { weight: "200g", label: "200g Family Pack", price: 98, originalPrice: 115, packageType: "Sealed Box" },
      { weight: "500g", label: "500g Kitchen Pack", price: 235, originalPrice: 270, packageType: "Eco Standup Pouch" },
      { weight: "1000g", label: "1000g (1 Kg) Commercial", price: 440, originalPrice: 510, packageType: "Vacuum Bulk Bag" }
    ]
  },
  {
    id: "lal-mirch-powder",
    name: "Desi Alpha Teekhi & Degi Lal Mirch",
    hindiName: "देसी अल्फा लाल मिर्च पाउडर",
    category: "pure",
    categoryLabel: "Khaalis Masale",
    shortDescription: "Authentic blend of Guntur and Kashmiri red chillies for natural vibrant red color and rich heat.",
    description: "Sun-dried red chillies de-stemmed by hand and slowly ground to preserve natural capsanthin oil. Gives authentic Indian gravies their deep red glow and appetizing aroma without synthetic food color.",
    image: "/images/mirch.jpg",
    rating: 4.9,
    reviewsCount: 512,
    badge: "Natural Red Glow",
    heatLevel: "Fiery",
    ingredients: ["Handpicked Guntur Red Chillies", "Kashmiri Degi Mirch"],
    features: ["Deep Natural Red Hue", "No Sudan Dye / Additives", "Sharp Teekha Swad", "Slow Pounded Purity"],
    variants: [
      { weight: "10rs", label: "₹10 Chhota Sachet (15g)", price: 10, packageType: "Quick Sachet" },
      { weight: "50g", label: "50g Pouch", price: 32, originalPrice: 38, packageType: "Aroma Foil Pouch" },
      { weight: "100g", label: "100g Box", price: 62, originalPrice: 72, packageType: "Box with Inner Foil" },
      { weight: "200g", label: "200g Pack", price: 118, originalPrice: 135, packageType: "Aroma Zip Pouch" },
      { weight: "500g", label: "500g Kitchen Pack", price: 275, originalPrice: 310, packageType: "Heavy-duty Pouch" },
      { weight: "1000g", label: "1000g (1 Kg) Family Pack", price: 520, originalPrice: 590, packageType: "Commercial Seal Pack" }
    ]
  },
  {
    id: "dhaniya-powder",
    name: "Desi Alpha Sugandhit Dhaniya Powder",
    hindiName: "सुगंधित धनिया पाउडर",
    category: "pure",
    categoryLabel: "Khaalis Masale",
    shortDescription: "Plump, aromatic coriander seeds from Rajasthan, roasted lightly and ground for citrus-fresh gravy.",
    description: "Coriander is the backbone of Indian cooking. Desi Alpha Dhaniya is cleaned of husks and gently roasted so your dals and curries receive maximum aroma and thick, flavorful texture.",
    image: "/images/dhaniya.jpg",
    rating: 4.8,
    reviewsCount: 340,
    badge: "Cold Ground",
    heatLevel: "Mild",
    ingredients: ["100% Cleaned Rajasthan Green Coriander Seeds"],
    features: ["Fresh Greenish-Gold Aroma", "Thickens Gravies Naturally", "High Essential Volatile Oils", "Zero Added Husk"],
    variants: [
      { weight: "10rs", label: "₹10 Chhota Sachet (20g)", price: 10, packageType: "Mini Pouch" },
      { weight: "50g", label: "50g Pouch", price: 25, originalPrice: 30, packageType: "Fresh Foil" },
      { weight: "100g", label: "100g Box", price: 48, originalPrice: 56, packageType: "Moisture Sealed Box" },
      { weight: "200g", label: "200g Pack", price: 88, originalPrice: 105, packageType: "Zip Pouch" },
      { weight: "500g", label: "500g Kitchen Pack", price: 210, originalPrice: 245, packageType: "Standup Pouch" },
      { weight: "1000g", label: "1000g (1 Kg) Bulk Bag", price: 395, originalPrice: 460, packageType: "Wholesale Bag" }
    ]
  },
  {
    id: "shahi-garam-masala",
    name: "Desi Alpha Shahi Garam Masala",
    hindiName: "शाही गरम मसाला",
    category: "blend",
    categoryLabel: "Special Masala Mix",
    shortDescription: "Secret royal formulation of 16 aromatic whole spices stone-ground for rich Indian feast flavors.",
    description: "Crafted with green cardamom, black cardamom, royal cloves, mace, nutmeg, cinnamon, and star anise. A single pinch at the end of cooking transforms simple vegetables and curries into restaurant-grade delights.",
    image: "/images/garam-masala.jpg",
    rating: 5.0,
    reviewsCount: 689,
    badge: "Chef's Signature Blend",
    heatLevel: "Spicy",
    ingredients: ["Green Cardamom", "Badi Elaichi", "Cinnamon", "Cloves", "Nutmeg", "Mace", "Star Anise", "Black Cumin"],
    features: ["16 Handpicked Spices", "Rich Royal Aroma", "Zero Fillers or Common Salt", "Long Lasting Fragrance"],
    variants: [
      { weight: "10rs", label: "₹10 Chhota Sachet (15g)", price: 10, packageType: "Trial Sachet" },
      { weight: "50g", label: "50g Box", price: 45, originalPrice: 55, packageType: "Gold Foil Box" },
      { weight: "100g", label: "100g Tin / Box", price: 85, originalPrice: 99, packageType: "Aroma Seal Box" },
      { weight: "200g", label: "200g Jar / Pack", price: 160, originalPrice: 185, packageType: "Glass-look Jar" },
      { weight: "500g", label: "500g Feast Pack", price: 375, originalPrice: 440, packageType: "Freshness Zipper Pack" },
      { weight: "1000g", label: "1000g (1 Kg) Master Chef Pack", price: 690, originalPrice: 820, packageType: "Bulk Commercial Pack" }
    ]
  },
  {
    id: "shahi-biryani-masala",
    name: "Desi Alpha Lucknowi Biryani Masala",
    hindiName: "शाही बिरयानी मसाला",
    category: "blend",
    categoryLabel: "Special Masala Mix",
    shortDescription: "Rich Mughlai blend with royal saffron touch, whole crushed rose petals, and aromatic mace.",
    description: "Created specifically for dum biryanis, pulao, and fragrant rice dishes. Infuses every grain of basmati rice with lingering nawabi aroma and balanced spicy warmth.",
    image: "/images/products-showcase.jpg",
    rating: 4.9,
    reviewsCount: 412,
    badge: "Dum Aroma Locked",
    heatLevel: "Medium",
    ingredients: ["Kewra Essence", "Mace (Javitri)", "Saffron Stigmas", "Star Anise", "Shahi Jeera", "Bay Leaves"],
    features: ["Restaurant Dum Flavour", "Authentic Rice Infusion", "Natural Floral Aroma", "100% Preservative Free"],
    variants: [
      { weight: "10rs", label: "₹10 Chhota Sachet (15g)", price: 10, packageType: "One-Time Handi Pack" },
      { weight: "50g", label: "50g Pouch", price: 42, originalPrice: 50, packageType: "Silver Pouch" },
      { weight: "100g", label: "100g Box", price: 78, originalPrice: 90, packageType: "Inner Foil Box" },
      { weight: "200g", label: "200g Pack", price: 145, originalPrice: 170, packageType: "Zip Pouch" },
      { weight: "500g", label: "500g Party Pack", price: 340, originalPrice: 395, packageType: "Aroma Lock Bag" },
      { weight: "1000g", label: "1000g (1 Kg) Hotel Pack", price: 620, originalPrice: 750, packageType: "Catering Pack" }
    ]
  },
  {
    id: "kitchen-king-masala",
    name: "Desi Alpha All-Rounder Kitchen King Masala",
    hindiName: "किचन किंग मसाला",
    category: "blend",
    categoryLabel: "Special Masala Mix",
    shortDescription: "The universal spice blend for paneer, kofta, mix vegetable, and home curries.",
    description: "The magic masala every mother and home chef trusts! Desi Alpha Kitchen King balances coriander, cumin, dry ginger, turmeric, and black cardamom so even everyday sabjis taste rich and celebratory.",
    image: "/images/hero-spices.jpg",
    rating: 4.8,
    reviewsCount: 395,
    badge: "Everyday Favorite",
    heatLevel: "Medium",
    ingredients: ["Coriander", "Cumin", "Ginger", "Black Pepper", "Amchur", "Nutmeg", "Kasoori Methi"],
    features: ["Multi-Vegetable Friendly", "Enriches Dal & Paneer", "Fragrant Kasoori Methi Touch", "Balanced Spicing"],
    variants: [
      { weight: "10rs", label: "₹10 Chhota Sachet (15g)", price: 10, packageType: "Pocket Pack" },
      { weight: "50g", label: "50g Pouch", price: 38, originalPrice: 45, packageType: "Fresh Pouch" },
      { weight: "100g", label: "100g Box", price: 70, originalPrice: 82, packageType: "Sealed Box" },
      { weight: "200g", label: "200g Pack", price: 130, originalPrice: 155, packageType: "Kitchen Zipper" },
      { weight: "500g", label: "500g Pack", price: 310, originalPrice: 360, packageType: "Eco Standup" },
      { weight: "1000g", label: "1000g (1 Kg) Pack", price: 580, originalPrice: 680, packageType: "Commercial Bag" }
    ]
  },
  {
    id: "meat-chicken-masala",
    name: "Desi Alpha Royal Non-Veg Special Masala",
    hindiName: "चिकन व मीट स्पेशल मसाला",
    category: "blend",
    categoryLabel: "Special Masala Mix",
    shortDescription: "Bold robust spicing formulated to tenderize and deeply flavor curries, roasts, and gravies.",
    description: "Specially formulated for traditional Indian non-veg curries. The roasted whole spices and peppery punch ensure gravies absorb deep flavors while keeping meats juicy and tender.",
    image: "/images/mirch.jpg",
    rating: 4.9,
    reviewsCount: 290,
    badge: "Robust & Bold",
    heatLevel: "Fiery",
    ingredients: ["Black Cardamom", "Kashmiri Chilli", "Garlic Granules", "Roasted Coriander", "Cinnamon", "Nutmeg"],
    features: ["Deep Rich Gravy Texture", "Authentic Dhabha Style Taste", "Hand Roasted Spices", "No Animal Derivatives"],
    variants: [
      { weight: "10rs", label: "₹10 Chhota Sachet (15g)", price: 10, packageType: "Single Cook Pouch" },
      { weight: "50g", label: "50g Pouch", price: 42, originalPrice: 50, packageType: "Foil Pouch" },
      { weight: "100g", label: "100g Box", price: 79, originalPrice: 92, packageType: "Carton Box" },
      { weight: "200g", label: "200g Pack", price: 149, originalPrice: 175, packageType: "Zip Pouch" },
      { weight: "500g", label: "500g Pack", price: 345, originalPrice: 400, packageType: "Family Pack" },
      { weight: "1000g", label: "1000g (1 Kg) Pack", price: 640, originalPrice: 760, packageType: "Restaurant Pack" }
    ]
  },
  {
    id: "chhole-masala",
    name: "Desi Alpha Amritsari Chhole Masala",
    hindiName: "अमृतसरी छोले मसाला",
    category: "blend",
    categoryLabel: "Special Masala Mix",
    shortDescription: "Authentic dark tangy Punjabi chhole blend with roasted anardana and black rock salt.",
    description: "Craving that pitch-dark, chatpata street-style Amritsari Chana? Desi Alpha Chhole Masala uses roasted pomegranate seeds (anardana), dry mango, and black salt to deliver real Punjabi dhabha tang.",
    image: "/images/garam-masala.jpg",
    rating: 4.8,
    reviewsCount: 318,
    badge: "Original Dhabha Recipe",
    heatLevel: "Medium",
    ingredients: ["Roasted Anardana", "Amchur", "Kala Namak", "Black Pepper", "Cumin", "Ginger", "Ajwain"],
    features: ["Natural Dark Pindi Color", "Chatpata Tangy Taste", "Zero Added Colors", "Digestive Spices Enriched"],
    variants: [
      { weight: "10rs", label: "₹10 Chhota Sachet (15g)", price: 10, packageType: "Quick Sachet" },
      { weight: "50g", label: "50g Pouch", price: 36, originalPrice: 44, packageType: "Foil Pouch" },
      { weight: "100g", label: "100g Box", price: 68, originalPrice: 80, packageType: "Sealed Box" },
      { weight: "200g", label: "200g Pack", price: 125, originalPrice: 145, packageType: "Zip Pack" },
      { weight: "500g", label: "500g Kitchen Pack", price: 295, originalPrice: 340, packageType: "Standup Pouch" },
      { weight: "1000g", label: "1000g (1 Kg) Commercial", price: 540, originalPrice: 630, packageType: "Bulk Pack" }
    ]
  },
  {
    id: "chaat-masala",
    name: "Desi Alpha Chatpata Chaat Masala",
    hindiName: "चटपटा चाट मसाला",
    category: "blend",
    categoryLabel: "Special Masala Mix",
    shortDescription: "Mouth-watering tangy sprinkle for fruits, salads, raita, pakoras, and beverages.",
    description: "The quintessential Indian sprinkle! Made with hand-pounded Himalayan black rock salt, sun-dried green mango slices, hing (asafoetida), and mint.",
    image: "/images/dhaniya.jpg",
    rating: 4.9,
    reviewsCount: 460,
    badge: "Tangy Zest",
    heatLevel: "Mild",
    ingredients: ["Amchur (Dry Mango)", "Kala Namak", "Jeera", "Black Pepper", "Hing", "Mint"],
    features: ["Instant Flavor Booster", "Digestive Minerals", "No Preservatives", "Sprinkle-ready Spices"],
    variants: [
      { weight: "10rs", label: "₹10 Chhota Sachet (15g)", price: 10, packageType: "Snack Sachet" },
      { weight: "50g", label: "50g Sprinkler / Pouch", price: 34, originalPrice: 40, packageType: "Easy Sprinkler" },
      { weight: "100g", label: "100g Box", price: 64, originalPrice: 75, packageType: "Box Pack" },
      { weight: "200g", label: "200g Pack", price: 119, originalPrice: 140, packageType: "Zip Pouch" },
      { weight: "500g", label: "500g Pack", price: 280, originalPrice: 325, packageType: "Kitchen Pack" },
      { weight: "1000g", label: "1000g (1 Kg) Bulk", price: 510, originalPrice: 600, packageType: "Food Vendor Pack" }
    ]
  },
  {
    id: "malabar-black-pepper",
    name: "Desi Alpha Malabar Sabut Kali Mirch",
    hindiName: "मालाबार साबुत काली मिर्च",
    category: "whole",
    categoryLabel: "Khada Masala",
    shortDescription: "Grade-1 bold black peppercorns from Malabar coast with intense piperine aroma and spice.",
    description: "Known worldwide as 'Black Gold', our Malabar peppercorns are naturally sun-dried and sorted for uniform bold berries. Delivers unmistakable pungent heat and therapeutic warmth.",
    image: "/images/about-stone-grinding.jpg",
    rating: 4.9,
    reviewsCount: 275,
    badge: "Bold Malabar Berries",
    heatLevel: "Spicy",
    ingredients: ["100% Malabar Whole Black Peppercorns"],
    features: ["High Piperine Content", "Natural Sun-dried", "Uniform Bold Size", "Zero Mineral Oil Coating"],
    variants: [
      { weight: "10rs", label: "₹10 Chhota Sachet (10g)", price: 10, packageType: "Daily Sachet" },
      { weight: "50g", label: "50g Pouch", price: 55, originalPrice: 65, packageType: "Fresh Pouch" },
      { weight: "100g", label: "100g Jar / Box", price: 105, originalPrice: 125, packageType: "Glass-look Jar" },
      { weight: "200g", label: "200g Pack", price: 199, originalPrice: 240, packageType: "Zip Lock" },
      { weight: "500g", label: "500g Pantry Bag", price: 470, originalPrice: 560, packageType: "Vacuum Seal" },
      { weight: "1000g", label: "1000g (1 Kg) Commercial", price: 890, originalPrice: 1050, packageType: "Bulk Burlap Bag" }
    ]
  },
  {
    id: "green-elaichi-bold",
    name: "Desi Alpha Idukki Green Elaichi (8mm+)",
    hindiName: "इदुक्की हरी इलायची (सुपर बोल्ड)",
    category: "whole",
    categoryLabel: "Khada Masala",
    shortDescription: "Handpicked 8mm+ super bold aromatic green cardamom pods from Western Ghats of Idukki.",
    description: "The Queen of Spices. Bursting with aromatic essential oils that perfume kheer, biryanis, masala chai, and festive sweets with unforgettable sweetness and aroma.",
    image: "/images/hero-spices.jpg",
    rating: 5.0,
    reviewsCount: 388,
    badge: "8mm+ Super Bold",
    heatLevel: "Mild",
    ingredients: ["100% Hand-graded Green Cardamom Pods"],
    features: ["Naturally Green - No Artificial Color", "Bursting with Plump Seeds", "Long-lasting Fragrance", "Aroma-sealed Pack"],
    variants: [
      { weight: "10rs", label: "₹10 Chhota Sachet (5g)", price: 10, packageType: "Tea Lover Sachet" },
      { weight: "50g", label: "50g Airtight Box", price: 175, originalPrice: 210, packageType: "Airtight Pet Jar" },
      { weight: "100g", label: "100g Premium Box", price: 340, originalPrice: 400, packageType: "Aroma Seal Box" },
      { weight: "200g", label: "200g Pack", price: 650, originalPrice: 770, packageType: "Gold Foil Box" },
      { weight: "500g", label: "500g Wholesale Pack", price: 1550, originalPrice: 1850, packageType: "Nitrogen Sealed Bag" },
      { weight: "1000g", label: "1000g (1 Kg) Royal Pack", price: 2950, originalPrice: 3500, packageType: "Commercial Seal" }
    ]
  },
  {
    id: "sabut-jeera",
    name: "Desi Alpha Unjha Shuddh Cumin / Jeera",
    hindiName: "ऊँझा शुद्ध जीरा",
    category: "whole",
    categoryLabel: "Khada Masala",
    shortDescription: "Machine cleaned, high essential oil cumin seeds from Unjha Mandi, Gujarat.",
    description: "A proper tadka requires real jeera that crackles with distinct earthy fragrance. Cleaned through optical sorters to ensure 99.5% purity with zero dust or hollow seeds.",
    image: "/images/products-showcase.jpg",
    rating: 4.9,
    reviewsCount: 410,
    badge: "99.5% Machine Clean",
    heatLevel: "Mild",
    ingredients: ["100% Sorted Unjha Cumin Seeds"],
    features: ["Intense Tadka Crackle", "Optical Sorter Cleaned", "High Natural Essential Oil", "Zero Hollow Seeds"],
    variants: [
      { weight: "10rs", label: "₹10 Chhota Sachet (20g)", price: 10, packageType: "Tadka Sachet" },
      { weight: "50g", label: "50g Pouch", price: 32, originalPrice: 38, packageType: "Foil Pouch" },
      { weight: "100g", label: "100g Box", price: 58, originalPrice: 68, packageType: "Fresh Box" },
      { weight: "200g", label: "200g Pack", price: 110, originalPrice: 130, packageType: "Zip Pack" },
      { weight: "500g", label: "500g Kitchen Pack", price: 260, originalPrice: 310, packageType: "Kitchen Pouch" },
      { weight: "1000g", label: "1000g (1 Kg) Commercial", price: 490, originalPrice: 580, packageType: "Bulk Pack" }
    ]
  }
];

export const PRODUCTS: Product[] = RAW_PRODUCTS.map((p) => ({
  ...p,
  image: getAssetPath(p.image),
}));

export const CATEGORIES = [
  { id: "all", label: "All Spices (सभी मसाले)" },
  { id: "pure", label: "Pure Powders (खालिस मसाले)" },
  { id: "blend", label: "Special Blends (स्पेशल मिक्स)" },
  { id: "whole", label: "Khada Masala (साबुत मसाले)" },
  { id: "chhota_pack", label: "₹10 Daily Packs (छोटा पैकेट)" }
];
