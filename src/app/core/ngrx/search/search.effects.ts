import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as SearchActions from './search.actions';
import { map, concatMap, catchError } from 'rxjs/operators';
import { SearchService } from '@core/services/search/search.service';

@Injectable()

export class SearchEffects {

  constructor(
    private actions: Actions,
    private searchSrv: SearchService
  ) { }

  // SEARCH CONTENT
  searchContentEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(SearchActions.searchContent),
      concatMap((action) =>
      this.searchSrv.searchContent(action.request)
        .pipe(
          map(result => SearchActions.searchContentSuccess({ result })),
          catchError(error =>
              of(SearchActions.searchContentFailure({ error: error.message }))
    ))))
  );
}
