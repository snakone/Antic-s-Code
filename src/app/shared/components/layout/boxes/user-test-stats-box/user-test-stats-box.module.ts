import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { ContentBoxModule } from '../content-box/content-box.module';
import { RouterModule } from '@angular/router';

import { UserTestStatsBoxComponent } from './user-test-stats-box.component';

@NgModule({
  declarations: [UserTestStatsBoxComponent],
  imports: [
    CommonModule,
    TranslateModule,
    ContentBoxModule,
    RouterModule
  ],
  exports: [UserTestStatsBoxComponent]
})

export class UserTestStatsBoxModule { }
