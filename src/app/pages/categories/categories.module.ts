import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { ComponentsModule } from '@app/shared/components/components.module';

@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    CategoriesRoutingModule
  ]
})

export class CategoriesModule { }
