import { Component, OnInit, OnDestroy, Renderer2, ViewChild, ElementRef } from '@angular/core';
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

  @ViewChild('loading', { static: true }) loading: ElementRef;
  articles$: Observable<Article[]>;
  private unsubscribe$ = new Subject<void>();

  constructor(private articleService: ArticleService,
              private store: Store<AppState>,
              private renderer: Renderer2) { }

  ngOnInit() {
    this.getArticles();
    this.hasEnded();
  }

  private getArticles(): void {
    this.store.dispatch(ArticleActions.getArticles());
    this.articles$ = this.store.select(fromArticles.getArticles);
  }

  private hasEnded(): void {
    this.store.select(fromArticles.getFullArticles)
      .pipe(takeUntil(this.unsubscribe$),
        switchMap((loaded: boolean) => {
          if (!loaded) {
            return fromEvent(window, 'scroll')
                .pipe(
                debounceTime(300),
                takeUntil(this.unsubscribe$)
              );
          } else {
            try {
              const div = this.loading.nativeElement;
              this.renderer.addClass(div, 'completed');
              return of(null);
            } catch (err) { console.log(err); }
          }
        })).subscribe(e => { if (e) { this.makeScroll(e); }});
  }

  private makeScroll(e: any): void {
    try {
      const top = e.target.scrollingElement.scrollTop;
      const div = this.loading.nativeElement;
      const offset = document.getElementById('articles-section').offsetHeight;
      if (offset - top <= 350) {
        this.renderer.addClass(div, 'loading');
        setTimeout(() => {
          this.renderer.removeClass(div, 'loading');
          this.store.dispatch(ArticleActions.getArticles());
        }, 500);
     }
    } catch (err) { console.log(err); }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.articleService.resetPage();
    this.store.dispatch(ArticleActions.resetArticles());
  }

}
