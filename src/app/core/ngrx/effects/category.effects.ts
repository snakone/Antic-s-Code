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
  // GET CATEGORY BY NAME
  loadCategoryByIdEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(CategoryActions.getCategoryByName),
      concatMap((action) =>
      this.categoryService.getCategoryByName(action.name)
        .pipe(
          map(res => CategoryActions.getCategoryByNameSuccess({category: res.category[0]})),
          catchError(error =>
              of(CategoryActions.getCategoryByNameFailure({ error: error.message }))
          )
        )
      )
    )
  );
}
