import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Article } from '@shared/interfaces/interfaces';
import { Subject, fromEvent, Observable } from 'rxjs';
import { takeUntil, debounceTime, switchMap, filter, takeWhile } from 'rxjs/operators';
import { ArticleService } from '@core/services/article/article.service';
import { AppState } from '@app/app.config';
import { Store } from '@ngrx/store';

import * as ArticleActions from '@core/ngrx/actions/article.actions';
import * as fromArticles from '@core/ngrx/selectors/article.selectors';
import * as InterActions from '@core/ngrx/actions/interaction.actions';
import * as fromUsers from '@core/ngrx/selectors/user.selectors';

@Component({
  selector: 'app-articles-content',
  templateUrl: './articles-content.component.html',
  styleUrls: ['./articles-content.component.scss']
})

export class ArticlesContentComponent implements OnInit, OnDestroy {

  @Input() grid: boolean;  // Display GRID
  articles$: Observable<Article[]>;
  private unsubscribe$ = new Subject<void>();
  section: HTMLElement;

  constructor(
    private articleSrv: ArticleService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.checkData();
    this.hasEnded();
    this.getInteraction();
    this.section = document.getElementById('articles-section');
    this.articles$ = this.store.select(fromArticles.get);
  }

  private checkData(): void {
    this.store.select(fromArticles.getLoaded)
     .pipe(
       filter(res => !res),
       takeUntil(this.unsubscribe$)
      )
     .subscribe(_ => {
         this.store.dispatch(
           ArticleActions.get()
        );
    });
  }

  private getInteraction(): void {
    this.store.select(fromUsers.get)
     .pipe(
       filter(res => !!res),
       takeUntil(this.unsubscribe$)
      )
     .subscribe(_ =>
      this.store.dispatch(
        InterActions.getByUser()
    ));
  }

  private hasEnded(): void {
    this.store.select(fromArticles.getFull)
    .pipe(
      takeUntil(this.unsubscribe$),
      switchMap(_ => (
        fromEvent(window, 'scroll')
          .pipe(
            debounceTime(300),
            takeUntil(this.unsubscribe$),
            takeWhile(() => !_),
          )
        )
      )).subscribe(e => this.makeScroll(e));
  }

  private makeScroll(e: any): void {
    const bottom = this.fromBottom();
    try {
      const top = e.target.scrollingElement.scrollTop;
      if (this.section.offsetHeight - top <= bottom) {
        setTimeout(() => {
          this.store.dispatch(ArticleActions.get());
        }, 300);
     }
    } catch (err) { console.log(err); }
  }

  private fromBottom(): number {
    let bottom = 450;
    if (this.grid) { bottom = 650; }
    if (window.document.body.clientWidth < 985) { bottom = 1400; }
    return bottom;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.articleSrv.resetPage();
    this.store.dispatch(ArticleActions.reset());
  }

}
