import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as CategoryActions from './../actions/category.actions';
import { map, concatMap, catchError } from 'rxjs/operators';
import { CategoryService } from '@core/services/category/category.service';

@Injectable()

export class CategoryEffects {

  constructor(
    private actions: Actions,
    private categorySrv: CategoryService
  ) { }

  // GET CATEGORY BY NAME
  loadCategoryByNameEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(CategoryActions.getByName),
      concatMap((action) =>
      this.categorySrv.getByName(action.name)
        .pipe(
          map(category => CategoryActions.getByNameSuccess({ category })),
          catchError(error =>
              of(CategoryActions.getByNameFailure({ error: error.message }))
    ))))
  );
}
