import { Component, OnInit, OnDestroy } from '@angular/core';

import { ArticlesFacade } from '@store/articles/article.facade';
import { Observable, Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';

import { Article } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-articles-grid',
  templateUrl: './articles-grid.component.html',
  styleUrls: ['./articles-grid.component.scss']
})

export class ArticlesGridComponent implements OnInit, OnDestroy {

  articles$: Observable<Article[]>;
  count$: Observable<number>;
  private unsubscribe$ = new Subject<void>();

  constructor(private articlesFacade: ArticlesFacade) { }

  ngOnInit() {
    this.checkData();
    this.count$ = this.articlesFacade.count$;
    this.articles$ = this.articlesFacade.last$;
  }

  private checkData(): void {
    this.articlesFacade.lastCountLoaded$
     .pipe(
       filter(res => !res),
       takeUntil(this.unsubscribe$)
      )
      .subscribe(_ => {
         this.articlesFacade.getLast();
         this.articlesFacade.getCount();
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
