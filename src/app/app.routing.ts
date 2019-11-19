import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Error404Component } from './shared/components/error404/error404.component';
import { ProfileGuard } from './core/guards/profile.guard';
import { AdminGuard } from './core/guards/admin.guard';
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
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () => import('./pages/admin/admin.module')
                        .then(mod => mod.AdminModule), data: {name: 'Admin'}
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
