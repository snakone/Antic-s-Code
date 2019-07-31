import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '@app/shared/components/components.module';
import { SharedModule } from '@app/shared/shared.module';

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
    ComponentsModule
  ],
  exports: [
    ContactHomeComponent
  ]
})

export class ContactHomeModule { }
