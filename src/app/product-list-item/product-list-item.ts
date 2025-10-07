import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../models/product';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-product-list-item',
  imports: [NgIf],
  templateUrl: './product-list-item.html',
  styleUrl: './product-list-item.css'
})
export class ProductListItem {
  @Input() product!: Product;
  @Output() itemSelected = new EventEmitter<number>();
  onSelect() {
    console.log('Emitting ID:', this.product.id);
    this.itemSelected.emit(this.product.id);
}
}
