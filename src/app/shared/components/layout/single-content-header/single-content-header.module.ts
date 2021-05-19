import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { SingleContentHeaderLeftComponent } from './components/single-content-header-left/single-content-header-left.component';
import { SingleContentHeaderRightComponent } from './components/single-content-header-right/single-content-header-right.component';
import { SingleContentHeaderComponent } from './single-content-header.component';

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
    RouterModule,
    ...Material
  ],
  exports: [
    SingleContentHeaderComponent
  ]
})

export class SingleContentHeaderModule { }
