import { NgModule } from '@angular/core';

import { CategoryImagePipe } from './category-image/category-image.pipe';
import { SectionBackgroundPipe } from './section-background/section-background.pipe';

@NgModule({
  declarations: [
    CategoryImagePipe,
    SectionBackgroundPipe
  ],
  imports: [],
  exports: [
    CategoryImagePipe,
    SectionBackgroundPipe
  ]
})

export class PipesModule { }
