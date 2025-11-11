import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
  { path: '', component: ProductList },
  {
    path: 'modify',
    loadComponent: () =>
      import('./modify-list-item/modify-list-item').then(m => m.ModifyListItem)
  },
  { path: '**', component: PageNotFound }
];
