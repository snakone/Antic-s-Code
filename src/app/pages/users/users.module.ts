import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRouting } from './users.routing';

import { SharedModule } from '@shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';

import { PageHeaderModule } from '@layout/page-header/page-header.module';
import { SectionModule } from '@layout/section/section.module';
import { CardsModule } from '@layout/cards/cards.module';
import { PaginationModule } from '@shared/components/snippets/pagination/pagination.module';
import { ContentBoxModule } from '@app/shared/components/layout/boxes/content-box/content-box.module';
import { StickyBoxModule } from '@app/shared/components/layout/boxes/sticky-box/sticky-box.module';
import { MostActiveBoxModule } from '@layout/boxes/most-active-box/most-active-box.module';

import { UsersContentComponent } from './components/users-content/users-content.component';
import { UsersSidebarComponent } from './components/users-sidebar/users-sidebar.component';
import { UsersComponent } from './users.component';

const Material = [
  MatIconModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatInputModule
];

@NgModule({
  declarations: [
    UsersComponent,
    UsersContentComponent,
    UsersSidebarComponent
  ],
  imports: [
    CommonModule,
    UsersRouting,
    SharedModule,
    NgxPaginationModule,
    PageHeaderModule,
    SectionModule,
    ContentBoxModule,
    StickyBoxModule,
    CardsModule,
    PaginationModule,
    MostActiveBoxModule,
    ...Material
  ]
})

export class UsersModule { }
