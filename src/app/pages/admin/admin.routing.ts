import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { ArticlePreviewComponent } from './components/article-preview/article-preview.component';
import { AdminContentComponent } from './components/admin-content/admin-content.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: AdminContentComponent
      },
      {
        path: 'preview/:slug',
        component: ArticlePreviewComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
