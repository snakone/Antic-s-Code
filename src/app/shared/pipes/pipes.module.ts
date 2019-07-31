import { NgModule } from '@angular/core';

import { ImagePipe } from './image/image.pipe';
import { BackgroundPipe } from './background/background.pipe';

@NgModule({
  declarations: [
    ImagePipe,
    BackgroundPipe
  ],
  imports: [],
  exports: [
    ImagePipe,
    BackgroundPipe
  ]
})

export class PipesModule { }
