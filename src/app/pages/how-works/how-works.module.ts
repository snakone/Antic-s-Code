import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HowWorksRoutingModule } from './how-works.routing';
import { HowWorksComponent } from './how-works.component';

import { SharedModule } from '@app/shared/shared.module';
import { PageHeaderModule } from '@layout/page-header/page-header.module';
import { SectionModule } from '@layout/section/section.module';

@NgModule({
  declarations: [HowWorksComponent],
  imports: [
    CommonModule,
    HowWorksRoutingModule,
    SharedModule,
    PageHeaderModule,
    SectionModule
  ]
})

export class HowWorksModule { }
