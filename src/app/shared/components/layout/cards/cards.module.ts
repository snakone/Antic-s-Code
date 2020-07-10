import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { UserCardComponent } from './user-card/user-card.component';
import { TestCardComponent } from './test-card/test-card.component';

const Material = [
  MatIconModule,
  MatButtonModule
];

@NgModule({
  declarations: [
    UserCardComponent,
    TestCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ...Material
  ],
  exports: [
    UserCardComponent,
    TestCardComponent
  ]
})

export class CardsModule { }
