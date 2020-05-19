import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpRoutingModule } from './help.routing';
import { HelpComponent } from './help.component';
import { LayoutModule } from '@app/shared/components/layout/layout.module';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [HelpComponent],
  imports: [
    CommonModule,
    HelpRoutingModule,
    LayoutModule,
    SharedModule,
  ]
})

export class HelpModule { }
