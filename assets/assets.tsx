// LUCIDE ICONS
import {
  ArrowRightLeft,
  Eye,
  Heart,
  Search,
  ShoppingCart,
  UserRound,
} from 'lucide-react';

// PRODUCT IMAGES
import cozy_bedroom from './images/cozy_bedroom.png';
import cozy_living_room from './images/cozy_living_room.png';
import living_room from './images/living_room.png';
import living_room_simple from './images/living_room_simple.png';
import living_room_sofa from './images/living_room_sofa.png';
import modern_living_room_sofa from './images/modern_living_room_sofa.png';
import simple_coffee_table from './images/simple_coffee_table.png';
import sleek_modern_chair from './images/sleek_modern_chair.png';
import white_coffee_table from './images/white_coffee_table.png';

// OTHER IMAGES
import heroImage from './images/hero-image.jpg';
import logo from './images/logo.svg';

// ASSET TYPES

export const assets = {
  categories: [
    {
      id: 'cat-001',
      name: 'Living Room',
      description: 'Comfortable and stylish living room furniture.',
      image: living_room,
      products: ['pr-001', 'pr-002', 'pr-003'],
    },
    {
      id: 'cat-002',
      name: 'Bedroom',
      description: 'Cozy and modern bedroom furniture.',
      image: cozy_bedroom,
      products: ['pr-004', 'pr-005', 'pr-006'],
    },
    {
      id: 'cat-003',
      name: 'Dining Room',
      description: 'Elegant and functional dining room furniture.',
      image: white_coffee_table,
      products: ['pr-007', 'pr-008', 'pr-009'],
    },
  ],
  products: [
    {
      id: 'pr-001',
      name: 'Oslo Beige Modern Sofa',
      category: 'Living Room',
      subcategory: 'Sofas',
      description_short:
        'A modern 3-seater sofa with a minimalist design, upholstered in beige fabric and supported by solid wooden legs.',
      description_long:
        'The Oslo Beige Modern Sofa brings comfort and elegance to your living space. With its neutral beige upholstery, plush cushions, and sleek silhouette, this 3-seater sofa blends seamlessly into any interior. Crafted with a sturdy hardwood frame and premium fabric, it ensures long-lasting durability and style. Ideal for family rooms, apartments, or modern homes.',
      price: 899.99,
      discount_price: 749.99,
      currency: 'USD',
      stock: 24,
      sku: 'SOF-OSLO-3S-BEIGE',
      material: ['Hardwood frame', 'Polyester blend fabric', 'Foam cushions'],
      color: ['Beige'],
      dimensions_cm: {
        width: 210,
        depth: 90,
        height: 85,
        seat_height: 45,
      },
      weight_kg: 48,
      tags: ['sofa', 'living room', 'modern', 'beige', '3-seater'],
      rating: 4.6,
      reviews_count: 128,
      image: living_room_sofa,
      created_at: '2025-09-29T13:10:00Z',
    },
    {
      id: 'pr-002',
      name: 'Nordic Oak Bed Frame',
      category: 'Bedroom',
      subcategory: 'Beds',
      description_short:
        'A minimalist oak bed frame with a warm natural finish, designed for comfort and simplicity.',
      description_long:
        'The Nordic Oak Bed Frame combines timeless design with sturdy craftsmanship. Built from solid oak wood, its clean lines and natural finish make it a versatile choice for modern or traditional interiors. The frame includes slats for mattress support and pairs beautifully with neutral bedding for a calm, cozy bedroom atmosphere.',
      price: 649.99,
      discount_price: 549.99,
      currency: 'USD',
      stock: 18,
      sku: 'BED-NORDIC-OAK-QN',
      material: ['Solid oak wood', 'Matte finish'],
      color: ['Natural Oak'],
      dimensions_cm: {
        width: 160,
        depth: 200,
        height: 95,
        clearance_height: 28,
      },
      weight_kg: 42,
      tags: ['bed', 'bedroom', 'oak', 'minimalist', 'queen-size'],
      rating: 4.7,
      reviews_count: 94,
      image: cozy_bedroom,
      created_at: '2025-09-29T13:15:00Z',
    },
    {
      id: 'pr-003',
      name: 'Stockholm Round Coffee Table',
      category: 'Living Room',
      subcategory: 'Coffee Tables',
      description_short:
        'A solid oak round coffee table with a pedestal base, blending modern design with natural warmth.',
      description_long:
        'The Stockholm Round Coffee Table adds an inviting centerpiece to any living room. Crafted from solid oak wood with a natural matte finish, its circular top and sturdy pedestal base combine durability with timeless style. Perfect for hosting drinks, books, or decorative items, this table balances elegance and function in modern homes.',
      price: 429.99,
      discount_price: 359.99,
      currency: 'USD',
      stock: 32,
      sku: 'CTB-STOCKHOLM-OAK',
      material: ['Solid oak wood', 'Matte finish'],
      color: ['Natural Oak'],
      dimensions_cm: {
        diameter: 100,
        height: 45,
      },
      weight_kg: 28,
      tags: ['coffee table', 'living room', 'round', 'oak', 'modern'],
      rating: 4.8,
      reviews_count: 76,
      image: simple_coffee_table,
      created_at: '2025-09-29T13:20:00Z',
    },
    {
      id: 'pr-004',
      name: 'Arlo Mid-Century Armchair',
      category: 'Living Room',
      subcategory: 'Chairs',
      description_short:
        'A cozy mid-century armchair with wooden arms and soft linen upholstery.',
      description_long:
        "The Arlo Mid-Century Armchair is designed for both comfort and timeless style. Featuring a solid oak frame, gently curved wooden armrests, and a plush linen seat cushion, it's perfect for reading nooks, living rooms, or office corners.",
      price: 349.99,
      discount_price: 299.99,
      currency: 'USD',
      stock: 40,
      sku: 'CHA-ARLO-OAK-LN',
      material: ['Solid oak', 'Linen fabric', 'High-density foam'],
      color: ['Beige', 'Light Gray'],
      dimensions_cm: {
        width: 75,
        depth: 80,
        height: 85,
        seat_height: 44,
      },
      weight_kg: 18,
      tags: ['armchair', 'living room', 'mid-century', 'oak'],
      rating: 4.5,
      reviews_count: 54,
      image: sleek_modern_chair,
      created_at: '2025-09-29T13:30:00Z',
    },
    {
      id: 'pr-005',
      name: 'Luna Modern TV Stand',
      category: 'Living Room',
      subcategory: 'TV Stands',
      description_short:
        'A sleek oak TV stand with cable management and ample storage space.',
      description_long:
        'The Luna Modern TV Stand combines functionality and aesthetics with its clean lines and durable oak finish. Equipped with two cabinets and open shelving, it provides plenty of room for consoles, accessories, and décor while keeping cables neatly tucked away.',
      price: 499.99,
      discount_price: 429.99,
      currency: 'USD',
      stock: 15,
      sku: 'TVS-LUNA-OAK',
      material: ['Solid oak wood', 'Metal handles'],
      color: ['Natural Oak'],
      dimensions_cm: {
        width: 160,
        depth: 45,
        height: 50,
      },
      weight_kg: 36,
      tags: ['tv stand', 'media console', 'living room', 'storage'],
      rating: 4.4,
      reviews_count: 68,
      image: living_room_simple,
      created_at: '2025-09-29T13:32:00Z',
    },
    {
      id: 'pr-006',
      name: 'Siena Walnut Nightstand',
      category: 'Bedroom',
      subcategory: 'Nightstands',
      description_short:
        'A compact walnut nightstand with a drawer and open shelf for convenient bedside storage.',
      description_long:
        'The Siena Walnut Nightstand blends function and elegance. Crafted from solid walnut wood with a matte finish, it features a smooth-gliding drawer and open shelf for books, lamps, or nighttime essentials — a perfect companion for any modern bedroom.',
      price: 199.99,
      discount_price: 159.99,
      currency: 'USD',
      stock: 50,
      sku: 'NST-SIENA-WALNUT',
      material: ['Solid walnut', 'Metal handle'],
      color: ['Walnut Brown'],
      dimensions_cm: {
        width: 45,
        depth: 40,
        height: 55,
      },
      weight_kg: 12,
      tags: ['nightstand', 'bedroom', 'walnut', 'storage'],
      rating: 4.6,
      reviews_count: 72,
      image: cozy_living_room,
      created_at: '2025-09-29T13:34:00Z',
    },
    {
      id: 'pr-007',
      name: 'Haven Dresser with 6 Drawers',
      category: 'Bedroom',
      subcategory: 'Dressers',
      description_short:
        'A spacious oak dresser offering six soft-close drawers and a modern minimalist look.',
      description_long:
        'The Haven Dresser is designed to keep your bedroom organized in style. Its six drawers provide ample space for clothing and accessories, while its natural oak finish and minimalist design make it a timeless addition to any bedroom setup.',
      price: 799.99,
      discount_price: 699.99,
      currency: 'USD',
      stock: 12,
      sku: 'DRS-HAVEN-6D-OAK',
      material: ['Solid oak wood', 'Metal runners'],
      color: ['Natural Oak'],
      dimensions_cm: {
        width: 150,
        depth: 45,
        height: 90,
      },
      weight_kg: 60,
      tags: ['dresser', 'storage', 'bedroom', 'oak'],
      rating: 4.7,
      reviews_count: 84,
      image: modern_living_room_sofa,
      created_at: '2025-09-29T13:36:00Z',
    },
    {
      id: 'pr-008',
      name: 'Marbella Extendable Dining Table',
      category: 'Dining',
      subcategory: 'Dining Tables',
      description_short:
        'A versatile oak dining table that extends to seat up to 8 people.',
      description_long:
        'The Marbella Extendable Dining Table is designed for both intimate dinners and large gatherings. Its clever extension mechanism allows you to expand seating capacity with ease, while its natural oak grain and sturdy construction ensure long-lasting beauty and stability.',
      price: 999.99,
      discount_price: 849.99,
      currency: 'USD',
      stock: 10,
      sku: 'DNT-MARBELLA-EXT-OAK',
      material: ['Solid oak', 'Steel hardware'],
      color: ['Natural Oak'],
      dimensions_cm: {
        width: 180,
        depth: 90,
        height: 75,
        extended_width: 240,
      },
      weight_kg: 65,
      tags: ['dining table', 'extendable', 'oak', '8-seater'],
      rating: 4.8,
      reviews_count: 110,
      image: white_coffee_table,
      created_at: '2025-09-29T13:38:00Z',
    },
    {
      id: 'pr-009',
      name: 'Osborne Upholstered Dining Chair (Set of 2)',
      category: 'Dining',
      subcategory: 'Chairs',
      description_short:
        'A pair of upholstered dining chairs with cushioned seats and oak legs.',
      description_long:
        'The Osborne Dining Chair Set offers timeless style and comfort with its padded seats, ergonomic backrests, and sturdy oak legs. Perfect for pairing with any dining table, these chairs blend elegant form with everyday durability.',
      price: 299.99,
      discount_price: 249.99,
      currency: 'USD',
      stock: 30,
      sku: 'CHA-OSBORNE-SET2',
      material: ['Solid oak legs', 'Polyester upholstery', 'Foam padding'],
      color: ['Beige', 'Charcoal'],
      dimensions_cm: {
        width: 48,
        depth: 55,
        height: 88,
        seat_height: 47,
      },
      weight_kg: 14,
      tags: ['dining chair', 'upholstered', 'set', 'oak'],
      rating: 4.5,
      reviews_count: 63,
      image: simple_coffee_table,
      created_at: '2025-09-29T13:40:00Z',
    },
  ],
  navbar: {
    logo,
    links: [
      { name: 'Home', path: '/' },
      { name: 'Shop', path: '/shop' },
      { name: 'About', path: '/about' },
      { name: 'Contact', path: '/contact' },
    ],
    navIcons: [
      { name: 'search', path: '/search', icon: <Search /> },
      { name: 'wishlist', path: '/wishlist', icon: <Heart /> },
      { name: 'cart', path: '/cart', icon: <ShoppingCart /> },
      { name: 'user', path: '/account', icon: <UserRound /> },
    ],
  },
  footer: {
    logo,
    description: 'Furniro - Your one-stop shop for modern furniture.',
    links: [
      { name: 'Orders', path: '/orders' },
      { name: 'Checkout', path: '/checkout' },
      { name: 'Account', path: '/account' },
    ],
    helpLinks: [
      { name: 'Customer Service', path: '/help/customer-service' },
      { name: 'Shipping & Returns', path: '/help/shipping-returns' },
      { name: 'Privacy Policy', path: '/help/privacy-policy' },
      { name: 'Terms & Conditions', path: '/help/terms-conditions' },
    ],
  },
  hero: {
    title: 'Discover Your Perfect Furniture',
    content:
      'Modern designs for every room in your home. You will dicover a wide range of furniture that combines style and functionality.',
    ctaText: 'Shop Now',
    ctaLink: '/shop',
    image: heroImage,
  },
  productActions: [
    {
      name: 'Add to Cart',
      icon: <ShoppingCart />,
      action: 'add_to_cart',
    },
    {
      name: 'Add to Wishlist',
      icon: <Heart />,
      action: 'add_to_wishlist',
    },
    {
      name: 'View Details',
      icon: <Eye />,
      action: 'view_details',
    },
    {
      name: 'Compare',
      icon: <ArrowRightLeft />,
      action: 'compare',
    },
  ],
};
