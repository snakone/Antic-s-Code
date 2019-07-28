import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '@app/shared/shared.module';
import { HeaderHomeModule } from './components/header-home/header-home.module';
import { CategoryHomeModule } from './components/category-home/category-home.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HeaderHomeModule,
    CategoryHomeModule
  ]
})

export class HomeModule { }
