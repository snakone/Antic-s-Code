import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Article } from '@shared/interfaces/interfaces';

import { filter, takeUntil } from 'rxjs/operators';
import { ArticlesFacade } from '@core/ngrx/facade/article.facade';

@Component({
  selector: 'app-most-viewed-box',
  templateUrl: './most-viewed-box.component.html',
  styleUrls: ['./most-viewed-box.component.scss']
})

export class MostViewedBoxComponent implements OnInit, OnDestroy {

  @Input() sidebar: boolean;
  articles$: Observable<Article[]>;
  private unsubscribe$ = new Subject<void>();

  constructor(private articleFacade: ArticlesFacade) { }

  ngOnInit() {
    this.checkData();
    this.articles$ = this.articleFacade.mostViewed$;
  }

  private checkData(): void {
    this.articleFacade.mostViewedLoaded$
     .pipe(
       filter(res => !res),
       takeUntil(this.unsubscribe$)
      )
      .subscribe(_ => this.articleFacade.getViewed());
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
