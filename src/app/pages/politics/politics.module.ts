import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoliticsRoutingModule } from './politics.routing';
import { PoliticsComponent } from './politics.component';
import { SharedModule } from '@app/shared/shared.module';
import { LayoutModule } from '@app/shared/components/layout/layout.module';

@NgModule({
  declarations: [PoliticsComponent],
  imports: [
    CommonModule,
    PoliticsRoutingModule,
    LayoutModule,
    SharedModule,
  ]
})

export class PoliticsModule { }
