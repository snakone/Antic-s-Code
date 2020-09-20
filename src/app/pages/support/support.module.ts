import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportRoutingModule } from './support.routing';
import { SupportComponent } from './support.component';
import { SharedModule } from '@app/shared/shared.module';

import { PageHeaderModule } from '@layout/page-header/page-header.module';
import { SectionModule } from '@layout/section/section.module';

@NgModule({
  declarations: [SupportComponent],
  imports: [
    CommonModule,
    SupportRoutingModule,
    PageHeaderModule,
    SectionModule,
    SharedModule,
  ]
})

export class SupportModule { }
