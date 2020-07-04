import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';

import { UserCardComponent } from './user-card/user-card.component';

import { MatIconModule } from '@angular/material/icon';

const Material = [
  MatIconModule
];

@NgModule({
  declarations: [
    UserCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ...Material
  ],
  exports: [
    UserCardComponent
  ]
})

export class CardsModule { }
