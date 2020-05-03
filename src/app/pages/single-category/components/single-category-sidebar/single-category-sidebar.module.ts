import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { SingleCategorySidebarComponent } from './single-category-sidebar.component';
import { SingleCategoryInfoBoxComponent } from './components/single-category-info-box/single-category-info-box.component';
import { ArticlesSidebarModule } from '@pages/articles/components/articles-sidebar/articles-sidebar.module';
import { BoxesModule } from '@shared/components/layout/boxes/boxes.module';

@NgModule({
  declarations: [
    SingleCategorySidebarComponent,
    SingleCategoryInfoBoxComponent
  ],
  imports: [
    CommonModule,
    BoxesModule,
    SharedModule,
    ArticlesSidebarModule
  ],
  exports: [
    SingleCategorySidebarComponent,
    SingleCategoryInfoBoxComponent
  ]
})

export class SingleCategorySidebarModule { }
