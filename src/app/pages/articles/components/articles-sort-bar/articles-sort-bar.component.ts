import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { takeUntil, filter } from 'rxjs/operators';
import { ArticlesFacade } from '@core/ngrx/facade/article.facade';

@Component({
  selector: 'app-articles-sort-bar',
  templateUrl: './articles-sort-bar.component.html',
  styleUrls: ['./articles-sort-bar.component.scss']
})

export class ArticlesSortBarComponent implements OnInit, OnDestroy {

  @Output() grid = new EventEmitter<boolean>();
  count$: Observable<number>;
  active = false;
  private unsubscribe$ = new Subject<void>();

  constructor(private articleFacade: ArticlesFacade) { }

  ngOnInit() {
    this.checkData();
    this.count$ = this.articleFacade.count$;
  }

  private checkData(): void {
    this.articleFacade.countLoaded$
     .pipe(
       filter(res => !res),
       takeUntil(this.unsubscribe$)
      )
      .subscribe(_ => this.articleFacade.getCount());
  }

  public sort(): void {
    this.active = !this.active;
    this.grid.emit(this.active);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
