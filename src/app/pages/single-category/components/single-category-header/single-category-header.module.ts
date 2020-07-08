import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';

import { SingleCategoryHeaderLeftComponent } from './components/single-category-header-left/single-category-header-left.component';
import { SingleCategoryHeaderRightComponent } from './components/single-category-header-right/single-category-header-right.component';
import { SingleCategoryHeaderComponent } from './single-category-header.component';

import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

const Material = [
  MatIconModule,
  MatFormFieldModule
];

@NgModule({
  declarations: [
    SingleCategoryHeaderComponent,
    SingleCategoryHeaderLeftComponent,
    SingleCategoryHeaderRightComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ...Material
  ],
  exports: [
    SingleCategoryHeaderComponent
  ]
})

export class SingleCategoryHeaderModule { }
