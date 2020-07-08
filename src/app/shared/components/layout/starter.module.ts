import { NgModule } from '@angular/core';

import { ContactAdminModule } from './contact-admin/contact-admin.module';
import { GoTopModule } from './go-top/go-top.module';
import { LoadingModule } from './loading/loading.module';
import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';
import { DialogsModule } from './dialogs/dialogs.module';
import { SnackbarsModule } from './snackbars/snackbars.module';
import { LoginModule } from '../login/login.module';

@NgModule({
  imports: [
    NavbarModule,
    ContactAdminModule,
    GoTopModule,
    LoadingModule,
    FooterModule,
    DialogsModule,
    SnackbarsModule,
    LoginModule
  ],
  exports: [
    NavbarModule,
    ContactAdminModule,
    GoTopModule,
    LoadingModule,
    FooterModule,
    DialogsModule,
    SnackbarsModule,
    LoginModule
  ]
})

export class StarterModule { }
