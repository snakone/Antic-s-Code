import { Component, OnInit } from '@angular/core';
import { MAIN_CATEGORIES } from '@app/shared/shared.data';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import { Router } from '@angular/router';
import * as SearchActions from '@core/ngrx/actions/search.actions';

@Component({
  selector: 'app-navbar-search',
  templateUrl: './navbar-search.component.html',
  styleUrls: ['./navbar-search.component.scss']
})

export class NavBarSearchComponent implements OnInit {

  focused = false;
  categories = MAIN_CATEGORIES;
  value: string;

  constructor(private store: Store<AppState>,
              private router: Router) { }

  ngOnInit() { }

  focusOut(): void {
    this.focused = false;
    if (!this.value) { this.value = ''; }
    this.store.dispatch(SearchActions
      .searchContent({ request: { value: this.value } }));
    this.router.navigateByUrl('/search');
  }

}
