import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowWorksComponent } from './how-works.component';

const routes: Routes = [
  {
    path: '',
    component: HowWorksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HowWorksRoutingModule { }
