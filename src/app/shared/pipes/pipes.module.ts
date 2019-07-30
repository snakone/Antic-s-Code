import { NgModule } from '@angular/core';

import { ImagePipe } from './image/image.pipe';
import { SectionBackgroundPipe } from './section-background/section-background.pipe';

@NgModule({
  declarations: [
    ImagePipe,
    SectionBackgroundPipe
  ],
  imports: [],
  exports: [
    ImagePipe,
    SectionBackgroundPipe
  ]
})

export class PipesModule { }
