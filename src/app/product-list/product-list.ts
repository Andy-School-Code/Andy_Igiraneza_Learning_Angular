import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from '../models/product';
import {ProductListItem} from '../product-list-item/product-list-item';
import { NgForOf, NgIf } from '@angular/common';
import {ProductService} from '../services/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [ProductListItem, NgForOf, NgIf],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList implements OnInit {
  @Output() itemSelected = new EventEmitter<number>();
  products: Product[] = [];
  errorMessage = '';

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe({
      next: (items) => (this.products = items),
      error: () => {
        this.errorMessage = 'Failed to load products. Please try again later.';
      }
    });
  }

  onEdit(id: number): void {
    this.router.navigate(['/modify', id]);
  }

  onDelete(id: number): void {
    this.productService.delete(id).subscribe({
      next: () => {
        this.products = this.products.filter(p => p.id !== id);
      },
      error: () => {
        this.errorMessage = 'Error deleting product. Please try again.';
      }
    });
  }
}
