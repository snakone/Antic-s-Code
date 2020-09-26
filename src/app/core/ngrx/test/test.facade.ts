import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as TestActions from './test.actions';
import * as fromTest from './test.selectors';
import { TestPartialState } from '../ngrx.config';
import { TestRequest } from '@shared/interfaces/interfaces';

@Injectable()

export class TestFacade {

  public tests$ = this.store.select(fromTest.getTests);
  public loaded$ = this.store.select(fromTest.getLoaded);
  public entry$ = this.store.select(fromTest.getEntry);
  public entryLoaded$ = this.store.select(fromTest.getEntryLoaded);
  public byCategory$ = this.store.select(fromTest.getByCategory);
  public result$ = this.store.select(fromTest.getResult);

  constructor(private store: Store<TestPartialState>) { }

  public get(): void {
    this.store.dispatch(TestActions.get());
  }

  public getByCategory(category: string): void {
    this.store.dispatch(TestActions.getByCategory({category}));
  }

  public saveRequest(request: TestRequest): void {
    this.store.dispatch(TestActions.saveRequest({request}));
  }

  public getEntryByUid(uid: string): void {
    this.store.dispatch(TestActions.getEntryByUid({uid}));
  }

  public reset(): void {
    this.store.dispatch(TestActions.reset());
  }

  public resetEntry(): void {
    this.store.dispatch(TestActions.resetEntry());
  }

}

