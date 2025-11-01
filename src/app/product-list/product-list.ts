import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from '../models/product';
import {ProductListItem} from '../product-list-item/product-list-item';
import {NgForOf} from '@angular/common';
import {ProductService} from '../services/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [ProductListItem, NgForOf],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit {
  @Output() itemSelected = new EventEmitter<number>();
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe(items => (this.products = items));
  }

  onEdit(id: number): void {
    this.router.navigate(['/modify', id]); // takes user to modify form
  }

  onDelete(id: number): void {
    this.productService.delete(id).subscribe(() => {
      this.products = this.products.filter(p => p.id !== id);
    })
  }
}
