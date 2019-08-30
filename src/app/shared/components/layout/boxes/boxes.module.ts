import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';

import { ContentBoxComponent } from './content-box/content-box.component';
import { LastArticlesBoxComponent } from './last-articles-box/last-articles-box.component';
import { StickyBoxComponent } from './sticky-box/sticky-box.component';
import { TagBoxComponent } from './tag-box/tag-box.component';
import { CodeBoxComponent } from './code-box/code-box.component';
import { HighlightModule } from 'ngx-highlightjs';
import { LinksBoxComponent } from './links-box/links-box.component';

@NgModule({
  declarations: [
    ContentBoxComponent,
    LastArticlesBoxComponent,
    StickyBoxComponent,
    TagBoxComponent,
    CodeBoxComponent,
    LinksBoxComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HighlightModule,
  ],
  exports: [
    ContentBoxComponent,
    LastArticlesBoxComponent,
    StickyBoxComponent,
    TagBoxComponent,
    CodeBoxComponent,
    LinksBoxComponent
  ]
})

export class BoxesModule { }
