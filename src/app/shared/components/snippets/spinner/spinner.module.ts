import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpinnerComponent } from './spinner.component';

const Material = [
  MatProgressSpinnerModule
];


@NgModule({
  declarations: [SpinnerComponent],
  imports: [
    CommonModule,
    ...Material
  ],
  exports: [
    SpinnerComponent
  ]
})

export class SpinnerModule { }
