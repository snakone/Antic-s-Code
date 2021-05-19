import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from '@layout/page-header/page-header.module';
import { ContentBoxModule } from '@layout/boxes/content-box/content-box.module';
import { DirectivesModule } from '@shared/directives/directives.module';

import { ProfileInboxComponent } from './profile-inbox.component';
import { ProfileInboxLeftModule } from './components/profile-inbox-left/profile-inbox-left.module';
import { ProfileInboxRightModule } from './components/profile-inbox-right/profile-inbox-right.module';
import { ProfileInboxMobileModule } from './components/profile-inbox-mobile/profile-inbox-mobile.module';

@NgModule({
  declarations: [
    ProfileInboxComponent
  ],
  imports: [
    CommonModule,
    PageHeaderModule,
    ContentBoxModule,
    ProfileInboxLeftModule,
    ProfileInboxRightModule,
    ProfileInboxMobileModule,
    DirectivesModule
  ]
})

export class ProfileInboxModule { }
