import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { PipesModule } from '@shared/pipes/pipes.module';

import { StarRatingComponent } from './star-rating/star-rating.component';
import { StarFilterComponent } from './star-filter/star-filter.component';
import { LevelBarComponent } from './level-bar/level-bar.component';
import { FormErrorComponent } from './form-error/form-error.component';

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
    LevelBarComponent,
    FormErrorComponent
  ],
  exports: [
    StarRatingComponent,
    StarFilterComponent,
    LevelBarComponent,
    FormErrorComponent
  ]
})

export class SnippetsModule { }
