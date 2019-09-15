import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { LayoutModule } from '@app/shared/components/layout/layout.module';

@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    LayoutModule,
    CategoriesRoutingModule
  ]
})

export class CategoriesModule { }
