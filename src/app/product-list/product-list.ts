import { Component, OnInit } from '@angular/core';
import {Product} from '../models/product';
import {ProductListItem} from '../product-list-item/product-list-item';
import {NgForOf} from '@angular/common';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-product-list',
  imports: [ProductListItem, NgForOf],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit {
  products: Product[] = [];

  constructor(private productSvc: ProductService) {}

  ngOnInit(): void {
    this.productSvc.getAll().subscribe(items => (this.products = items));
  }
}
