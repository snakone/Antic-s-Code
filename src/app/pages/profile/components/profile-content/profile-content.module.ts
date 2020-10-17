import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import { BoxesModule } from '@layout/boxes/boxes.module';
import { UserStatsBoxModule } from '@layout/boxes/user-stats-box/user-stats-box.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ProfileContentComponent } from './profile-content.component';
import { ProfileActionsComponent } from '../profile-actions/profile-actions.component';

const Material = [
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatTooltipModule,
  MatBadgeModule
];

@NgModule({
  declarations: [
    ProfileContentComponent,
    ProfileActionsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BoxesModule,
    RouterModule,
    UserStatsBoxModule,
    ...Material
  ],
  exports: [ProfileContentComponent]
})

export class ProfileContentModule { }
