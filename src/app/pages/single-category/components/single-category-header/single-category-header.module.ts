import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';

import { SingleCategoryHeaderLeftComponent } from './components/single-category-header-left/single-category-header-left.component';
import { SingleCategoryHeaderRightComponent } from './components/single-category-header-right/single-category-header-right.component';
import { SingleCategoryHeaderComponent } from './single-category-header.component';

@NgModule({
  declarations: [
    SingleCategoryHeaderComponent,
    SingleCategoryHeaderLeftComponent,
    SingleCategoryHeaderRightComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SingleCategoryHeaderComponent
  ]
})

export class SingleCategoryHeaderModule { }
