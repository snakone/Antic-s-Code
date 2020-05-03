import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as fromArticles from '@core/ngrx/selectors/article.selectors';
import * as ArticleActions from '@core/ngrx/actions/article.actions';
import { Subject, Observable } from 'rxjs';
import { Article } from '@shared/interfaces/interfaces';
import { takeUntil, filter } from 'rxjs/operators';

@Component({
  selector: 'app-liked-home',
  templateUrl: './liked-home.component.html',
  styleUrls: ['./liked-home.component.scss']
})

export class LikedHomeComponent implements OnInit, OnDestroy {

  articles$: Observable<Article[]>;
  private unsubscribe$ = new Subject<void>();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.checkData();
    this.articles$ = this.store.select(fromArticles.getMostLiked);
  }

  private checkData(): void {
    this.store.select(fromArticles.getMostLikedLoaded)
     .pipe(
       filter(res => !res),
       takeUntil(this.unsubscribe$)
      )
     .subscribe(_ => {
         this.store.dispatch(
           ArticleActions.getMostLiked()
        );
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
