import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { SingleCategoryRouting } from './single-category.routing';

import { SingleCategoryComponent } from './single-category.component';
import { SingleCategoryHeaderModule } from './components/single-category-header/single-category-header.module';
import { SingleCategoryContentModule } from './components/single-category-content/single-category-content.module';
import { SingleCategorySidebarModule } from './components/single-category-sidebar/single-category-sidebar.module';
import { SingleCategorySkeletonComponent } from './components/single-category-skeleton/single-category-skeleton.component';

import { MatIconModule } from '@angular/material/icon';
import { SectionModule } from '@layout/section/section.module';

const Material = [
  MatIconModule
];

@NgModule({
  declarations: [
    SingleCategoryComponent,
    SingleCategorySkeletonComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SingleCategoryRouting,
    SingleCategoryHeaderModule,
    SingleCategoryContentModule,
    SingleCategorySidebarModule,
    SectionModule,
    ...Material
  ]
})

export class SingleCategoryModule { }
