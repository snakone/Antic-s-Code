import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, ofType, createEffect } from '@ngrx/effects';

import * as ArticleActions from './../actions/article.actions';
import { ArticleService } from '@app/core/services/services.index';
import { map, concatMap, catchError } from 'rxjs/operators';

@Injectable()

export class ArticleEffects {
  constructor(private actions: Actions,
              private service: ArticleService) { }

  loadRequestEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(ArticleActions.getArticles),
      concatMap(() =>
      this.service.getArticles()
        .pipe(
          map(articles => ArticleActions.getArticlesSuccess({articles: articles.articles})),
          catchError(error =>
              of(ArticleActions.GetArticlesFailure({ error: error.message }))
            )
          )
      )
    )
);
}
