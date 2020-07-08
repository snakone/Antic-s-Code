import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollaborateRoutingModule } from './collaborate.routing';
import { CollaborateComponent } from './collaborate.component';
import { SharedModule } from '@app/shared/shared.module';

import { SectionModule } from '@layout/section/section.module';
import { PageHeaderModule } from '@layout/page-header/page-header.module';

@NgModule({
  declarations: [CollaborateComponent],
  imports: [
    CommonModule,
    CollaborateRoutingModule,
    SharedModule,
    SectionModule,
    PageHeaderModule,
  ]
})

export class CollaborateModule { }
