import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ArticleLayoutModule } from '../article-layout/article-layout.module';
import { MarkdownModule } from 'ngx-markdown';

import { ContentBoxComponent } from './content-box/content-box.component';
import { LinksBoxComponent } from './links-box/links-box.component';
import { StickyBoxComponent } from './sticky-box/sticky-box.component';
import { IndexBoxComponent } from './index-box/index-box.component';
import { SettingsBoxComponent } from './settings-box/settings-box.component';
import { ProfileInfoBoxComponent } from './profile-info-box/profile-info-box.component';
import { RelatedArticlesBoxComponent } from './related-articles-box/related-articles-box.component';
import { UserArticlesBoxComponent } from './user-articles-box/user-articles-box.component';

@NgModule({
  declarations: [
    ContentBoxComponent,
    LinksBoxComponent,
    StickyBoxComponent,
    IndexBoxComponent,
    SettingsBoxComponent,
    ProfileInfoBoxComponent,
    RelatedArticlesBoxComponent,
    UserArticlesBoxComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ArticleLayoutModule,
    MarkdownModule.forChild()
  ],
  exports: [
    ContentBoxComponent,
    LinksBoxComponent,
    StickyBoxComponent,
    IndexBoxComponent,
    SettingsBoxComponent,
    ProfileInfoBoxComponent,
    RelatedArticlesBoxComponent,
    UserArticlesBoxComponent
  ]
})

export class BoxesModule { }
