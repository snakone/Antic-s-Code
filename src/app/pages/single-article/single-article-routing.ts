import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleArticleComponent } from './single-article.component';

const routes: Routes = [
  {
    path: '',
    component: SingleArticleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SingleArticleRouting { }
