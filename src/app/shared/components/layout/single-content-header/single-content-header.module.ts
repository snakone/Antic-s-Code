import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { SingleContentHeaderLeftComponent } from './components/single-content-header-left/single-content-header-left.component';
import { SingleContentHeaderRightComponent } from './components/single-content-header-right/single-content-header-right.component';
import { SingleContentHeaderComponent } from './single-content-header.component';

import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

const Material = [
  MatIconModule,
];

@NgModule({
  declarations: [
    SingleContentHeaderComponent,
    SingleContentHeaderLeftComponent,
    SingleContentHeaderRightComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ...Material
  ],
  exports: [
    SingleContentHeaderComponent
  ]
})

export class SingleContentHeaderModule { }
