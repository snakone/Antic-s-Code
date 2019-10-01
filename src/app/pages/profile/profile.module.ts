import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@app/shared/components/layout/layout.module';
import { ProfileRouting } from './profile.routing';
import { SharedModule } from '@app/shared/shared.module';

import { ProfileComponent } from './profile.component';
import { ArticlesSidebarModule } from '../articles/components/articles-sidebar/articles-sidebar.module';
import { ProfileContentModule } from './components/profile-content/profile-content.module';
import { ProfileActionsComponent } from './components/profile-actions/profile-actions.component';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileActionsComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    SharedModule,
    ProfileRouting,
    ProfileContentModule,
    ArticlesSidebarModule
  ]
})

export class ProfileModule { }
