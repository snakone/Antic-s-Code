import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { Error404Component } from './error404/error404.component';
import { NavBarComponent } from './layout/navbar/navbar.component';

@NgModule({
  declarations: [
    Error404Component,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    Error404Component,
    NavBarComponent
  ]
})

export class ComponentsModule { }
