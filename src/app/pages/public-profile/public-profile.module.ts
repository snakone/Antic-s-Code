import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { PublicProfileRouting } from './public-profile.routing';
import { ArticlesSidebarModule } from '@app/pages/articles/components/articles-sidebar/articles-sidebar.module';

import { PublicProfileComponent } from './public-profile.component';

import { BoxesModule } from '@layout/boxes/boxes.module';
import { PageHeaderModule } from '@layout/page-header/page-header.module';
import { SectionModule } from '@layout/section/section.module';

@NgModule({
  declarations: [
    PublicProfileComponent
  ],
  imports: [
    CommonModule,
    PublicProfileRouting,
    SharedModule,
    PageHeaderModule,
    SectionModule,
    BoxesModule,
    ArticlesSidebarModule
  ]
})

export class PublicProfileModule { }
