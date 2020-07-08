import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact.routing';
import { ContactComponent } from './contact.component';
import { SharedModule } from '@app/shared/shared.module';

import { SectionModule } from '@layout/section/section.module';
import { PageHeaderModule } from '@layout/page-header/page-header.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule,
    SectionModule,
    PageHeaderModule
  ]
})

export class ContactModule { }
