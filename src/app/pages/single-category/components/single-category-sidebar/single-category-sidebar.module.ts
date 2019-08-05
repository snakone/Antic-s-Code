import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { ComponentsModule } from '@app/shared/components/components.module';

import { SingleCategorySidebarComponent } from './single-category-sidebar.component';
import { SingleCategoryInfoBoxComponent } from './components/single-category-info-box/single-category-info-box.component';
import { SingleCategoryTabBoxComponent } from './components/single-category-tab-box/single-category-tab-box.component';
import { SingleCategoryRelatedBoxComponent } from './components/single-category-related-box/single-category-related-box.component';

@NgModule({
  declarations: [
    SingleCategorySidebarComponent,
    SingleCategoryInfoBoxComponent,
    SingleCategoryTabBoxComponent,
    SingleCategoryRelatedBoxComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule
  ],
  exports: [
    SingleCategorySidebarComponent,
    SingleCategoryInfoBoxComponent,
    SingleCategoryTabBoxComponent,
    SingleCategoryRelatedBoxComponent
  ]
})

export class SingleCategorySidebarModule { }
