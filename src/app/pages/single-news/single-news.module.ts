import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleNewsRouting } from './single-news.routing';
import { PageHeaderModule } from '@layout/page-header/page-header.module';
import { SectionModule } from '@layout/section/section.module';
import { SpinnerModule } from '@snippets/spinner/spinner.module';
import { SingleNewsSidebarModule } from './components/single-news-sidebar/single-news-sidebar.module';
import { PipesModule } from '@shared/pipes/pipes.module';
import { ComponentsModule } from '@shared/components/components.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';

import { SingleNewsComponent } from './single-news.component';
import { SingleNewsContentComponent } from './components/single-news-content/single-news-content.component';

const Material = [
  MatIconModule
];

@NgModule({
  declarations: [
    SingleNewsComponent,
    SingleNewsContentComponent
  ],
  imports: [
    CommonModule,
    SingleNewsRouting,
    PageHeaderModule,
    SectionModule,
    SpinnerModule,
    PipesModule,
    TranslateModule,
    SingleNewsSidebarModule,
    ComponentsModule,
    ...Material
  ]
})

export class SingleNewsModule { }
