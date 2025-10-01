import type { StaticImageData } from 'next/image';

type Dimensions = {
  width?: number;
  depth?: number;
  height?: number;
  seat_height?: number;
  diameter?: number;
  clearance_height?: number;
};

export type Product = {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  description_short: string;
  description_long: string;
  price: number;
  discount_price?: number;
  currency: string;
  stock: number;
  sku: string;
  material: string[];
  color: string[];
  dimensions_cm: Dimensions;
  weight_kg: number;
  tags: string[];
  rating: number;
  reviews_count: number;
  image: StaticImageData;
  created_at: string;
};
