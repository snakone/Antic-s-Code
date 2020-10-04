import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BoxesModule } from '@layout/boxes/boxes.module';

import { ProfileContentComponent } from './profile-content.component';
import { ProfileActionsComponent } from '../profile-actions/profile-actions.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';

const Material = [
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatTooltipModule
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
    ...Material
  ],
  exports: [ProfileContentComponent]
})

export class ProfileContentModule { }
