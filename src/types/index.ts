export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'indoor' | 'outdoor' | 'planter' | 'gifting' | string;
  price: number;
  image: string;
  short_description: string;
  description: string;
  light?: string;
  water?: string;
  size?: string;
  tags?: string[];
  badge?: string | null;
  featured?: boolean;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  qty: number;
}

export interface EnquiryData {
  name: string;
  phone: string;
  interest: string;
  message: string;
}
