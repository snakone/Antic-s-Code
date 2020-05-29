import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SharedModule } from '@app/shared/shared.module';
import { LayoutModule } from '@app/shared/components/layout/layout.module';
import { UsersRouting } from './users.routing';
import { UsersContentComponent } from './components/users-content/users-content.component';
import { UsersSidebarComponent } from './components/users-sidebar/users-sidebar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MostActiveUsersComponent } from './components/users-sidebar/components/most-active-users/most-active-users.component';

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
  ]
})

export class UsersModule { }
