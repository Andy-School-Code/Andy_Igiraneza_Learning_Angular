import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from '../models/product';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products: Product[] = [
      { id: 1, name: 'Protein Powder', price: 29.99, category: 'Supplements', inStock: true,
        description: 'Whey Isolate 2 lb', imageUrl: 'assets/images/protein.avif', addedOn: new Date('2025-01-10') },

      { id: 2, name: 'Yoga Mat', price: 19.99, category: 'Fitness', inStock: false,
        description: 'Workout Accessory', imageUrl: 'assets/images/yoga-mat.jpg', addedOn: new Date('2025-02-05') },

      { id: 3, name: 'Running Shoes', price: 79.99, category: 'Apparel', inStock: true,
        description: 'Lightweight Trainers', imageUrl: 'assets/images/running-shoes.jpg', addedOn: new Date('2025-03-12') },

      { id: 4, name: 'Foam Roller', price: 21.99, category: 'Recovery', inStock: true,
        description: 'Muscle Recovery Tool', imageUrl: 'assets/images/foam-roller.webp', addedOn: new Date('2025-04-01') }
    ];
    return { products };
  }
}
