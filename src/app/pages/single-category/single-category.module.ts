import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { LayoutModule } from '@app/shared/components/layout/layout.module';

import { SingleCategoryRouting } from './single-category.routing';
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
    SingleCategoryRouting,
    SingleCategoryHeaderModule,
    SingleCategoryContentModule,
    SingleCategorySidebarModule
  ]
})

export class SingleCategoryModule { }
