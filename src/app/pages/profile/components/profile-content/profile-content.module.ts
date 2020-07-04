import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@shared/components/layout/layout.module';
import { SharedModule } from '@shared/shared.module';

import { ProfileContentComponent } from './profile-content.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

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
    LayoutModule,
    SharedModule,
    ...Material
  ],
  exports: [ProfileContentComponent]
})

export class ProfileContentModule { }
