import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as fromArticles from '@core/ngrx/selectors/article.selectors';
import * as ArticleActions from '@core/ngrx/actions/article.actions';
import { takeUntil, filter } from 'rxjs/operators';

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

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.checkData();
    this.count$ = this.store.select(fromArticles.getCount);
  }

  private checkData(): void {
    this.store.select(fromArticles.getCountLoaded)
     .pipe(
       filter(res => !res),
       takeUntil(this.unsubscribe$)
      )
      .subscribe(_ => {
         this.store.dispatch(
           ArticleActions.getCount()
        );
    });
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
