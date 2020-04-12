import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvantagesRoutingModule } from './advantages.routing';
import { AdvantagesComponent } from './advantages.component';
import { SharedModule } from '@app/shared/shared.module';
import { LayoutModule } from '@app/shared/components/layout/layout.module';

@NgModule({
  declarations: [AdvantagesComponent],
  imports: [
    CommonModule,
    AdvantagesRoutingModule,
    LayoutModule,
    SharedModule,
  ]
})

export class AdvantagesModule { }
