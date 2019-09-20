import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@app/shared/components/layout/layout.module';
import { SharedModule } from '@app/shared/shared.module';

import { ProfileContentComponent } from './profile-content.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';

@NgModule({
  declarations: [
    ProfileContentComponent,
    ProfileInfoComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    SharedModule
  ],
  exports: [ProfileContentComponent]
})

export class ProfileContentModule { }
