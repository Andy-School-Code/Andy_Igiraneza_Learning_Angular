import { Component } from '@angular/core';
import {Product} from '../models/product';
import {ProductListItem} from '../product-list-item/product-list-item';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [ProductListItem, NgForOf],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
}
