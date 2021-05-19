import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { SingleCategoryRouting } from './single-category.routing';

import { SingleCategoryContentModule } from './components/single-category-content/single-category-content.module';
import { SingleCategorySidebarModule } from './components/single-category-sidebar/single-category-sidebar.module';
import { MatIconModule } from '@angular/material/icon';
import { SectionModule } from '@layout/section/section.module';
import { SingleContentHeaderModule } from '@layout/single-content-header/single-content-header.module';
import { CategoryAccessModule } from '@store/categories/data-access/category-access.module';

import { SingleCategoryComponent } from './single-category.component';
import { SingleCategorySkeletonComponent } from './components/single-category-skeleton/single-category-skeleton.component';

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
    CategoryAccessModule,
    SharedModule,
    SingleCategoryRouting,
    SingleCategoryContentModule,
    SingleCategorySidebarModule,
    SingleContentHeaderModule,
    SectionModule,
    ...Material
  ]
})

export class SingleCategoryModule { }
