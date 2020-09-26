import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchRouting } from './search.routing';

import { SharedModule } from '@shared/shared.module';
import { SnippetsModule } from '@shared/components/snippets/snippets.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { PageHeaderModule } from '@layout/page-header/page-header.module';
import { SectionModule } from '@layout/section/section.module';
import { ContentBoxModule } from '@layout/boxes/content-box/content-box.module';
import { PaginationModule } from '@shared/components/snippets/pagination/pagination.module';
import { GridModule } from '@layout/grid/grid.module';

import { SearchResultComponent } from './components/search-result/search-result.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { SearchSortBarComponent } from './components/search-sort-bar/search-sort-bar.component';
import { SearchEmptyComponent } from './components/search-result/components/search-empty/search-empty.component';

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
    SharedModule,
    PaginationModule,
    GridModule,
    SnippetsModule,
    PageHeaderModule,
    SectionModule,
    ContentBoxModule,
    ...Material,
  ]
})

export class SearchModule { }
