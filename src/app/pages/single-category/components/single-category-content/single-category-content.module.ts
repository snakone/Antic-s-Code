import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '@app/shared/components/components.module';
import { SharedModule } from '@app/shared/shared.module';

import { SingleCategoryContentComponent } from './single-category-content.component';
import { SingleCategoryIndexBoxComponent } from './components/single-category-index-box/single-category-index-box.component';
import { SingleCategoryIntroBoxComponent } from './components/single-category-intro-box/single-category-intro-box.component';
import { SingleCategorySidebarModule } from '../single-category-sidebar/single-category-sidebar.module';
import { SingleCategoryFaqBoxComponent } from './components/single-category-faq-box/single-category-faq-box.component';
import { SingleCategoryConceptBoxComponent } from './components/single-category-concept-box/single-category-concept-box.component';
import { SingleCategoryExampleBoxComponent } from './components/single-category-example-box/single-category-example-box.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SingleCategoryContentComponent,
    SingleCategoryIndexBoxComponent,
    SingleCategoryIntroBoxComponent,
    SingleCategoryFaqBoxComponent,
    SingleCategoryConceptBoxComponent,
    SingleCategoryExampleBoxComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SharedModule,
    RouterModule,
    SingleCategorySidebarModule
  ],
  exports: [
    SingleCategoryContentComponent
  ]
})

export class SingleCategoryContentModule { }
