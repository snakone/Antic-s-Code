import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollaborateComponent } from './collaborate.component';

const routes: Routes = [
  {
    path: '',
    component: CollaborateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CollaborateRoutingModule { }
