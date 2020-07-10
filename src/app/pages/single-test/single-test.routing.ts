import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleTestComponent } from './single-test.component';

const routes: Routes = [
  {
    path: '',
    component: SingleTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SingleTestRoutingModule { }
