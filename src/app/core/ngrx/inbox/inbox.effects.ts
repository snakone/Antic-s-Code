import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as InboxActions from './inbox.actions';
import { map, concatMap, catchError } from 'rxjs/operators';
import { InboxService } from '@core/services/inbox/inbox.service';

@Injectable()

export class InboxEffects {

  constructor(
    private actions: Actions,
    private inboxSrv: InboxService
  ) { }

  // GET INBOX
  getInboxEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(InboxActions.get),
      concatMap(() => this.inboxSrv.get()
        .pipe(
          map(inbox => InboxActions.getSuccess({inbox})),
          catchError(error =>
              of(InboxActions.getFailure({ error: error.message }))
    ))))
  );

  // SEND INBOX
  sendInboxEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(InboxActions.send),
      concatMap((action) => this.inboxSrv.send(action.message)
        .pipe(
          map(result => InboxActions.sendSuccess({result})),
          catchError(error =>
              of(InboxActions.sendFailure({ error: error.message }))
    ))))
  );

  // SET INBOX
  setInboxEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(InboxActions.set),
      map((selected) => InboxActions.setSuccess({selected: selected.message}),
          catchError(error =>
              of(InboxActions.setFailure({ error: error.message }))
    ))
  ));

}
