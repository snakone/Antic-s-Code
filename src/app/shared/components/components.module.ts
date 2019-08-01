import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';

import { Error404Component } from './error404/error404.component';
import { NavbarModule } from './layout/navbar/navbar.module';
import { SectionComponent } from './layout/section/section.component';
import { IntersectionObserverComponent } from './layout/intersection-observer/intersection-observer.component';
import { FooterModule } from './layout/footer/footer.module';

@NgModule({
  declarations: [
    Error404Component,
    SectionComponent,
    IntersectionObserverComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NavbarModule,
    FooterModule
  ],
  exports: [
    Error404Component,
    SectionComponent,
    NavbarModule,
    FooterModule,
    IntersectionObserverComponent
  ]
})

export class ComponentsModule { }
