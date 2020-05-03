import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import { Article } from '@shared/interfaces/interfaces';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserService } from '@core/services/user/user.service';

import * as ArticleActions from '@core/ngrx/actions/article.actions';
import * as fromArticles from '@core/ngrx/selectors/article.selectors';
import * as InterActions from '@core/ngrx/actions/interaction.actions';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.scss']
})

export class SingleArticleComponent implements OnInit, OnDestroy {

  article$: Observable<Article>;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private userSrv: UserService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.getArticleBySlug();
    this.getInteraction();
    this.article$ = this.store.select(fromArticles.getBySlug)
  }

  private getArticleBySlug(): void {
    this.route.params
     .pipe(takeUntil(this.unsubscribe$))
      .subscribe(params => {
        this.store.dispatch(
          ArticleActions.getBySlug({ slug: params.slug })
        );
    });
  }

  private getInteraction(): void {
    if (this.userSrv.getUser()) {
      this.store.dispatch(
        InterActions.getByUser()
      );
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.store.dispatch(ArticleActions.resetSlug());
  }

}
