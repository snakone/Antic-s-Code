import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleNewsComponent } from './single-news.component';

const routes: Routes = [
  {
    path: '',
    component: SingleNewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SingleNewsRouting { }
