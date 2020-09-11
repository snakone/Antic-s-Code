import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactMeComponent } from './contact-me.component';
import { MatIconModule } from '@angular/material/icon';
import { DirectivesModule } from '@shared/directives/directives.module';

const Material = [
  MatIconModule
];

@NgModule({
  declarations: [
    ContactMeComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    ...Material
  ],
  exports: [
    ContactMeComponent
  ]
})

export class ContactMeModule { }
