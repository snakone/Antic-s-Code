import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as ChatActions from './../actions/chat.actions';
import { map, concatMap, catchError } from 'rxjs/operators';
import { ChatService } from '@core/services/chat/chat.service';

@Injectable()

export class ChatEffects {

  constructor(
    private actions: Actions,
    private chatSrv: ChatService
  ) { }

  // SEND MESSAGE
  sendMessageEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(ChatActions.send),
      concatMap((action) =>
        of(this.chatSrv.send(action.request))
        .pipe(
          map(message => ChatActions.sendSuccess({ message })),
          catchError(error =>
              of(ChatActions.sendFailure({ error: error.message }))
    ))))
  );

  // GET MESSAGES
  getMessagesEffect$ = createEffect(() => this.actions
  .pipe(
    ofType(ChatActions.getMessages),
    concatMap(_ =>
      this.chatSrv.listen()
      .pipe(
        map(message => ChatActions.getMessagesSuccess({ message })),
        catchError(error =>
            of(ChatActions.getMessagesFailure({ error: error.message }))
    ))))
  );

  // GET FIRST
  getFirstEffect$ = createEffect(() => this.actions
  .pipe(
    ofType(ChatActions.getFirst),
    concatMap(_ =>
      this.chatSrv.getMessages()
      .pipe(
        map(messages => ChatActions.getFirstSuccess({ messages })),
        catchError(error =>
            of(ChatActions.getFirstFailure({ error: error.message }))
    ))))
  );
}
