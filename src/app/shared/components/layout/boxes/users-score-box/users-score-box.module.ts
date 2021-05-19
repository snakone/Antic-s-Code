import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersScoreBoxComponent } from './users-score-box.component';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { ContentBoxModule } from '../content-box/content-box.module';
import { RouterModule } from '@angular/router';

const Material = [
  MatIconModule
];

@NgModule({
  declarations: [UsersScoreBoxComponent],
  imports: [
    CommonModule,
    ContentBoxModule,
    TranslateModule,
    RouterModule,
    ...Material
  ],
  exports: [
    UsersScoreBoxComponent
  ]
})

export class UsersScoreBoxModule { }
