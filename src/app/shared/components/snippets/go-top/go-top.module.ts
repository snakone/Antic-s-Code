import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { GoTopComponent } from './go-top.component';
import { DirectivesModule } from '@shared/directives/directives.module';

const Material = [
  MatIconModule
];

@NgModule({
  declarations: [
    GoTopComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    ...Material
  ],
  exports: [
    GoTopComponent
  ]
})

export class GoTopModule { }
