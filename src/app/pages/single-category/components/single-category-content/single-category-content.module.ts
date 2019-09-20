import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';

import { SingleCategorySidebarModule } from '../single-category-sidebar/single-category-sidebar.module';
import { SingleCategoryContentComponent } from './single-category-content.component';
import { SingleCategoryIndexBoxComponent } from './components/single-category-index-box/single-category-index-box.component';
import { SingleCategoryFaqBoxComponent } from './components/single-category-faq-box/single-category-faq-box.component';
import { BoxesModule } from '@app/shared/components/layout/boxes/boxes.module';


@NgModule({
  declarations: [
    SingleCategoryContentComponent,
    SingleCategoryIndexBoxComponent,
    SingleCategoryFaqBoxComponent,
  ],
  imports: [
    CommonModule,
    BoxesModule,
    SharedModule,
    RouterModule,
    SingleCategorySidebarModule
  ],
  exports: [
    SingleCategoryContentComponent
  ]
})

export class SingleCategoryContentModule { }
