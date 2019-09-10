import { Component, OnInit, OnDestroy } from '@angular/core';
import { Article } from '@app/shared/interfaces/interfaces';
import { Subject, Observable, fromEvent, of } from 'rxjs';
import { takeUntil, debounceTime, switchMap } from 'rxjs/operators';
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
  loading: boolean;

  constructor(private articleService: ArticleService,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.getArticles();
    this.hasEnded();
  }

  getArticles(): void {
    this.store.dispatch(ArticleActions.getArticles());
    this.articles$ = this.store.select(fromArticles.getArticles);
  }

  hasEnded(): void {
    this.store.select(fromArticles.getFullArticles)
      .pipe(takeUntil(this.unsubscribe$),
        switchMap((loaded: boolean) => {
          if (!loaded) {
            return fromEvent(window, 'scroll')
                .pipe(
                debounceTime(300),
                takeUntil(this.unsubscribe$)
              );
          } else { return of(null); }
        })).subscribe(e => { if (e) { this.makeScroll(e); }});
  }

  makeScroll(e): void {
    try {
      const top = e.target.scrollingElement.scrollTop;
      const offset = document.getElementById('articles-section').offsetHeight;
      if (offset - top <= 360) {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.store.dispatch(ArticleActions.getArticles());
        }, 300);
     }
    } catch (err) {}
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.articleService.resetPage();
    this.store.dispatch(ArticleActions.ResetArticles());
  }

}
