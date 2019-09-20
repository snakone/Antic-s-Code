import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { LayoutModule } from '@app/shared/components/layout/layout.module';

import { SingleCategoryRoutingModule } from './single-category-routing.module';
import { SingleCategoryComponent } from './single-category.component';

import {
  SingleCategoryHeaderModule,
  SingleCategoryContentModule,
  SingleCategorySidebarModule
} from './single-category.index';

@NgModule({
  declarations: [
    SingleCategoryComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    SingleCategoryRoutingModule,
    SingleCategoryHeaderModule,
    SingleCategoryContentModule,
    SingleCategorySidebarModule
  ]
})

export class SingleCategoryModule { }
