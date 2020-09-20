import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsPreviewCardComponent } from './news-preview-card/news-preview-card.component';
import { NewsPreviewSkeletonComponent } from './news-preview-skeleton/news-preview-skeleton.component';
import { ComponentsModule } from '../../components.module';
import { PipesModule } from '@app/shared/pipes/pipes.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    NewsPreviewCardComponent,
    NewsPreviewSkeletonComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    TranslateModule,
    PipesModule
  ],
  exports: [
    NewsPreviewCardComponent,
    NewsPreviewSkeletonComponent
  ]
})

export class NewsLayoutModule { }
