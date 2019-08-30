import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as CategoryActions from './../actions/category.actions';
import { map, concatMap, catchError } from 'rxjs/operators';
import { CategoryService } from '@app/core/services/category/category.service';

@Injectable()

export class CategoryEffects {
  constructor(private actions: Actions,
              private categoryService: CategoryService) { }

  loadCategoriesEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(CategoryActions.getCategories),
      concatMap(() =>
      this.categoryService.getCategories()
        .pipe(
          map(res => CategoryActions.getCategoriesSuccess({categories: res.categories})),
          catchError(error =>
              of(CategoryActions.GetCategoriesFailure({ error: error.message }))
            )
          )
        )
      )
  );
}
