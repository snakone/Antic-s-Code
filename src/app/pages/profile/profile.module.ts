import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRouting } from './profile.routing';

import { SectionModule } from '@layout/section/section.module';
import { PageHeaderModule } from '@layout/page-header/page-header.module';
import { InboxAccessModule } from '@store/inbox/data-access/inbox-access.module';
import { ProfileInboxModule } from './components/profile-inbox/profile-inbox.module';

import { ProfileComponent } from './profile.component';
import { ProfileContentModule } from './components/profile-content/profile-content.module';


@NgModule({
  declarations: [
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    ProfileRouting,
    PageHeaderModule,
    SectionModule,
    ProfileContentModule,
    ProfileInboxModule,
    InboxAccessModule
  ]
})

export class ProfileModule { }
