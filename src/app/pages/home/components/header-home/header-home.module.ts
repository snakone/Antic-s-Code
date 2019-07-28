import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderSearchComponent } from './header-search/header-search.component';
import { HeaderHomeComponent } from './header-home.component';
import { HeaderCategoryComponent } from './header-category/header-category.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    HeaderHomeComponent,
    HeaderCategoryComponent,
    HeaderSearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HeaderHomeComponent
  ]
})

export class HeaderHomeModule { }
