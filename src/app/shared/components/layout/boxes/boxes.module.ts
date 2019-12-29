import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ArticleLayoutModule } from '../article-layout/article-layout.module';

import { CodeBoxComponent } from './code-box/code-box.component';
import { ContentBoxComponent } from './content-box/content-box.component';
import { LastArticlesBoxComponent } from './last-articles-box/last-articles-box.component';
import { LinksBoxComponent } from './links-box/links-box.component';
import { StickyBoxComponent } from './sticky-box/sticky-box.component';
import { TagBoxComponent } from './tag-box/tag-box.component';
import { ArticleIndexBoxComponent } from './article-index-box/article-index-box.component';
import { SettingsBoxComponent } from './settings-box/settings-box.component';
import { ProfileInfoBoxComponent } from './profile-info-box/profile-info-box.component';
import { RelatedArticlesBoxComponent } from './related-articles-box/related-articles-box.component';

@NgModule({
  declarations: [
    CodeBoxComponent,
    ContentBoxComponent,
    LastArticlesBoxComponent,
    LinksBoxComponent,
    StickyBoxComponent,
    TagBoxComponent,
    ArticleIndexBoxComponent,
    SettingsBoxComponent,
    ProfileInfoBoxComponent,
    RelatedArticlesBoxComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ArticleLayoutModule
  ],
  exports: [
    CodeBoxComponent,
    ContentBoxComponent,
    LastArticlesBoxComponent,
    LinksBoxComponent,
    StickyBoxComponent,
    TagBoxComponent,
    ArticleIndexBoxComponent,
    SettingsBoxComponent,
    ProfileInfoBoxComponent,
    RelatedArticlesBoxComponent
  ]
})

export class BoxesModule { }
