import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';

import { HeaderSearchComponent } from './components/header-search/header-search.component';
import { HeaderCategoryComponent } from './components/header-category/header-category.component';
import { HeaderHomeComponent } from './header-home.component';

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
