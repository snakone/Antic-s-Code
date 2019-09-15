import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {
  HttpService,
  ArticleService,
  CategoryService,
  LoginService,
  UserService
  } from './services.index';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    HttpService,
    ArticleService,
    CategoryService,
    LoginService,
    UserService
  ]
})

export class ServicesModule { }
