import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as TestActions from './test.actions';
import * as fromTest from './test.selectors';
import { TestPartialState } from '../ngrx.config';

@Injectable()

export class TestFacade {

  public tests$ = this.store.select(fromTest.getTests);
  public loaded$ = this.store.select(fromTest.getLoaded);
  public byCategory$ = this.store.select(fromTest.getByCategory);

  constructor(private store: Store<TestPartialState>) { }

  public get(): void {
    this.store.dispatch(TestActions.get());
  }

  public reset(): void {
    this.store.dispatch(TestActions.reset());
  }

  public getByCategory(category: string): void {
    this.store.dispatch(TestActions.getByCategory({category}));
  }

}

