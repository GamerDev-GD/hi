export type Review = {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  images: string[];
  reviews: Review[];
  redirectUrl: string;
  badge?: string;
};

export const ADMIN_USER = "lapadmin";
export const ADMIN_PASS = "asnasr";
export const STORAGE_KEY = "lap90_products_v1";
export const ADMIN_SESSION_KEY = "lap90_admin_session";
