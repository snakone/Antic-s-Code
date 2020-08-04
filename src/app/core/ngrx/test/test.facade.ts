import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as TestActions from './test.actions';
import * as fromTest from './test.selectors';
import { TestPartialState } from '../ngrx.config';
import { TestEntry, TestRequest } from '@shared/interfaces/interfaces';

@Injectable()

export class TestFacade {

  public tests$ = this.store.select(fromTest.getTests);
  public entry$ = this.store.select(fromTest.getEntry);
  public byCategory$ = this.store.select(fromTest.getByCategory);
  public loaded$ = this.store.select(fromTest.getLoaded);
  public entryLoaded$ = this.store.select(fromTest.getEntryLoaded);
  public result$ = this.store.select(fromTest.getResult);
  public resultLoaded$ = this.store.select(fromTest.getResultLoaded);
  public entriesByUser$ = this.store.select(fromTest.getEntriesByUser);
  public entriesByUserLoaded$ = this.store.select(fromTest.getEntriesByUserLoaded);

  constructor(private store: Store<TestPartialState>) { }

  public get(): void {
    this.store.dispatch(TestActions.get());
  }

  public getEntriesByUser(): void {
    this.store.dispatch(TestActions.getEntriesByUser());
  }

  public setEntry(entry: TestEntry): void {
    this.store.dispatch(TestActions.setEntry({entry}));
  }

  public saveRequest(request: TestRequest): void {
    this.store.dispatch(TestActions.saveRequest({request}));
  }

  public reset(): void {
    this.store.dispatch(TestActions.reset());
  }

  public resetEntry(): void {
    this.store.dispatch(TestActions.resetEntry());
  }

  public resetEntriesByUser(): void {
    this.store.dispatch(TestActions.resetEntriesByUser());
  }

  public getByCategory(category: string): void {
    this.store.dispatch(TestActions.getByCategory({category}));
  }

}

