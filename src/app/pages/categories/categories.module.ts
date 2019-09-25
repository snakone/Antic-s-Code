import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@app/shared/components/layout/layout.module';
import { SharedModule } from '@app/shared/shared.module';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';

@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    LayoutModule,
    SharedModule,
    CategoriesRoutingModule
  ]
})

export class CategoriesModule { }
