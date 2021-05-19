import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestGuard } from '@core/guards/guest.guard';
import { RecoverGuard } from '@core/guards/recover.guard';

import { HelpComponent } from './help.component';
import { HelpIntroComponent } from './components/help-intro/help-intro.component';
import { HelpRecoverComponent } from './components/help-recover/help-recover.component';
import { HelpNewPasswordComponent } from './components/help-new-password/help-new-password.component';

const routes: Routes = [
  {
    path: '',
    component: HelpComponent,
    children: [
      {
        path: '',
        component: HelpIntroComponent
      },
      {
        path: 'recover',
        component: HelpRecoverComponent,
        canActivate: [GuestGuard]
      },
      {
        path: 'recover/:token',
        component: HelpNewPasswordComponent,
        canActivate: [GuestGuard, RecoverGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HelpRoutingModule { }
