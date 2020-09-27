import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { PipesModule } from '@shared/pipes/pipes.module';

import { StarRatingComponent } from './star-rating/star-rating.component';
import { StarFilterComponent } from './star-filter/star-filter.component';
import { StarShowComponent } from './star-show/star-show.component';
import { LevelBarComponent } from './level-bar/level-bar.component';

const Material = [
  MatCheckboxModule,
  MatIconModule
];

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    PipesModule,
    ...Material
  ],
  declarations: [
    StarRatingComponent,
    StarFilterComponent,
    StarShowComponent,
    LevelBarComponent
  ],
  exports: [
    StarRatingComponent,
    StarFilterComponent,
    StarShowComponent,
    LevelBarComponent
  ]
})

export class SnippetsModule { }
