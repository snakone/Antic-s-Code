import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvantagesComponent } from './advantages.component';

const routes: Routes = [
  {
    path: '',
    component: AdvantagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdvantagesRoutingModule { }
