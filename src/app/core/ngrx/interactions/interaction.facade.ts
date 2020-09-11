import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as InterActions from './interaction.actions';
import * as fromInteractions from './interaction.selectors';
import { IntersPartialState } from '../ngrx.config';

@Injectable()

export class InterFacade {

  public byUser$ = this.store.select(fromInteractions.getByUser);

  constructor(private store: Store<IntersPartialState>) { }

  public getByUser(): void {
    this.store.dispatch(InterActions.getByUser());
  }

}
