import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { ContactHomeComponent } from './contact-home.component';
import { ContactHomeInputComponent } from './components/contact-home-input/contact-home-input.component';

import { MatIconModule } from '@angular/material/icon';
import { SectionModule } from '@layout/section/section.module';

const Material = [
  MatIconModule
];

@NgModule({
  declarations: [
    ContactHomeComponent,
    ContactHomeInputComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SectionModule,
    ...Material
  ],
  exports: [
    ContactHomeComponent
  ]
})

export class ContactHomeModule { }
