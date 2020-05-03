import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';

import { DisqusComponent } from './disqus/disqus.component';
import { DisqusModule } from 'ngx-disqus';
import { ContentMakerComponent } from './content-maker/content-maker.component';
import { LayoutModule } from './layout/layout.module';
import { LoginModule } from './login/login.module';
import { SnippetsModule } from './snippets/snippets.module';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    ContentMakerComponent,
    DisqusComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DisqusModule,
    LayoutModule,
    LoginModule,
    SnippetsModule,
    MarkdownModule.forChild()
  ],
  exports: [
    ContentMakerComponent,
    LayoutModule,
    DisqusComponent,
    LoginModule,
    SnippetsModule
  ]
})

export class ComponentsModule { }
