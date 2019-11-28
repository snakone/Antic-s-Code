import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateArticleRouting } from './create-article.routing';
import { CreateArticleComponent } from './create-article.component';
import { SharedModule } from '@app/shared/shared.module';
import { LayoutModule } from '@layout/layout.module';

@NgModule({
  declarations: [CreateArticleComponent],
  imports: [
    CommonModule,
    LayoutModule,
    SharedModule,
    CreateArticleRouting
  ]
})

export class CreateArticleModule { }
