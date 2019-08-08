import { NgModule } from '@angular/core';
import {
  HttpService,
  ArticleService
  } from './services.index';

@NgModule({
  imports: [],
  providers: [
    HttpService,
    ArticleService
  ]
})

export class ServicesModule { }
