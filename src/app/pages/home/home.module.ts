import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './home.component';
import { SharedModule } from '@app/shared/shared.module';

import { HeaderHomeModule } from './components/header-home/header-home.module';
import { CategoryHomeModule } from './components/category-home/category-home.module';
import { ArticlesHomeModule } from './components/articles-home/articles-home.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    HeaderHomeModule,
    CategoryHomeModule,
    ArticlesHomeModule
  ]
})

export class HomeModule { }
