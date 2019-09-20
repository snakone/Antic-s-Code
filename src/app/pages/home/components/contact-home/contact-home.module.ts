import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { LayoutModule } from '@app/shared/components/layout/layout.module';

import { ContactHomeComponent } from './contact-home.component';
import { ContactHomeInputComponent } from './components/contact-home-input/contact-home-input.component';

@NgModule({
  declarations: [
    ContactHomeComponent,
    ContactHomeInputComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule
  ],
  exports: [
    ContactHomeComponent
  ]
})

export class ContactHomeModule { }
