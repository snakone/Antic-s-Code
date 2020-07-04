import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRouting } from './users.routing';

import { SharedModule } from '@app/shared/shared.module';
import { LayoutModule } from '@app/shared/components/layout/layout.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { UsersContentComponent } from './components/users-content/users-content.component';
import { UsersSidebarComponent } from './components/users-sidebar/users-sidebar.component';
import { UsersComponent } from './users.component';
import { MostActiveUsersComponent } from './components/users-sidebar/components/most-active-users/most-active-users.component';

import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';

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
    UsersSidebarComponent,
    MostActiveUsersComponent
  ],
  imports: [
    CommonModule,
    UsersRouting,
    SharedModule,
    NgxPaginationModule,
    LayoutModule,
    SharedModule,
    ...Material
  ]
})

export class UsersModule { }
