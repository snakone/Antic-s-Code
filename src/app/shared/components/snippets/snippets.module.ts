import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

import { StarRatingComponent } from './star-rating/star-rating.component';
import { StarFilterComponent } from './star-filter/star-filter.component';
import { StarShowComponent } from './star-show/star-show.component';

const Material = [
  MatCheckboxModule,
  MatIconModule
];

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ...Material
  ],
  declarations: [
    StarRatingComponent,
    StarFilterComponent,
    StarShowComponent
  ],
  exports: [
    StarRatingComponent,
    StarFilterComponent,
    StarShowComponent
  ]
})

export class SnippetsModule { }
