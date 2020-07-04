import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';

import * as InterActions from '@core/ngrx/actions/interaction.actions';
import * as fromInteractions from '@core/ngrx/selectors/interaction.selectors';

@Injectable({providedIn: 'root'})

export class InteractionFacade {

  public byUser$ = this.store.select(fromInteractions.getByUser);

  constructor(private store: Store<AppState>) { }

  public getByUser(): void {
    this.store.dispatch(InterActions.getByUser());
  }

}
