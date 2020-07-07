import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { ProfileContentComponent } from './profile-content.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BoxesModule } from '@layout/boxes/boxes.module';

const Material = [
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatButtonModule
];

@NgModule({
  declarations: [
    ProfileContentComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BoxesModule,
    ...Material
  ],
  exports: [ProfileContentComponent]
})

export class ProfileContentModule { }
