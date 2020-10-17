import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';

import * as StatsActions from './stats.actions';
import * as fromStats from './stats.selectors';
import { filter, map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class StatsFacade {

  public stats$ = this.store.select(fromStats.getStats);
  public loaded$ = this.store.select(fromStats.getStatsLoaded);
  public test$ = this.store.select(fromStats.getTest);
  public byUser$ = this.store.select(fromStats.getByUser);
  public byUserPublic$ = this.store.select(fromStats.getByUserPublic);
  public publicLoaded$ = this.store.select(fromStats.getPublicLoaded);

  constructor(private store: Store<AppState>) { }

  public get(): void {
    this.store.dispatch(StatsActions.get());
  }

  public getByUser(id: string): void {
    this.store.dispatch(StatsActions.getByUser({id}));
  }

  public getByUserPublic(id: string): void {
    this.store.dispatch(StatsActions.getByUserPublic({id}));
  }

  public reset(): void {
    this.store.dispatch(StatsActions.reset());
  }

  public resetPublic(): void {
    this.store.dispatch(StatsActions.resetPublic());
  }

}

