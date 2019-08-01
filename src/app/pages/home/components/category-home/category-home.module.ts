import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { ComponentsModule } from '@app/shared/components/components.module';

import { CategoryHomeComponent } from './category-home.component';
import { CategoryGridComponent } from './components/category-grid/category-grid.component';

@NgModule({
  declarations: [
    CategoryHomeComponent,
    CategoryGridComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule
  ],
  exports: [
    CategoryHomeComponent
  ]
})

export class CategoryHomeModule { }
