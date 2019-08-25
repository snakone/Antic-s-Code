import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, ofType, createEffect } from '@ngrx/effects';

import * as CodeActions from '../actions/code.actions';
import { map, concatMap, catchError } from 'rxjs/operators';
import { ArticleService } from '@app/core/services/article/article.service';

@Injectable()

export class CodeEffects {
  constructor(private actions: Actions,
              private articleService: ArticleService) { }

  loadCodeEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(CodeActions.getCode),
      concatMap(() =>
      this.articleService.getArticlesCode()
        .pipe(
          map(res => CodeActions.getCodeSuccess({code: res.code})),
          catchError(error =>
              of(CodeActions.GetCodeFailure({ error: error.message }))
            )
          )
        )
      )
  );

}
