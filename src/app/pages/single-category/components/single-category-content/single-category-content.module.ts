import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';

import { SingleCategorySidebarModule } from '../single-category-sidebar/single-category-sidebar.module';
import { SingleCategoryContentComponent } from './single-category-content.component';
import { SingleCategoryIndexBoxComponent } from './components/single-category-index-box/single-category-index-box.component';
import { SingleCategoryFaqBoxComponent } from './components/single-category-faq-box/single-category-faq-box.component';
import { BoxesModule } from '@app/shared/components/layout/boxes/boxes.module';
import { SingleCategoryIntroBoxComponent } from './components/single-category-intro-box/single-category-intro-box.component';
import { SingleCategoryExamplesBoxComponent } from './components/single-category-examples-box/single-category-examples-box.component';
import { SingleCategoryConceptsBoxComponent } from './components/single-category-concepts-box/single-category-concepts-box.component';


@NgModule({
  declarations: [
    SingleCategoryContentComponent,
    SingleCategoryIndexBoxComponent,
    SingleCategoryFaqBoxComponent,
    SingleCategoryIntroBoxComponent,
    SingleCategoryExamplesBoxComponent,
    SingleCategoryConceptsBoxComponent,
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
