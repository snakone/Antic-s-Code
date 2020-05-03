import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact.routing';
import { ContactComponent } from './contact.component';
import { SharedModule } from '@app/shared/shared.module';
import { LayoutModule } from '@app/shared/components/layout/layout.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    LayoutModule,
    SharedModule,
  ]
})

export class ContactModule { }
