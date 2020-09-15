import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as NewsActions from './news.actions';
import * as fromNews from './news.selectors';
import { NewsPartialState } from '../ngrx.config';

@Injectable()

export class NewsFacade {

  news$ = this.store.select(fromNews.getNews);
  loaded$ = this.store.select(fromNews.getLoaded);
  bySlug$ = this.store.select(fromNews.getBySlug);
  getFull$ = this.store.select(fromNews.getFull);
  last$ = this.store.select(fromNews.getLast);
  lastLoaded$ = this.store.select(fromNews.getLastLoaded);
  viewed$ = this.store.select(fromNews.getViewed);
  viewedLoaded$ = this.store.select(fromNews.getViewedLoaded);
  allLoaded$ = this.store.select(fromNews.getAllLoaded);

  constructor(private store: Store<NewsPartialState>) { }

  public get(): void {
    this.store.dispatch(NewsActions.get());
  }

  public getLastAndViewed(): void {
    this.store.dispatch(NewsActions.getLastAndViewed());
  }

  public getBySlug(slug: string): void {
    this.store.dispatch(NewsActions.getBySlug({slug}));
  }

    public resetBySlug(): void {
    this.store.dispatch(NewsActions.resetSlug());
  }

}
