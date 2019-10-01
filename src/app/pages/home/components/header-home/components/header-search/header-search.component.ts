import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CATEGORIES, TAGS } from '@app/shared/shared.data';
import { AppState } from '@app/app.config';
import { Store } from '@ngrx/store';
import * as SearchActions from '@core/ngrx/actions/search.actions';
import { SearchRequest } from '@shared/interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss']
})

export class HeaderSearchComponent implements OnInit {

  searchForm: FormGroup;
  categories = CATEGORIES;
  tags = TAGS;

  constructor(private store: Store<AppState>,
              private router: Router) { }

  ngOnInit() {
    this.createSearchForm();
  }

  private createSearchForm(): void {
    this.searchForm = new FormGroup({
       value: new FormControl(null, []),
    category: new FormControl(null, []),
         tag: new FormControl(null, [])
    });
  }

  onSubmit(): void {
    if (this.searchForm.value.value == null &&
        this.searchForm.value.category == null &&
        this.searchForm.value.tag == null) { return; }
    const request: SearchRequest = this.searchForm.value;
    this.store.dispatch(SearchActions.searchContent({ request }));
    this.router.navigateByUrl('/search');
  }

}
