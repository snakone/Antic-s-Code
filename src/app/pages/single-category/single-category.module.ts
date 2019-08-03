import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { ComponentsModule } from '@app/shared/components/components.module';

import { SingleCategoryRoutingModule } from './single-category-routing.module';
import { SingleCategoryComponent } from './single-category.component';
import { SingleCategoryHeaderComponent } from './components/single-category-header/single-category-header.component';

@NgModule({
  declarations: [
    SingleCategoryComponent,
    SingleCategoryHeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    SingleCategoryRoutingModule
  ]
})

export class SingleCategoryModule { }
