import { Product } from '../models/product';

export const MOCK_PRODUCTS: Product[] = [
  { id: 1, name: 'Protein Powder', price: 29.99, category: 'Supplements', inStock: true,  description: 'Whey Isolate 2lb', imageUrl: 'assets/images/protein.avf'},
  { id: 2, name: 'Yoga Mat',       price: 19.99, category: 'Fitness',     inStock: false, description: 'Workout Accessory', imageUrl: 'assets/images/yoga-mat.jpg'},
  { id: 3, name: 'Running Shoes',  price: 79.99, category: 'Apparel',     inStock: true,  description: 'Lightweight Trainers', imageUrl: 'assets/images/running-shoes.jpg'},
  { id: 4, name: 'Foam Roller',    price: 21.99, category: 'Recovery',    inStock: true, description: 'Muscle Recovery Tool', imageUrl: 'assets/images/foam-roller.webp' }
];

up to date, audited 599 packages in 18s

108 packages are looking for funding
  run `npm fund` for details

  # npm audit report

vite  7.1.0 - 7.1.10
Severity: moderate
Vite middleware may serve files starting with the same name with the public directory - https://github.com/advisories/GHSA-g4jq-h2w9-997c
Vite's `server.fs` settings were not applied to HTML files - https://github.com/advisories/GHSA-jqfw-vq24-v9c3
vite allows server.fs.deny bypass via backslash on Windows - https://github.com/advisories/GHSA-93m4-6634-74q7
fix available via `npm audit fix`
node_modules/vite
@angular/build  20.2.0-next.0 - 20.3.0 || 21.0.0-next.0 - 21.0.0-next.2
Depends on vulnerable versions of vite
node_modules/@angular/build

2 vulnerabilities (1 low, 1 moderate)

To address all issues, run:
npm audit fix
