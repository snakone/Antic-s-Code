import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchRouting } from './search.routing';

import { LayoutModule } from '@layout/layout.module';
import { SharedModule } from '@shared/shared.module';
import { ArticlesGridModule } from '@layout/grid/articles-grid/articles-grid.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { SearchResultComponent } from './components/search-result/search-result.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { SearchSortBarComponent } from './components/search-sort-bar/search-sort-bar.component';
import { SearchEmptyComponent } from './components/search-result/components/search-empty/search-empty.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const Material = [
  MatFormFieldModule,
  MatSelectModule,
  MatIconModule,
  MatTooltipModule,
  MatCheckboxModule,
  MatInputModule,
  MatButtonModule
];

@NgModule({
  declarations: [
    SearchComponent,
    SearchResultComponent,
    SearchFilterComponent,
    SearchSortBarComponent,
    SearchEmptyComponent
  ],
  imports: [
    CommonModule,
    SearchRouting,
    LayoutModule,
    SharedModule,
    ArticlesGridModule,
    NgxPaginationModule,
    ...Material
  ]
})

export class SearchModule { }
