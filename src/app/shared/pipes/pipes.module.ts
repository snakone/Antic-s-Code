import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryImagePipe } from './category/category-image.pipe';

@NgModule({
  declarations: [
    CategoryImagePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CategoryImagePipe
  ]
})

export class PipesModule { }
