import { NgModule } from '@angular/core';

import { ImagePipe } from './image/image.pipe';
import { BackgroundPipe } from './background/background.pipe';
import { RandomizerPipe } from './randomizer/randomizer.pipe';
import { SanitizerPipe } from './sanitizer/sanitizer.pipe';
import { DigitsPipe } from './digits/digits.pipe';
import { LogoPipe } from './logo/logo.pipe';
import { LevelPipe } from './level/level.pipe';
import { BadgePipe } from './badge/badge.pipe';
import { ShortDatePipe } from './short-date/short-date.pipe';

@NgModule({
  declarations: [
    ImagePipe,
    BackgroundPipe,
    RandomizerPipe,
    SanitizerPipe,
    DigitsPipe,
    LogoPipe,
    LevelPipe,
    BadgePipe,
    ShortDatePipe
  ],
  exports: [
    ImagePipe,
    BackgroundPipe,
    RandomizerPipe,
    SanitizerPipe,
    DigitsPipe,
    LogoPipe,
    LevelPipe,
    BadgePipe,
    ShortDatePipe
  ]
})

export class PipesModule { }
