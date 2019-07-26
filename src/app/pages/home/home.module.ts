import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { HeaderSearchComponent } from './components/header-search/header-search.component';
import { SharedModule } from '@app/shared/shared.module';
import { HeaderCategoryComponent } from './components/header-category/header-category.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    HeaderSearchComponent,
    HeaderCategoryComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})

export class HomeModule { }
