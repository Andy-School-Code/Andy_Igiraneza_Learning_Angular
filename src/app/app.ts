import {Component, OnInit, signal} from '@angular/core';
import {Product} from './models/product';
import { ProductList } from './product-list/product-list';
import {ProductService} from './services/product.service';
import {ProductListItem} from './product-list-item/product-list-item';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [ProductList, ProductListItem, RouterOutlet, RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title: string = 'Assignment 4';
  featured?: Product;

  constructor(private productSvc: ProductService) {}

  loadFeatured(id: number) {
    this.productSvc.read(id).subscribe(item => (this.featured = item));
  }
}
