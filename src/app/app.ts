import { Component, signal } from '@angular/core';
import {Product} from './models/product';
import { ProductList } from './product-list/product-list';

@Component({
  selector: 'app-root',
  imports: [ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title: string = 'Assignment 3';
}
