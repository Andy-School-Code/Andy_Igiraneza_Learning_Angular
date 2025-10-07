import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';
import { MOCK_PRODUCTS } from '../data/mock-content';

@Injectable({ providedIn: 'root' })
export class ProductService {

  private products: Product[] = [...MOCK_PRODUCTS];

  getAll(): Observable<Product[]> {
    return of(this.products);
  }

  read(id: number): Observable<Product | undefined> {
    return of(this.products.find(p => p.id === id));
  }


  create(item: Product): Observable<Product[]> {
    this.products = [...this.products, item];
    return of(this.products);
  }


  update(item: Product): Observable<Product[]> {
    this.products = this.products.map(p => (p.id === item.id ? { ...p, ...item } : p));
    return of(this.products);
  }


  delete(id: number): Observable<Product | undefined> {
    const removed = this.products.find(p => p.id === id);
    this.products = this.products.filter(p => p.id !== id);
    return of(removed);
  }
}
