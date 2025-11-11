import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products: Product[] = [
      { id: 1, name: 'Protein Powder', price: 29.99, category: 'Supplements', inStock: true,  description: 'Whey Isolate 2lb', imageUrl: 'assets/images/protein.avf' },
      { id: 2, name: 'Yoga Mat',       price: 19.99, category: 'Fitness',     inStock: false, description: 'Workout Accessory', imageUrl: 'assets/images/yoga-mat.jpg' },
      { id: 3, name: 'Running Shoes',  price: 79.99, category: 'Apparel',     inStock: true,  description: 'Lightweight Trainers', imageUrl: 'assets/images/running-shoes.jpg' },
      { id: 4, name: 'Foam Roller',    price: 21.99, category: 'Recovery',    inStock: true,  description: 'Muscle Recovery Tool', imageUrl: 'assets/images/foam-roller.webp' }
    ];
    return { products };
  }

  genId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
  }
}
