import { NgModule } from '@angular/core';

import { ImagePipe } from './image/image.pipe';
import { BackgroundPipe } from './background/background.pipe';
import { RandomizerPipe } from './randomizer/randomizer.pipe';
import { SanitizerPipe } from './sanitizer/sanitizer.pipe';
import { DigitsPipe } from './digits/digits.pipe';
import { LogoPipe } from './logo/logo.pipe';
import { MorePipe } from './more/more.pipe';

@NgModule({
  declarations: [
    ImagePipe,
    BackgroundPipe,
    RandomizerPipe,
    SanitizerPipe,
    DigitsPipe,
    LogoPipe,
    MorePipe
  ],
  exports: [
    ImagePipe,
    BackgroundPipe,
    RandomizerPipe,
    SanitizerPipe,
    DigitsPipe,
    LogoPipe,
    MorePipe
  ]
})

export class PipesModule { }
