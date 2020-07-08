import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';

import * as ChatActions from '@core/ngrx/actions/chat.actions';
import * as fromChat from '@core/ngrx/selectors/chat.selectors';

@Injectable({providedIn: 'root'})

export class ChatFacade {

  messages$ = this.store.select(fromChat.getMessages);
  loaded$ = this.store.select(fromChat.getLoaded);

  constructor(private store: Store<AppState>) { }

  public getMessages(): void {
    this.store.dispatch(ChatActions.getMessages());
  }

  public getFirst(): void {
    this.store.dispatch(ChatActions.getFirst());
  }

  public send(request: string): void {
    this.store.dispatch(ChatActions.send({request}));
  }

}
