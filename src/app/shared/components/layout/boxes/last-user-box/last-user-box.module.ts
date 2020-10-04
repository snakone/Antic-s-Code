import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentBoxModule } from '../content-box/content-box.module';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { LastUserBoxComponent } from './last-user-box.component';

const Material = [
  MatIconModule
];

@NgModule({
  declarations: [LastUserBoxComponent],
  imports: [
    CommonModule,
    ContentBoxModule,
    RouterModule,
    ...Material
  ],
  exports: [
    LastUserBoxComponent
  ]
})

export class LastUserBoxModule { }
