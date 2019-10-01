import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@app/shared/components/layout/layout.module';
import { SharedModule } from '@app/shared/shared.module';

import { ProfileContentComponent } from './profile-content.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    ProfileContentComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    SharedModule
  ],
  exports: [ProfileContentComponent]
})

export class ProfileContentModule { }
