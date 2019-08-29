import { NgModule } from '@angular/core';
import {
  HttpService,
  ArticleService,
  CategoryService
  } from './services.index';

@NgModule({
  imports: [],
  providers: [
    HttpService,
    ArticleService,
    CategoryService
  ]
})

export class ServicesModule { }
