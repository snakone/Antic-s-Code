import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicProfileComponent } from './public-profile.component';

const routes: Routes = [
  {
    path: '',
    component: PublicProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PublicProfileRoutingModule { }
