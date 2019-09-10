import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { ComponentsModule } from '@app/shared/components/components.module';

import { SingleCategorySidebarComponent } from './single-category-sidebar.component';
import { SingleCategoryInfoBoxComponent } from './components/single-category-info-box/single-category-info-box.component';
import { ArticlesSidebarModule } from '@app/pages/articles/components/articles-sidebar/articles-sidebar.module';

@NgModule({
  declarations: [
    SingleCategorySidebarComponent,
    SingleCategoryInfoBoxComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    ArticlesSidebarModule
  ],
  exports: [
    SingleCategorySidebarComponent,
    SingleCategoryInfoBoxComponent
  ]
})

export class SingleCategorySidebarModule { }
