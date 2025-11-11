import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockColor'
})
export class StockColorPipe implements PipeTransform {
  transform(inStock: boolean): string {
    return inStock ? 'green' : 'red';
  }
}
