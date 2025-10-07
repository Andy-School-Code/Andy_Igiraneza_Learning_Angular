import {Component, OnInit, signal} from '@angular/core';
import {Product} from './models/product';
import { ProductList } from './product-list/product-list';
import {ProductService} from './services/product.service';
import {ProductListItem} from './product-list-item/product-list-item';

@Component({
  selector: 'app-root',
  imports: [ProductList, ProductListItem],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  title: string = 'Assignment 4';
  featured?: Product;

  constructor(private productSvc: ProductService) {}

  ngOnInit(): void {
    // pick any existing id (e.g., 2)
    this.productSvc.read(2).subscribe(item => (this.featured = item));
  }
}
