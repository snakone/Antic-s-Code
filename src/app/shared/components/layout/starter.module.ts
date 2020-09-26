import { NgModule } from '@angular/core';

import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';
import { DialogsModule } from './dialogs/dialogs.module';
import { SnackbarsModule } from './snackbars/snackbars.module';
import { LoginModule } from '../login/login.module';
import { PublicChatModule } from '../snippets/public-chat/public-chat.module';
import { GoTopModule } from '../snippets/go-top/go-top.module';
import { LoadingModule } from '../snippets/loading/loading.module';

@NgModule({
  imports: [
    NavbarModule,
    PublicChatModule,
    GoTopModule,
    LoadingModule,
    FooterModule,
    DialogsModule,
    SnackbarsModule,
    LoginModule
  ],
  exports: [
    NavbarModule,
    PublicChatModule,
    GoTopModule,
    LoadingModule,
    FooterModule,
    DialogsModule,
    SnackbarsModule,
    LoginModule
  ]
})

export class StarterModule { }
