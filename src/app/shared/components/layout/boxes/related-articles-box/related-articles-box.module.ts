import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { RelatedArticlesBoxComponent } from './related-articles-box.component';
import { TranslateModule } from '@ngx-translate/core';

const Material = [
  MatIconModule
];

@NgModule({
  declarations: [
    RelatedArticlesBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    ...Material
  ],
  exports: [
    RelatedArticlesBoxComponent
  ]
})

export class RelatedArticlesBoxModule { }
