import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { ProfileRouting } from './profile.routing';
import { SharedModule } from '@shared/shared.module';
import { ArticlesSidebarModule } from '../articles/components/articles-sidebar/articles-sidebar.module';
import { ProfileContentModule } from './components/profile-content/profile-content.module';

import { BoxesModule } from '@layout/boxes/boxes.module';
import { SectionModule } from '@layout/section/section.module';
import { PageHeaderModule } from '@layout/page-header/page-header.module';

import { ProfileComponent } from './profile.component';
import { ProfileActionsComponent } from './components/profile-actions/profile-actions.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

const Material = [
  MatButtonModule,
  MatIconModule,
  MatTooltipModule
];

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileActionsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProfileRouting,
    ProfileContentModule,
    ArticlesSidebarModule,
    ...Material,
    BoxesModule,
    PageHeaderModule,
    SectionModule
  ]
})

export class ProfileModule { }
