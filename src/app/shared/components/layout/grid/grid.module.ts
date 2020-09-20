import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ArticlesGridModule } from '@layout/grid/articles-grid/articles-grid.module';
import { NewsGridModule } from '@layout/grid/news-grid/news-grid.module';
import { CategoryGridComponent } from '@layout/grid/category-grid/category-grid.component';
import { PipesModule } from '@shared/pipes/pipes.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';

const Material = [
  MatButtonModule
];

@NgModule({
  declarations: [
    CategoryGridComponent
  ],
  imports: [
    CommonModule,
    ArticlesGridModule,
    NewsGridModule,
    PipesModule,
    RouterModule,
    TranslateModule,
    ...Material
  ],
  exports: [
    CategoryGridComponent,
    ArticlesGridModule,
    NewsGridModule
  ]
})

export class GridModule { }
