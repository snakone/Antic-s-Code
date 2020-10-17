import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentBoxModule } from '../content-box/content-box.module';
import { CategoryTestBoxComponent } from './category-test-box.component';
import { PipesModule } from '@shared/pipes/pipes.module';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

const Material = [
  MatIconModule
];

@NgModule({
  declarations: [CategoryTestBoxComponent],
  imports: [
    CommonModule,
    ContentBoxModule,
    PipesModule,
    RouterModule,
    ...Material
  ],
  exports: [
    CategoryTestBoxComponent
  ]
})

export class CategoryTestBoxModule { }
