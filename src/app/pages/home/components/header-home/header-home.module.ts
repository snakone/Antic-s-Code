import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';

import { HeaderSearchComponent } from './components/header-search/header-search.component';
import { HeaderCategoryComponent } from './components/header-category/header-category.component';
import { HeaderHomeComponent } from './header-home.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const Material = [
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule
];

@NgModule({
  declarations: [
    HeaderHomeComponent,
    HeaderCategoryComponent,
    HeaderSearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ...Material
  ],
  exports: [
    HeaderHomeComponent
  ]
})

export class HeaderHomeModule { }
