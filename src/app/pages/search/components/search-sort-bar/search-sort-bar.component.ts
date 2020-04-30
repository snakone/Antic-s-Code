import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as fromSearch from '@core/ngrx/selectors/search.selectors';
import * as SearchActions from '@core/ngrx/actions/search.actions';

@Component({
  selector: 'app-search-sort-bar',
  templateUrl: './search-sort-bar.component.html',
  styleUrls: ['./search-sort-bar.component.scss']
})

export class SearchSortBarComponent implements OnInit {

  @Output() grid = new EventEmitter<boolean>();
  count$: Observable<number>;
  active = true;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.count$ = this.store.select(fromSearch.getCount);
  }

  sort(): void {
    this.active = !this.active;
    this.grid.emit(this.active);
  }

  reset(): void {
    this.store.dispatch(
      SearchActions.searchContent({request: {value: ''} })
    );
  }

}
