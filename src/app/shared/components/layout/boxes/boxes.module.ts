import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';

import { CodeBoxComponent } from './code-box/code-box.component';
import { ContentBoxComponent } from './content-box/content-box.component';
import { LastArticlesBoxComponent } from './last-articles-box/last-articles-box.component';
import { LinksBoxComponent } from './links-box/links-box.component';
import { StickyBoxComponent } from './sticky-box/sticky-box.component';
import { TagBoxComponent } from './tag-box/tag-box.component';
import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
  declarations: [
    CodeBoxComponent,
    ContentBoxComponent,
    LastArticlesBoxComponent,
    LinksBoxComponent,
    StickyBoxComponent,
    TagBoxComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HighlightModule
  ],
  exports: [
    CodeBoxComponent,
    ContentBoxComponent,
    LastArticlesBoxComponent,
    LinksBoxComponent,
    StickyBoxComponent,
    TagBoxComponent,
  ]
})

export class BoxesModule { }
