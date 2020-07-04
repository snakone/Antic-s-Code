import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@shared/components/layout/layout.module';
import { ProfileRouting } from './profile.routing';
import { SharedModule } from '@shared/shared.module';
import { ArticlesSidebarModule } from '../articles/components/articles-sidebar/articles-sidebar.module';
import { ProfileContentModule } from './components/profile-content/profile-content.module';

import { ProfileComponent } from './profile.component';
import { ProfileActionsComponent } from './components/profile-actions/profile-actions.component';

import { MatButtonModule } from '@angular/material/button';

const Material = [
  MatButtonModule
];

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
    ArticlesSidebarModule,
    ...Material
  ]
})

export class ProfileModule { }
