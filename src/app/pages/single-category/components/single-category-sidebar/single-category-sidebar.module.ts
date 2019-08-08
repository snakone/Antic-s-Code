import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { ComponentsModule } from '@app/shared/components/components.module';

import { SingleCategorySidebarComponent } from './single-category-sidebar.component';
import { SingleCategoryInfoBoxComponent } from './components/single-category-info-box/single-category-info-box.component';
import { SingleCategoryStickyBoxComponent } from './components/single-category-sticky-box/single-category-sticky-box.component';

@NgModule({
  declarations: [
    SingleCategorySidebarComponent,
    SingleCategoryInfoBoxComponent,
    SingleCategoryStickyBoxComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule
  ],
  exports: [
    SingleCategorySidebarComponent,
    SingleCategoryInfoBoxComponent
  ]
})

export class SingleCategorySidebarModule { }
