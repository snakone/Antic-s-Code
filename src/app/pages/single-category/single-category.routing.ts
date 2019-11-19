import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleCategoryComponent } from './single-category.component';

const routes: Routes = [
  {
    path: '',
    component: SingleCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SingleCategoryRouting { }
