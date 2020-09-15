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
  countLoaded$ = this.store.select(fromArticles.getCountLoaded);
  last$ = this.store.select(fromArticles.getLast);
  lastCountLoaded$ = this.store.select(fromArticles.getLastAndCountLoaded);
  mostLiked$ = this.store.select(fromArticles.getMostLiked);
  mostLikedLoaded$ = this.store.select(fromArticles.getMostLikedLoaded);
  mostViewed$ = this.store.select(fromArticles.getMostViewed);
  mostViewedLoaded$ = this.store.select(fromArticles.getMostViewedLoaded);

  constructor(private store: Store<AppState>) { }

  public get(): void {
    this.store.dispatch(ArticleActions.get());
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

  public getByCategoryCount(): void {
    this.store.dispatch(ArticleActions.getByCategoryCount());
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

  public getCount(): void {
    this.store.dispatch(ArticleActions.getCount());
  }

  public getLast(): void {
    this.store.dispatch(ArticleActions.getLast());
  }

  public getLiked(): void {
    this.store.dispatch(ArticleActions.getMostLiked());
  }

  public getViewed(): void {
    this.store.dispatch(ArticleActions.getMostViewed());
  }

}
