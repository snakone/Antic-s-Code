import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRouting } from './users.routing';

import { SharedModule } from '@app/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';

import { PageHeaderModule } from '@layout/page-header/page-header.module';
import { SectionModule } from '@layout/section/section.module';
import { BoxesModule } from '@layout/boxes/boxes.module';
import { CardsModule } from '@layout/cards/cards.module';
import { PaginationModule } from '@layout/pagination/pagination.module';

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
    SharedModule,
    BoxesModule,
    CardsModule,
    PaginationModule,
    ...Material
  ]
})

export class UsersModule { }
