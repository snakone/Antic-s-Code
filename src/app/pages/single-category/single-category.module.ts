import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { LayoutModule } from '@shared/components/layout/layout.module';

import { SingleCategoryRouting } from './single-category.routing';
import { SingleCategoryComponent } from './single-category.component';
import { SingleCategoryHeaderModule } from './components/single-category-header/single-category-header.module';
import { SingleCategoryContentModule } from './components/single-category-content/single-category-content.module';
import { SingleCategorySidebarModule } from './components/single-category-sidebar/single-category-sidebar.module';

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
