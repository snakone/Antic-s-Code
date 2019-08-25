import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Article } from '@app/shared/interfaces/interfaces';
import { Subject, Observable, combineLatest } from 'rxjs';
import { takeUntil, map, switchMap } from 'rxjs/operators';
import { ArticleService } from '@core/services/article/article.service';
import { AppState } from '@app/app.config';
import { Store } from '@ngrx/store';
import * as ArticleActions from '@core/ngrx/actions/article.actions';
import * as fromArticles from '@core/ngrx/selectors/article.selectors';

@Component({
  selector: 'app-articles-content',
  templateUrl: './articles-content.component.html',
  styleUrls: ['./articles-content.component.scss']
})

export class ArticlesContentComponent implements OnInit, OnDestroy {

  articles$: Observable<Article[]>;
  private unsubscribe$ = new Subject<void>();
  end = false;

  constructor(private articleService: ArticleService,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.getArticles();
    this.hasEnded();
  }

  onScroll(e: boolean): void {
    if (e && !this.end) { this.store.dispatch(ArticleActions.getArticles()); }
  }

  getArticles(): void {
    this.articles$ = this.store.select(fromArticles.getAllArticles);
  }

  hasEnded(): void {
    this.store.select(fromArticles.getFullLoaded)
     .pipe(takeUntil(this.unsubscribe$))
     .subscribe((res: boolean) => {
        this.end = res;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.articleService.resetPage();
  }

}
