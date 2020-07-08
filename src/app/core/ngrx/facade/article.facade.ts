import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';

import * as ArticleActions from '@core/ngrx/actions/article.actions';
import * as fromArticles from '@core/ngrx/selectors/article.selectors';

import { TagRequest } from '@shared/interfaces/interfaces';

@Injectable({providedIn: 'root'})

export class ArticlesFacade {

  public articles$ = this.store.select(fromArticles.get);
  public loaded$ = this.store.select(fromArticles.getLoaded);
  public getFull$ = this.store.select(fromArticles.getFull);
  public byUser$ = this.store.select(fromArticles.getByUser);
  public byUserLoaded$ = this.store.select(fromArticles.getByUserLoaded);
  public bySlug$ = this.store.select(fromArticles.getBySlug);
  public byCategory$ = this.store.select(fromArticles.getByCategory);
  public byCategoryLoaded$ = this.store.select(fromArticles.getByCategoryLoaded);
  public byCategoryCount$ = this.store.select(fromArticles.getByCategoryCount);
  public byCategoryCountLoaded$ = this.store.select(fromArticles.getCategoryCountLoaded);
  public byTags$ = this.store.select(fromArticles.getByTags);
  public byTagsLoaded$ = this.store.select(fromArticles.getByTagsLoaded);
  public count$ = this.store.select(fromArticles.getCount);
  public countLoaded$ = this.store.select(fromArticles.getCountLoaded);
  public last$ = this.store.select(fromArticles.getLast);
  public lastCountLoaded$ = this.store.select(fromArticles.getLastAndCountLoaded);
  public mostLiked$ = this.store.select(fromArticles.getMostLiked);
  public mostLikedLoaded$ = this.store.select(fromArticles.getMostLikedLoaded);
  public mostViewed$ = this.store.select(fromArticles.getMostViewed);
  public mostViewedLoaded$ = this.store.select(fromArticles.getMostViewedLoaded);

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
