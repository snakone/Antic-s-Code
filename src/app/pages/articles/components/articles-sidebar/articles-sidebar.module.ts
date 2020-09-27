import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { BoxesModule } from '@layout/boxes/boxes.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { ArticlesSidebarComponent } from './articles-sidebar.component';
import { ArticlesCategoryListBoxComponent } from './components/articles-category-list-box/articles-category-list-box.component';


const Material = [
  MatFormFieldModule,
  MatIconModule
];

@NgModule({
  declarations: [
    ArticlesSidebarComponent,
    ArticlesCategoryListBoxComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BoxesModule,
    RouterModule,
    ...Material
  ],
  exports: [
    ArticlesSidebarComponent
  ]
})

export class ArticlesSidebarModule { }
