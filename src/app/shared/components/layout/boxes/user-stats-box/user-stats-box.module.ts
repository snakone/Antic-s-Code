import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStatsBoxComponent } from './user-stats-box.component';
import { ContentBoxModule } from '../content-box/content-box.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';

const Material = [
  MatIconModule
];

@NgModule({
  declarations: [UserStatsBoxComponent],
  imports: [
    CommonModule,
    ContentBoxModule,
    TranslateModule,
    ...Material
  ],
  exports: [
    UserStatsBoxComponent
  ]
})

export class UserStatsBoxModule { }
