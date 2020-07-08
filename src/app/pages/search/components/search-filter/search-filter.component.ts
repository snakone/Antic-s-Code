import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';

import { PaginationService } from 'ngx-pagination';
import { SearchFacade } from '@core/ngrx/facade/search.facade';

import { SearchRequest } from '@shared/interfaces/interfaces';
import { CATEGORIES } from '@shared/data/categories';
import { SEARCH_TYPES } from '@shared/data/search';
import { TAGS, LEVELS, BADGES } from '@shared/data/article';

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
  levelsArray = [] as string[];
  badgesArray = [] as string[];
  starsArray = [] as number[];
  active = false;

  constructor(
    private searchFacade: SearchFacade,
    private pagination: PaginationService
  ) { }

  ngOnInit() {
    this.createSearchForm();
  }

  private createSearchForm(): void {
    this.searchForm = new FormGroup({
       value: new FormControl(null, []),
    category: new FormControl(null, []),
         tags: new FormControl(null, []),
       level: new FormControl(null, []),
        type: new FormControl(null, []),
        sort: new FormControl(null, [])
    });
  }

  public submit(): void {
    const request: SearchRequest = this.searchForm.value;
    request.stars = this.starsArray.length !== 0 ? this.starsArray : null;
    request.badges = this.badgesArray.length !== 0 ? this.badgesArray : null;
    request.level = this.levelsArray.length !== 0 ? this.levelsArray : null;

    this.searchFacade.search(request);
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
    if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  }

}
