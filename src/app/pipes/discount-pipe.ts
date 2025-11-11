import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {
  transform(price: number, percent: number = 10): string {
    if (!price || price <= 0) return '$0.00';
    const discounted = price - (price * percent) / 100;
    return `$${discounted.toFixed(2)} (after ${percent}% off)`;
  }
}

