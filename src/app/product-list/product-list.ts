import { Component } from '@angular/core';
import {Product} from '../models/product';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  products: Product[] = [
    { id: 1, name: 'Protein Powder', price: 29.99, category: 'Supplements', inStock: true, description: 'Whey isolate 2lb' },
    { id: 2, name: 'Yoga Mat', price: 19.99, category: 'Fitness', inStock: false },
    { id: 3, name: 'Running Shoes', price: 79.99, category: 'Apparel', inStock: true, description: 'Lightweight trainers' },
    { id: 4, name: 'Foam Roller', price: 21.99, category: 'Recovery', inStock: true }
  ];
}
