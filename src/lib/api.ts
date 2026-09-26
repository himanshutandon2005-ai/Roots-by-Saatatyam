import axios from 'axios';
import { Product, EnquiryData } from '../types';
import { INITIAL_PRODUCTS } from '../data/products';

export const CATEGORY_LABELS: Record<string, string> = {
  all: 'All',
  indoor: 'Indoor',
  outdoor: 'Outdoor',
  planter: 'Planters',
  gifting: 'Gifting',
};

export const getProducts = async (params?: { category?: string }): Promise<Product[]> => {
  try {
    const res = await axios.get('/api/products', { params, timeout: 3500 });
    if (Array.isArray(res.data) && res.data.length > 0) {
      return res.data;
    }
  } catch (err) {
    // Fallback to local dataset
  }

  let list = [...INITIAL_PRODUCTS];
  if (params?.category && params.category !== 'all') {
    list = list.filter((p) => p.category === params.category);
  }
  return list;
};

export const getProduct = async (id: string): Promise<Product | undefined> => {
  try {
    const res = await axios.get(`/api/products/${id}`, { timeout: 3500 });
    if (res.data) return res.data;
  } catch (err) {
    // Fallback
  }
  return INITIAL_PRODUCTS.find((p) => p.id === id || p.slug === id);
};

export const createEnquiry = async (data: EnquiryData): Promise<{ id: string; ok: boolean }> => {
  try {
    const res = await axios.post('/api/enquiries', data, { timeout: 4000 });
    if (res.data) return res.data;
  } catch (err) {
    // Store in localStorage as fallback
    try {
      const existing = JSON.parse(localStorage.getItem('roots_enquiries') || '[]');
      existing.push({ ...data, date: new Date().toISOString() });
      localStorage.setItem('roots_enquiries', JSON.stringify(existing));
    } catch {
      // ignore
    }
  }
  return { id: 'enq_' + Date.now().toString(36), ok: true };
};

export default '/api';
