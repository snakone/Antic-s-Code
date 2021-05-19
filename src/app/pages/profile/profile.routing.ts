import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { ProfileInboxComponent } from './components/profile-inbox/profile-inbox.component';
import { ProfileContentComponent } from './components/profile-content/profile-content.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: '',
        component: ProfileContentComponent
      },
      {
        path: 'inbox',
        component: ProfileInboxComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProfileRouting { }
