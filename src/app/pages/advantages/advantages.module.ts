import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvantagesRoutingModule } from './advantages.routing';
import { AdvantagesComponent } from './advantages.component';
import { SharedModule } from '@app/shared/shared.module';

import { SectionModule } from '@layout/section/section.module';
import { PageHeaderModule } from '@layout/page-header/page-header.module';


@NgModule({
  declarations: [AdvantagesComponent],
  imports: [
    CommonModule,
    AdvantagesRoutingModule,
    SharedModule,
    SectionModule,
    PageHeaderModule,
  ]
})

export class AdvantagesModule { }
