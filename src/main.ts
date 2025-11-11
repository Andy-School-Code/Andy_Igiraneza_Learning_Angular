import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { App } from './app/app';
import { ModifyListItem } from './app/modify-list-item/modify-list-item';
import { PageNotFound } from './app/page-not-found/page-not-found';

const routes: Routes = [
  { path: 'modify', component: ModifyListItem },
  { path: 'modify/:id', component: ModifyListItem },
  { path: '**', component: PageNotFound }
];

bootstrapApplication(App, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));
