import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ProductService} from '../services/product.service';
import {Product} from '../models/product';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-modify-list-item',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './modify-list-item.html',
  styleUrl: './modify-list-item.css'
})
export class ModifyListItem {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      category: [''],
      inStock: [false],
      description: [''],
      imageUrl: ['']
    });
  }

  const id = this.route.snapshot.paramMap.get('id');
  if (id) {
    this.productService.read(Number(id)).subscribe(product => {
      if (product) {
        this.form.patchValue(product);
      }
    });
  }
  onSubmit(): void {
    if (this.form.invalid) return;
    const product: Product = this.form.value;

    this.productService.read(product.id).subscribe(existing => {
      if (existing) {
        this.productService.update(product).subscribe(() => alert('Product updated!'));
      } else {
        this.productService.create(product).subscribe(() => alert('Product created!'));
      }
      this.form.reset();
    });
  }

  onReset(): void {
    this.form.reset();
  }
}
