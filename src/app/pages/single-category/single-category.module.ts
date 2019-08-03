import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { ComponentsModule } from '@app/shared/components/components.module';

import { SingleCategoryRoutingModule } from './single-category-routing.module';
import { SingleCategoryComponent } from './single-category.component';
import { SingleCategoryHeaderModule } from './single-category.index';

@NgModule({
  declarations: [
    SingleCategoryComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    SingleCategoryRoutingModule,
    SingleCategoryHeaderModule
  ]
})

export class SingleCategoryModule { }
