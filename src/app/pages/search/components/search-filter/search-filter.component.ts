import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import {
  CATEGORIES,
  TAGS,
  LEVELS,
  BADGES,
  SEARCH_TYPES,
  STAR_LIST
} from '@shared/shared.data';

import { MatCheckboxChange } from '@angular/material/checkbox';
import { SearchRequest, StarList } from '@shared/interfaces/interfaces';
import * as SearchActions from '@core/ngrx/actions/search.actions';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import { PaginationService } from 'ngx-pagination';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})

export class SearchFilterComponent implements OnInit {

  searchForm: FormGroup;
  categories = CATEGORIES;
  tags = TAGS;
  levels = LEVELS;
  badges = BADGES;
  types = SEARCH_TYPES;
  list = [];
  levelsArray = [] as string[];
  badgesArray = [] as string[];
  starsArray = [] as number[];
  active = false;

  constructor(
    private store: Store<AppState>,
    private pagination: PaginationService
  ) { }

  ngOnInit() {
    this.createSearchForm();
    this.list = this.resetList(STAR_LIST);
  }

  private createSearchForm(): void {
    this.searchForm = new FormGroup({
       value: new FormControl(null, []),
    category: new FormControl(null, []),
         tag: new FormControl(null, []),
       level: new FormControl(null, []),
        type: new FormControl(null, []),
        sort: new FormControl(null, [])
    });
  }

  public submit(): void {
    const request: SearchRequest = this.searchForm.value;
    request.stars = this.starsArray;
    request.badges = this.badgesArray;
    request.level = this.levelsArray;

    if (request.stars.length === 0) { request.stars = null; }
    if (request.badges.length === 0) { request.badges = null; }
    if (request.level.length === 0) { request.level = null; }

    this.store.dispatch(SearchActions.searchContent({ request }));
    this.scroll('search-section');

    setTimeout(() => {
      this.pagination.setCurrentPage('result-pagination', 1);
    }, 1000);
  }

  public levelChanged(e: MatCheckboxChange): void {
    const level = e.source.value;
    e.checked ? this.levelsArray.push(level) :
    this.levelsArray = this.levelsArray.filter((l: string) => l !== level);
  }

  public badgeChanged(e: MatCheckboxChange): void {
    const badge = e.source.value;
    e.checked ? this.badgesArray.push(badge) :
    this.badgesArray = this.badgesArray.filter((b: string) => b !== badge);
  }

  public starChanged(e: MatCheckboxChange): void {
    const star = Number(e.source.value);
    e.checked ? this.starsArray.push(star) :
    this.starsArray = this.starsArray.filter((s: number) => s !== star);
  }

  private scroll(id: string): void {
    const el = document.getElementById(id);
    if (el) { el.scrollIntoView({ behavior: 'auto', block: 'start' }); }
  }

  private resetList(list: StarList[]): StarList[] {
    list.forEach((l: StarList) => l.active = false);
    return list;
  }

}
