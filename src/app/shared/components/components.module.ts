import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { Error404Component } from './error404/error404.component';
import { NavbarModule } from './layout/navbar/navbar.module';

@NgModule({
  declarations: [
    Error404Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    NavbarModule
  ],
  exports: [
    Error404Component,
    NavbarModule
  ]
})

export class ComponentsModule { }
