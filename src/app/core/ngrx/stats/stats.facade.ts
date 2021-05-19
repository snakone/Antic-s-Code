import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';

import * as StatsActions from './stats.actions';
import * as fromStats from './stats.selectors';

@Injectable({providedIn: 'root'})

export class StatsFacade {

  public stats$ = this.store.select(fromStats.getStats);
  public loaded$ = this.store.select(fromStats.getStatsLoaded);
  public test$ = this.store.select(fromStats.getTest);
  public articles$ = this.store.select(fromStats.getArticles);

  constructor(private store: Store<AppState>) { }

  public get(): void {
    this.store.dispatch(StatsActions.get());
  }

  public reset(): void {
    this.store.dispatch(StatsActions.reset());
  }


}

