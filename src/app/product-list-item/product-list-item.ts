import {Component, Input} from '@angular/core';
import {Product} from '../models/product';

@Component({
  selector: 'app-product-list-item',
  imports: [],
  templateUrl: './product-list-item.html',
  styleUrl: './product-list-item.css'
})
export class ProductListItem {
  @Input() product!: Product;
}
