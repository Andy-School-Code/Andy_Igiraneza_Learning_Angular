export interface Product {
  id: number;
  price: number;
  name: string;
  category: string;
  inStock: boolean;
  description?: string;
  imageUrl?: string;
}
