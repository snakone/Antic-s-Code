import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryHomeComponent } from './category-home.component';
import { CategoryGridComponent } from './components/category-grid/category-grid.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    CategoryHomeComponent,
    CategoryGridComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CategoryHomeComponent
  ]
})
export class CategoryHomeModule { }
