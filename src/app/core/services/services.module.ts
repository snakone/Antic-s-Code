import { NgModule } from '@angular/core';
import {
  HttpService,
  ArticleService,
  CategoryService,
  DataService
  } from './services.index';

@NgModule({
  imports: [],
  providers: [
    HttpService,
    ArticleService,
    CategoryService,
    DataService
  ]
})

export class ServicesModule { }
