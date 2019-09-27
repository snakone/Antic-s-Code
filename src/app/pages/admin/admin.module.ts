import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin.routing';
import { ComponentsModule } from '@app/shared/components/components.module';
import { SharedModule } from '@app/shared/shared.module';

import { AdminSideBarComponent } from './components/admin-side-bar/admin-side-bar.component';
import { AdminListBoxComponent } from './components/admin-side-bar/components/admin-list-box/admin-list-box.component';
import { ArticlesSidebarModule } from '@app/pages/articles/components/articles-sidebar/articles-sidebar.module';
import { AdminContentComponent } from './components/admin-content/admin-content.component';
import { ArticlePreviewComponent } from './components/article-preview/article-preview.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminSideBarComponent,
    AdminListBoxComponent,
    AdminContentComponent,
    ArticlePreviewComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    SharedModule,
    AdminRoutingModule,
    ArticlesSidebarModule
  ]
})

export class AdminModule { }
