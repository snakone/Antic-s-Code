import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as ChatActions from './chat.actions';
import * as fromChat from './chat.selectors';
import { ChatPartialState } from '../ngrx.config';

@Injectable()

export class ChatFacade {

  messages$ = this.store.select(fromChat.getMessages);
  loaded$ = this.store.select(fromChat.getLoaded);

  constructor(private store: Store<ChatPartialState>) { }

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
