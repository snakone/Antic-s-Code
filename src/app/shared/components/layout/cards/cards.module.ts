import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { UserCardComponent } from './user-card/user-card.component';
import { TestCardComponent } from './test-card/test-card.component';
import { EntryCardComponent } from './entry-card/entry-card.component';

const Material = [
  MatIconModule,
  MatButtonModule,
  MatTooltipModule
];

@NgModule({
  declarations: [
    UserCardComponent,
    TestCardComponent,
    EntryCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ...Material
  ],
  exports: [
    UserCardComponent,
    TestCardComponent,
    EntryCardComponent
  ]
})

export class CardsModule { }
