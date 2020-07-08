import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoliticsRoutingModule } from './politics.routing';
import { PoliticsComponent } from './politics.component';
import { SharedModule } from '@app/shared/shared.module';
import { SectionModule } from '@layout/section/section.module';
import { PageHeaderModule } from '@layout/page-header/page-header.module';


@NgModule({
  declarations: [PoliticsComponent],
  imports: [
    CommonModule,
    PoliticsRoutingModule,
    SharedModule,
    PageHeaderModule,
    SectionModule
  ]
})

export class PoliticsModule { }
