import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchRouting } from './search.routing';
import { LayoutModule } from '@app/shared/components/layout/layout.module';
import { SharedModule } from '@app/shared/shared.module';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { ArticlesGridModule } from '@app/shared/components/layout/grid/articles-grid/articles-grid.module';
import { SearchSortBarComponent } from './components/search-result/components/search-sort-bar/search-sort-bar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchEmptyComponent } from './components/search-result/components/search-empty/search-empty.component';

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
    NgxPaginationModule
  ]
})

export class SearchModule { }
