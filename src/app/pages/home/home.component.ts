import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as ArticleActions from '@core/ngrx/actions/article.actions';
import * as fromArticles from '@core/ngrx/selectors/article.selectors';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.checkData();
  }

  private checkData(): void {
    this.store.select(fromArticles.getHomeLoaded)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((res: boolean) => {
      if (!res) { this.getStoreData(); }
    });
  }

  private getStoreData(): void {
    this.store.dispatch(ArticleActions.getArticlesCount());
    this.store.dispatch(ArticleActions.getMostLikedArticles());
    this.store.dispatch(ArticleActions.getLastArticles());
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
