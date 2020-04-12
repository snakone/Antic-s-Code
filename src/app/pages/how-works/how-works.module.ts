import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HowWorksRoutingModule } from './how-works.routing';
import { HowWorksComponent } from './how-works.component';
import { LayoutModule } from '@app/shared/components/layout/layout.module';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [HowWorksComponent],
  imports: [
    CommonModule,
    HowWorksRoutingModule,
    LayoutModule,
    SharedModule,
  ]
})

export class HowWorksModule { }
