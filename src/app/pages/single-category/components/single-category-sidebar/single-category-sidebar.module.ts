import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { ArticlesSidebarModule } from '@pages/articles/components/articles-sidebar/articles-sidebar.module';
import { MatIconModule } from '@angular/material/icon';
import { StickyBoxModule } from '@layout/boxes/sticky-box/sticky-box.module';
import { ContentBoxModule } from '@layout/boxes/content-box/content-box.module';
import { RelatedArticlesBoxModule } from '@layout/boxes/related-articles-box/related-articles-box.module';

import { SingleCategorySidebarComponent } from './single-category-sidebar.component';
import { SingleCategoryInfoBoxComponent } from './components/single-category-info-box/single-category-info-box.component';

const Material = [
  MatIconModule
];

@NgModule({
  declarations: [
    SingleCategorySidebarComponent,
    SingleCategoryInfoBoxComponent
  ],
  imports: [
    CommonModule,
    StickyBoxModule,
    SharedModule,
    ArticlesSidebarModule,
    ContentBoxModule,
    RelatedArticlesBoxModule,
    ...Material
  ],
  exports: [
    SingleCategorySidebarComponent,
    SingleCategoryInfoBoxComponent
  ]
})

export class SingleCategorySidebarModule { }
