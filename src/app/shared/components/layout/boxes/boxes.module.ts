import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { ArticleLayoutModule } from '../article-layout/article-layout.module';
import { MarkdownModule } from 'ngx-markdown';
import { NgxPaginationModule } from 'ngx-pagination';

import { LinksBoxComponent } from './links-box/links-box.component';
import { IndexBoxComponent } from './index-box/index-box.component';
import { SettingsBoxComponent } from './settings-box/settings-box.component';
import { ProfileInfoBoxComponent } from './profile-info-box/profile-info-box.component';
import { UserArticlesBoxComponent } from './user-articles-box/user-articles-box.component';
import { ExpansionBoxComponent } from './expansion-box/expansion-box.component';
import { MostViewedBoxComponent } from './most-viewed-box/most-viewed-box.component';
import { RelatedTagsBoxComponent } from './related-tags-box/related-tags-box.component';
import { MostActiveBoxModule } from './most-active-box/most-active-box.module';
import { LastUserBoxModule } from './last-user-box/last-user-box.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ContentBoxModule } from './content-box/content-box.module';
import { StickyBoxModule } from './sticky-box/sticky-box.module';

const Material = [
  MatFormFieldModule,
  MatExpansionModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatTooltipModule
];

@NgModule({
  declarations: [
    LinksBoxComponent,
    IndexBoxComponent,
    SettingsBoxComponent,
    ProfileInfoBoxComponent,
    UserArticlesBoxComponent,
    ExpansionBoxComponent,
    MostViewedBoxComponent,
    RelatedTagsBoxComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ArticleLayoutModule,
    NgxPaginationModule,
    ContentBoxModule,
    StickyBoxModule,
    MostActiveBoxModule,
    LastUserBoxModule,
    MarkdownModule.forChild(),
    ...Material
  ],
  exports: [
    LinksBoxComponent,
    IndexBoxComponent,
    SettingsBoxComponent,
    ProfileInfoBoxComponent,
    UserArticlesBoxComponent,
    ExpansionBoxComponent,
    MostViewedBoxComponent,
    RelatedTagsBoxComponent,
    ContentBoxModule,
    StickyBoxModule,
    MostActiveBoxModule,
    LastUserBoxModule
  ]
})

export class BoxesModule { }
