import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-modify-list-item',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './modify-list-item.html',
  styleUrls: ['./modify-list-item.css']
})
export class ModifyListItem implements OnInit {
  form!: FormGroup;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

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

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.read(Number(id)).subscribe({
        next: (product) => {
          if (product) this.form.patchValue(product);
        },
        error: () => {
          this.errorMessage = 'Failed to load product details.';
        }
      });
    }
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const product: Product = this.form.value;

    this.productService.read(product.id).subscribe({
      next: (existing) => {
        if (existing) {
          this.productService.update(product).subscribe({
            next: () => alert('Product updated!'),
            error: () => (this.errorMessage = 'Error updating product.')
          });
        } else {
          this.productService.create(product).subscribe({
            next: () => alert('Product created!'),
            error: () => (this.errorMessage = 'Error creating product.')
          });
        }
        this.form.reset();
      },
      error: () => (this.errorMessage = 'Error checking product existence.')
    });
  }

  onReset(): void {
    this.form.reset();
  }
}
