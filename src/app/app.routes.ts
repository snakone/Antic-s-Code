import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { UserGuard } from '@core/guards/user.guard';
import { TestGuard } from '@core/guards/test.guard';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    data: { name: 'Home' }
  },  // no need lazyload on first component
  {
    path: 'categories',
    loadChildren: () =>
      import('./pages/categories/categories.module')
       .then(mod => mod.CategoriesModule), data: { name: 'Categories' }
  },
  {
    path: 'articles',
    loadChildren: () =>
      import('./pages/articles/articles.module')
       .then(mod => mod.ArticlesModule), data: { name: 'Articles' }
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./pages/users/users.module')
       .then(mod => mod.UsersModule), data: { name: 'Users' }
  },
  {
    path: 'category/:name',
    loadChildren: () =>
      import('./pages/single-category/single-category.module')
       .then(mod => mod.SingleCategoryModule), data: { name: 'Category' }
  },
  {
    path: 'article/:slug',
    loadChildren: () =>
      import('./pages/single-article/single-article.module')
       .then(mod => mod.SingleArticleModule), data: { name: 'Article' }
  },
  {
    path: 'profile',
    canActivate: [UserGuard],
    loadChildren: () =>
      import('./pages/profile/profile.module')
       .then(mod => mod.ProfileModule), data: { name: 'Profile' }
  },
  {
    path: 'profile/:name',
    loadChildren: () =>
      import('./pages/public-profile/public-profile.module')
      .then(mod => mod.PublicProfileModule), data: { name: 'Public Profile' }
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./pages/search/search.module')
       .then(mod => mod.SearchModule), data: { name: 'Search' }
  },
  {
    path: 'about-me',
    loadChildren: () =>
      import('./pages/about-me/about-me.module')
      .then(mod => mod.AboutMeModule), data: { name: 'About Me' }
  },
  {
    path: 'create',
    loadChildren: () =>
      import('./pages/create/create.module')
       .then(mod => mod.CreateModule), data: { name: 'Create' }
  },
  {
    path: 'advantages',
    loadChildren: () =>
      import('./pages/advantages/advantages.module')
      .then(mod => mod.AdvantagesModule), data: { name: 'Advantages' }
  },
  {
    path: 'collaborate',
    loadChildren: () =>
      import('./pages/collaborate/collaborate.module')
       .then(mod => mod.CollaborateModule), data: { name: 'Collaborate' }
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact/contact.module')
      .then(mod => mod.ContactModule), data: { name: 'Contact' }
  },
  {
    path: 'help',
    loadChildren: () =>
      import('./pages/help/help.module')
      .then(mod => mod.HelpModule), data: { name: 'Help' }
  },
  {
    path: 'how-works',
    loadChildren: () =>
      import('./pages/how-works/how-works.module')
      .then(mod => mod.HowWorksModule), data: { name: 'How it Works' }
  },
  {
    path: 'politics',
    loadChildren: () =>
      import('./pages/politics/politics.module')
      .then(mod => mod.PoliticsModule), data: { name: 'Politics' }
  },
  {
    path: 'support',
    loadChildren: () =>
      import('./pages/support/support.module')
       .then(mod => mod.SupportModule), data: { name: 'Support' }
  },
  {
    path: 'test',
    loadChildren: () =>
      import('./pages/test/test.module')
       .then(mod => mod.TestModule), data: { name: 'Test' },
    canActivate: [TestGuard]
  },
  {
    path: 'test/:category',
    loadChildren: () =>
      import('./pages/single-test/single-test.module')
       .then(mod => mod.SingleTestModule), data: { name: 'Single Test' },
    canActivate: [TestGuard]
  }
];
