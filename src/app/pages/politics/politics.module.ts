import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoliticsRoutingModule } from './politics.routing';
import { PoliticsComponent } from './politics.component';
import { SharedModule } from '@app/shared/shared.module';
import { SectionModule } from '@layout/section/section.module';
import { PageHeaderModule } from '@layout/page-header/page-header.module';
import { MarkdownModule } from 'ngx-markdown';
import { BoxesModule } from '@layout/boxes/boxes.module';

@NgModule({
  declarations: [PoliticsComponent],
  imports: [
    CommonModule,
    PoliticsRoutingModule,
    SharedModule,
    PageHeaderModule,
    SectionModule,
    BoxesModule,
    MarkdownModule.forChild()
  ]
})

export class PoliticsModule { }
