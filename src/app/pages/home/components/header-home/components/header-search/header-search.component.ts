import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { SearchFacade } from '@core/ngrx/facade/search.facade';

import { SearchRequest } from '@shared/interfaces/interfaces';
import { MAIN_CATEGORIES } from '@shared/data/categories';
import { TAGS } from '@shared/data/article';

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss']
})

export class HeaderSearchComponent implements OnInit {

  searchForm: FormGroup;
  categories = MAIN_CATEGORIES;
  tags = TAGS;

  constructor(
    private searchFacade: SearchFacade,
    private router: Router
  ) { }

  ngOnInit() {
    this.createSearchForm();
  }

  private createSearchForm(): void {
    this.searchForm = new FormGroup({
       value: new FormControl(null, []),
    category: new FormControl(null, []),
         tags: new FormControl(null, [])
    });
  }

  onSubmit(): void {
    if (Object.values(this.searchForm.value).every(v => v == null)) return;
    const request: SearchRequest = this.searchForm.value;
    this.searchFacade.search(request);
    this.router.navigateByUrl('/search');
  }

}
