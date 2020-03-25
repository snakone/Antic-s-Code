import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Error404Component } from './shared/components/error404/error404.component';
import { UserGuard } from './core/guards/user.guard';
import { ErrorGuard } from './core/guards/error.guard';

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
    canActivate: [UserGuard],
    loadChildren: () => import('./pages/profile/profile.module')
                        .then(mod => mod.ProfileModule), data: {name: 'Profile'}
  },
  {
    path: 'profile/:name',
    loadChildren: () => import('./pages/public-profile/public-profile.module')
                        .then(mod => mod.PublicProfileModule), data: {name: 'Public Profile'}
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module')
                        .then(mod => mod.SearchModule), data: {name: 'Search'}
  },
  {
    path: 'about-me',
    loadChildren: () => import('./pages/about-me/about-me.module')
                        .then(mod => mod.AboutMeModule), data: {name: 'About Me'}
  },
  {
    path: 'create',
    canActivate: [],
    loadChildren: () => import('./pages/create/create.module')
                        .then(mod => mod.CreateModule), data: {name: 'Create'}
  },
  { path: '**', canActivate: [ErrorGuard], component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes, { scrollPositionRestoration: 'enabled' }
  )],
  exports: [RouterModule]
})

export class AppRoutingModule { }
