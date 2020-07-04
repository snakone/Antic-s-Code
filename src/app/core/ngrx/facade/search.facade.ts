import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';

import * as SearchActions from '@core/ngrx/actions/search.actions';
import * as fromSearch from '@core/ngrx/selectors/search.selectors';

import { SearchRequest } from '@shared/interfaces/interfaces';

@Injectable({providedIn: 'root'})

export class SearchFacade {

  result$ = this.store.select(fromSearch.getResult);
  searched$ = this.store.select(fromSearch.getSearched);
  request$ = this.store.select(fromSearch.getRequest);
  count$ = this.store.select(fromSearch.getCount);

  constructor(private store: Store<AppState>) { }

  public search(request: SearchRequest): void {
    this.store.dispatch(SearchActions.searchContent({request}));
  }

  public reset(): void {
    this.store.dispatch(SearchActions.resetSearch());
  }

}
