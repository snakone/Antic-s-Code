import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@app/shared/components/layout/layout.module';
import { SharedModule } from '@app/shared/shared.module';

import { ProfileContentComponent } from './profile-content.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ProfileActionsComponent } from './components/profile-actions/profile-actions.component';

@NgModule({
  declarations: [
    ProfileContentComponent,
    ProfileInfoComponent,
    EditProfileComponent,
    ProfileActionsComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    SharedModule
  ],
  exports: [
    ProfileContentComponent,
    ProfileActionsComponent
  ]
})

export class ProfileContentModule { }
