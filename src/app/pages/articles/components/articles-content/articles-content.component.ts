import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Article } from '@app/shared/interfaces/interfaces';
import { Subject, Observable, fromEvent, of } from 'rxjs';
import { takeUntil, debounceTime, switchMap } from 'rxjs/operators';
import { ArticleService } from '@core/services/article/article.service';
import { AppState } from '@app/app.config';
import { Store } from '@ngrx/store';
import * as ArticleActions from '@core/ngrx/actions/article.actions';
import * as fromArticles from '@core/ngrx/selectors/article.selectors';
import * as UserActions from '@core/ngrx/actions/user.actions';
import { UserService } from '@app/core/services/services.index';

@Component({
  selector: 'app-articles-content',
  templateUrl: './articles-content.component.html',
  styleUrls: ['./articles-content.component.scss']
})

export class ArticlesContentComponent implements OnInit, OnDestroy {

  @Input() grid: boolean;  // Display GRID
  articles: Article[] = [];
  private unsubscribe$ = new Subject<void>();

  constructor(private articleService: ArticleService,
              private userService: UserService,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.getArticles();
    this.hasEnded();
    this.getInteraction();
  }

  private getArticles(): void {
    this.store.select(fromArticles.getArticles)
     .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res: Article[]) => {
        if (res.length === 0) {
          this.store.dispatch(ArticleActions.getArticles());
        } else {
          this.articles = res;
        }
    });
  }

  private getInteraction(): void {
    if (this.userService.getUser()) {
      this.store.dispatch(UserActions.getInteractionByUser());
    }
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
              return of(null);
            } catch (err) { console.log(err); }
          }
        })).subscribe(e => { if (e) { this.makeScroll(e); }});
  }

  private makeScroll(e: any): void {
    if (this.articles.length < 1) { return; }
    let fromBottom = 450;
    if (this.grid) { fromBottom = 650; }
    if (window.document.body.clientWidth < 985) { fromBottom = 1400; }
    try {
      const top = e.target.scrollingElement.scrollTop;
      const offset = document.getElementById('articles-section').offsetHeight;
      if (offset - top <= fromBottom) {
        setTimeout(() => {
          this.store.dispatch(ArticleActions.getArticles());
        }, 300);
     }
    } catch (err) { console.log(err); }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.articleService.resetPage();
    this.store.dispatch(ArticleActions.resetArticles());
    this.store.dispatch(UserActions.resetInteraction());
  }

}
