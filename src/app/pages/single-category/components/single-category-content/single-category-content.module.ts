import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { BoxesModule } from '@app/shared/components/layout/boxes/boxes.module';
import { ComponentsModule } from '@app/shared/components/components.module';

import { SingleCategorySidebarModule } from '../single-category-sidebar/single-category-sidebar.module';
import { SingleCategoryContentComponent } from './single-category-content.component';
import { SingleCategoryIndexBoxComponent } from './components/single-category-index-box/single-category-index-box.component';
import { SingleCategoryFaqBoxComponent } from './components/single-category-faq-box/single-category-faq-box.component';
import { SingleCategoryIntroComponent } from './components/single-category-intro/single-category-intro.component';
import { SingleCategoryExamplesComponent } from './components/single-category-examples/single-category-examples.component';
import { SingleCategoryConceptsComponent } from './components/single-category-concepts/single-category-concepts.component';
import { MarkdownModule } from 'ngx-markdown';


@NgModule({
  declarations: [
    SingleCategoryContentComponent,
    SingleCategoryIndexBoxComponent,
    SingleCategoryFaqBoxComponent,
    SingleCategoryIntroComponent,
    SingleCategoryExamplesComponent,
    SingleCategoryConceptsComponent,
  ],
  imports: [
    CommonModule,
    BoxesModule,
    ComponentsModule,
    SharedModule,
    RouterModule,
    MarkdownModule.forChild(),
    SingleCategorySidebarModule
  ],
  exports: [
    SingleCategoryContentComponent
  ]
})

export class SingleCategoryContentModule { }
