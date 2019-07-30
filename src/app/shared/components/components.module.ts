import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';

import { Error404Component } from './error404/error404.component';
import { NavbarModule } from './layout/navbar/navbar.module';
import { SectionComponent } from './layout/section/section.component';

@NgModule({
  declarations: [
    Error404Component,
    SectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NavbarModule
  ],
  exports: [
    Error404Component,
    SectionComponent,
    NavbarModule
  ]
})

export class ComponentsModule { }
