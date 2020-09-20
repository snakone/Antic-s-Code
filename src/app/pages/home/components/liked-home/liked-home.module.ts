import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import { LikedHomeComponent } from './liked-home.component';
import { LikedHomeGridComponent } from './components/liked-home-grid/liked-home-grid.component';
import { LikedHomeListComponent } from './components/liked-home-list/liked-home-list.component';

import { MatIconModule } from '@angular/material/icon';
import { SectionModule } from '@layout/section/section.module';

const Material = [
  MatIconModule
];

@NgModule({
  declarations: [
    LikedHomeComponent,
    LikedHomeGridComponent,
    LikedHomeListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    SectionModule,
    ...Material
  ],
  exports: [
    LikedHomeComponent
  ]
})

export class LikedHomeModule { }
