import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';

import * as CategoryActions from '@core/ngrx/actions/category.actions';
import * as fromCategories from '@core/ngrx/selectors/category.selectors';

@Injectable({providedIn: 'root'})

export class CategoryFacade {

  byName$ = this.store.select(fromCategories.getByName);

  constructor(private store: Store<AppState>) { }

  public getByName(name: string): void {
    this.store.dispatch(CategoryActions.getByName({name}));
  }

  public reset(): void {
    this.store.dispatch(CategoryActions.reset());
  }

}
