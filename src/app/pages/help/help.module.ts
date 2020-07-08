import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpRoutingModule } from './help.routing';
import { HelpComponent } from './help.component';
import { SharedModule } from '@app/shared/shared.module';

import { PageHeaderModule } from '@layout/page-header/page-header.module';
import { SectionModule } from '@layout/section/section.module';

@NgModule({
  declarations: [HelpComponent],
  imports: [
    CommonModule,
    HelpRoutingModule,
    SharedModule,
    PageHeaderModule,
    SectionModule
  ]
})

export class HelpModule { }
