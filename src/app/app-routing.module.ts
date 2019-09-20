import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Error404Component } from './shared/components/error404/error404.component';
import { ProfileGuard } from './core/guards/profile.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module')
                        .then(mod => mod.HomeModule), data: {name: 'Home'}
  },
  {
    path: 'categories',
    loadChildren: () => import('./pages/categories/categories.module')
                        .then(mod => mod.CategoriesModule), data: {name: 'Categories'}
  },
  {
    path: 'articles',
    loadChildren: () => import('./pages/articles/articles.module')
                        .then(mod => mod.ArticlesModule), data: {name: 'Articles'}
  },
  {
    path: 'code',
    loadChildren: () => import('./pages/code/code.module')
                        .then(mod => mod.CodeModule), data: {name: 'Code'}
  },
  {
    path: 'category/:name',
    loadChildren: () => import('./pages/single-category/single-category.module')
                        .then(mod => mod.SingleCategoryModule), data: {name: 'Category'}
  },
  {
    path: 'article/:slug',
    loadChildren: () => import('./pages/single-article/single-article.module')
                        .then(mod => mod.SingleArticleModule), data: {name: 'Article'}
  },
  {
    path: 'profile',
    canActivate: [ProfileGuard],
    loadChildren: () => import('./pages/profile/profile.module')
                        .then(mod => mod.ProfileModule), data: {name: 'Profile'}
  },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes, { scrollPositionRestoration: 'enabled' }
  )],
  exports: [RouterModule]
})

export class AppRoutingModule { }
