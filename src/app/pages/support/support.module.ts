import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportRoutingModule } from './support.routing';
import { SupportComponent } from './support.component';
import { LayoutModule } from '@app/shared/components/layout/layout.module';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [SupportComponent],
  imports: [
    CommonModule,
    SupportRoutingModule,
    LayoutModule,
    SharedModule,
  ]
})

export class SupportModule { }
