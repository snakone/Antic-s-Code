import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { MatExpansionModule } from '@angular/material/expansion';
import { BoxesModule } from '@layout/boxes/boxes.module';
import { ComponentsModule } from '@shared/components/components.module';
import { SharedModule } from '@shared/shared.module';

import { SingleCategorySidebarModule } from '../single-category-sidebar/single-category-sidebar.module';
import { SingleCategoryContentComponent } from './single-category-content.component';
import { SingleCategoryIndexBoxComponent } from './components/single-category-index-box/single-category-index-box.component';
import { SingleCategoryFaqBoxComponent } from './components/single-category-faq-box/single-category-faq-box.component';

const Material = [
  MatExpansionModule
];

@NgModule({
  declarations: [
    SingleCategoryContentComponent,
    SingleCategoryIndexBoxComponent,
    SingleCategoryFaqBoxComponent,
  ],
  imports: [
    CommonModule,
    BoxesModule,
    ComponentsModule,
    SharedModule,
    RouterModule,
    MarkdownModule.forChild(),
    SingleCategorySidebarModule,
    ...Material
  ],
  exports: [
    SingleCategoryContentComponent,
    SingleCategoryIndexBoxComponent
  ]
})

export class SingleCategoryContentModule { }
