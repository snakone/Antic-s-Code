import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as SearchActions from './../actions/search.actions';
import { map, concatMap, catchError } from 'rxjs/operators';
import { SearchService } from '@app/core/services/search/search.service';

@Injectable()

export class SearchEffects {
  constructor(private actions: Actions,
              private searchService: SearchService) { }
  // SEARCH CONTENT
  searchContentEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(SearchActions.searchContent),
      concatMap((action) =>
      this.searchService.searchContent(action.request)
        .pipe(
          map(res => SearchActions.searchContentSuccess({result: res})),
          catchError(error =>
              of(SearchActions.searchContentFailure({ error: error.message }))
          )
        )
      )
    )
  );
}
