import { Product } from '../models/product';

export const MOCK_PRODUCTS: Product[] = [
  { id: 1, name: 'Protein Powder', price: 29.99, category: 'Supplements', inStock: true,  description: 'Whey Isolate 2lb' },
  { id: 2, name: 'Yoga Mat',       price: 19.99, category: 'Fitness',     inStock: false, description: 'Workout Accessory'},
  { id: 3, name: 'Running Shoes',  price: 79.99, category: 'Apparel',     inStock: true,  description: 'Lightweight Trainers'},
  { id: 4, name: 'Foam Roller',    price: 21.99, category: 'Recovery',    inStock: true, description: 'Muscle Recovery Tool' }
];
