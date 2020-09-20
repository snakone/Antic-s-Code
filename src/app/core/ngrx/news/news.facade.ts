import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as NewsActions from './news.actions';
import * as fromNews from './news.selectors';
import { NewsPartialState } from '../ngrx.config';

@Injectable()

export class NewsFacade {

  news$ = this.store.select(fromNews.getNews);
  bySlug$ = this.store.select(fromNews.getBySlug);
  getFull$ = this.store.select(fromNews.getFull);
  last$ = this.store.select(fromNews.getLast);
  viewed$ = this.store.select(fromNews.getViewed);
  dataLoaded$ = this.store.select(fromNews.dataLoaded);

  constructor(private store: Store<NewsPartialState>) { }

  public get(): void {
    this.store.dispatch(NewsActions.get());
    this.store.dispatch(NewsActions.getLastAndViewed());
  }

  public getBySlug(slug: string): void {
    this.store.dispatch(NewsActions.getBySlug({slug}));
  }

  public resetBySlug(): void {
    this.store.dispatch(NewsActions.resetSlug());
  }

}
