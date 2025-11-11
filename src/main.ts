import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './app/data/in-memory-data';
import { App } from './app/app';
import { ModifyListItem } from './app/modify-list-item/modify-list-item';
import { PageNotFound } from './app/page-not-found/page-not-found';

const routes: Routes = [
  { path: 'modify', component: ModifyListItem },
  { path: 'modify/:id', component: ModifyListItem },
  { path: '**', component: PageNotFound }
];

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      HttpClientModule,
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 })
    )
  ]
}).catch(err => console.error(err));
