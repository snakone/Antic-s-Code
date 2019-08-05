import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '@app/shared/components/components.module';
import { SharedModule } from '@app/shared/shared.module';

import { SingleCategoryContentComponent } from './single-category-content.component';
import { SingleCategoryIndexBoxComponent } from './components/single-category-index-box/single-category-index-box.component';
import { SingleCategoryIntroBoxComponent } from './components/single-category-intro-box/single-category-intro-box.component';
import { SingleCategorySidebarModule } from '../single-category-sidebar/single-category-sidebar.module';
import { SingleCategoryFaqBoxComponent } from './components/single-category-faq-box/single-category-faq-box.component';
import { SingleCategoryMainBoxComponent } from './components/single-category-main-box/single-category-main-box.component';

@NgModule({
  declarations: [
    SingleCategoryContentComponent,
    SingleCategoryIndexBoxComponent,
    SingleCategoryIntroBoxComponent,
    SingleCategoryFaqBoxComponent,
    SingleCategoryMainBoxComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SharedModule,
    SingleCategorySidebarModule
  ],
  exports: [
    SingleCategoryContentComponent
  ]
})

export class SingleCategoryContentModule { }
