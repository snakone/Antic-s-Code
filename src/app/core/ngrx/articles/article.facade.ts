import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';

import * as ArticleActions from './article.actions';
import * as fromArticles from './article.selectors';

import { TagRequest } from '@shared/interfaces/interfaces';

@Injectable({providedIn: 'root'})

export class ArticlesFacade {

  articles$ = this.store.select(fromArticles.get);
  loaded$ = this.store.select(fromArticles.getLoaded);
  dataLoaded$ = this.store.select(fromArticles.getDataLoaded);
  getFull$ = this.store.select(fromArticles.getFull);
  byUser$ = this.store.select(fromArticles.getByUser);
  byUserLoaded$ = this.store.select(fromArticles.getByUserLoaded);
  bySlug$ = this.store.select(fromArticles.getBySlug);
  byCategory$ = this.store.select(fromArticles.getByCategory);
  byCategoryLoaded$ = this.store.select(fromArticles.getByCategoryLoaded);
  byCategoryCount$ = this.store.select(fromArticles.getByCategoryCount);
  byCategoryCountLoaded$ = this.store.select(fromArticles.getCategoryCountLoaded);
  byTags$ = this.store.select(fromArticles.getByTags);
  byTagsLoaded$ = this.store.select(fromArticles.getByTagsLoaded);
  count$ = this.store.select(fromArticles.getCount);
  last$ = this.store.select(fromArticles.getLast);
  mostLiked$ = this.store.select(fromArticles.getMostLiked);
  mostViewed$ = this.store.select(fromArticles.getMostViewed);
  mostViewedLoaded$ = this.store.select(fromArticles.getMostViewedLoaded);

  constructor(private store: Store<AppState>) { }

  public get(): void {
    this.store.dispatch(ArticleActions.get());
  }

  public getData(): void {
    this.store.dispatch(ArticleActions.getData());
  }

  public getBySlug(slug: string): void {
    this.store.dispatch(ArticleActions.getBySlug({slug}));
  }

  public getByUser(id: string): void {
    this.store.dispatch(ArticleActions.getByUser({id}));
  }

  public getByTags(request: TagRequest): void {
    this.store.dispatch(ArticleActions.getByTags({request}));
  }

  public getByCategory(category: string): void {
    this.store.dispatch(ArticleActions.getByCategory({category}));
  }

  public reset(): void {
    this.store.dispatch(ArticleActions.reset());
  }

  public resetBySlug(): void {
    this.store.dispatch(ArticleActions.resetSlug());
  }

  public resetByUser(): void {
    this.store.dispatch(ArticleActions.resetByUser());
  }

  public resetByCategory(): void {
    this.store.dispatch(ArticleActions.resetByCategory());
  }

  public resetByTags(): void {
    this.store.dispatch(ArticleActions.resetByTags());
  }

}
