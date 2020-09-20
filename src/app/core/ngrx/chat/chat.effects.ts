import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as ChatActions from './chat.actions';
import { map, concatMap, catchError, tap } from 'rxjs/operators';
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
        of(this.chatSrv.send(action.message))
        .pipe(
          map(message => ChatActions.sendSuccess({ message })),
          catchError(error =>
              of(ChatActions.sendFailure({ error: error.message }))
    ))))
  );

  // LISTEN MESSAGES
  getMessagesEffect$ = createEffect(() => this.actions
  .pipe(
    ofType(ChatActions.listenMessages),
    concatMap(_ =>
      this.chatSrv.listen()
      .pipe(
        map(message => ChatActions.listenMessagesSuccess({ message })),
        catchError(error =>
            of(ChatActions.listenMessagesFailure({ error: error.message }))
    ))))
  );

  // GET MESSAGES
  getFirstEffect$ = createEffect(() => this.actions
  .pipe(
    ofType(ChatActions.getMessages),
    concatMap(_ =>
      this.chatSrv.getMessages()
      .pipe(
        map(messages => ChatActions.getMessagesSuccess({ messages })),
        catchError(error =>
            of(ChatActions.getMessagesFailure({ error: error.message }))
    ))))
  );

  // DELETE MESSAGE BY ID
  deleteByIdEffect$ = createEffect(() => this.actions
  .pipe(
    ofType(ChatActions.deleteById),
    concatMap((action) =>
      this.chatSrv.deleteById(action.id)
      .pipe(
        map(_ => ChatActions.deleteByIdSuccess({id: action.id})),
        catchError(error =>
            of(ChatActions.deleteByIdFailure({ error: error.message }))
    ))))
  );


}
