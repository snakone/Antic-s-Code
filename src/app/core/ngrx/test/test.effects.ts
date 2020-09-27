import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as TestActions from './test.actions';
import { map, concatMap, catchError } from 'rxjs/operators';
import { TestService } from '@core/services/test/test.service';

@Injectable()

export class TestEffects {

  constructor(
    private actions: Actions,
    private testSrv: TestService
  ) { }

  // GET TEST
  getTestEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(TestActions.get),
      concatMap(() =>
      this.testSrv.get()
        .pipe(
          map(tests => TestActions.getSuccess({ tests })),
          catchError(error =>
              of(TestActions.getFailure({ error: error.message }))
    ))))
  );

  // GET BY CATEGORY
  getTestByCategoryEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(TestActions.getByCategory),
      concatMap(action =>
      this.testSrv.getByCategory(action.category)
        .pipe(
          map(test => TestActions.getByCategorySuccess({ test })),
          catchError(error =>
              of(TestActions.getByCategoryFailure({ error: error.message }))
    ))))
  );

  // GET ENTRY BY UID
  getEntryByUidEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(TestActions.getEntryByUid),
      concatMap(action =>
      this.testSrv.getEntryByUid(action.uid)
        .pipe(
          map(entry => TestActions.getEntryByUidSuccess({ entry })),
          catchError(error =>
              of(TestActions.getEntryByUidFailure({ error: error.message }))
    ))))
  );

  // GET ENTRY BY UID
  getResultByUidEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(TestActions.getResultByUid),
      concatMap(action =>
      this.testSrv.getResultByUid(action.uid)
        .pipe(
          map(result => TestActions.getResultByUidSuccess({ result })),
          catchError(error =>
              of(TestActions.getResultByUidFailure({ error: error.message }))
    ))))
  );

  // SAVE TEST RESULT
  saveTestResultEffect$ = createEffect(() => this.actions
  .pipe(
    ofType(TestActions.saveRequest),
    concatMap(action =>
    this.testSrv.saveTestRequest(action.request)
      .pipe(
        map(result => TestActions.saveRequestSuccess({ result })),
        catchError(error =>
            of(TestActions.saveRequestFailure({ error: error.message }))
    ))))
  );

}
