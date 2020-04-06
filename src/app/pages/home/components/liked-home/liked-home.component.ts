import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as fromArticles from '@core/ngrx/selectors/article.selectors';
import * as ArticleActions from '@core/ngrx/actions/article.actions';
import { Subject } from 'rxjs';
import { Article } from '@app/shared/interfaces/interfaces';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-liked-home',
  templateUrl: './liked-home.component.html',
  styleUrls: ['./liked-home.component.scss']
})

export class LikedHomeComponent implements OnInit, OnDestroy {

  articles: Article[] = [];
  private unsubscribe$ = new Subject<void>();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.checkData();
    this.getLikedArticles();
  }

  private checkData(): void {
    this.store.select(fromArticles.getMostLikedLoaded)
     .pipe(takeUntil(this.unsubscribe$))
     .subscribe((res: boolean) => {
       if (!res) {
         this.store.dispatch(ArticleActions.getMostLikedArticles());
       }
    });
  }

  private getLikedArticles(): void {
    this.store.select(fromArticles.getMostLiked)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((res: Article[]) => {
      if (res.length > 0) { this.articles = res; }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
