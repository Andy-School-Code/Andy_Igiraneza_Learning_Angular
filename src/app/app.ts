import { Component, signal } from '@angular/core';
import {Product} from './models/product';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgForOf, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title: string = 'Assignment 2';

  products: Product[] = [
    {
      id: 1,
      name: 'Protein Powder',
      price: 29.99,
      category: 'Supplements',
      inStock: true,
      description: 'Whey isolate 2lb'
    },
    {id: 2, name: 'Yoga Mat', price: 19.99, category: 'Fitness', inStock: false},
    {
      id: 3,
      name: 'Running Shoes',
      price: 79.99,
      category: 'Apparel',
      inStock: true,
      description: 'Lightweight trainers'
    },
    {id: 4, name: 'Water Bottle', price: 14.99, category: 'Accessories', inStock: true},
    {id: 5, name: 'Resistance Bands', price: 24.99, category: 'Fitness', inStock: true, description: 'Set of 3'},
    {id: 6, name: 'Creatine Monohydrate', price: 34.99, category: 'Supplements', inStock: false},
    {id: 7, name: 'Jump Rope', price: 9.99, category: 'Fitness', inStock: true},
    {id: 8, name: 'Gym Gloves', price: 15.99, category: 'Accessories', inStock: true},
    {id: 9, name: 'Pre-Workout', price: 39.99, category: 'Supplements', inStock: true, description: 'Fruit punch'},
    {id: 10, name: 'Foam Roller', price: 21.99, category: 'Recovery', inStock: true}
  ];
}
