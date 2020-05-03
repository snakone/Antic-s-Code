import { Component, OnInit, OnDestroy, Input, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import { Subject, Observable } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import { Article } from '@shared/interfaces/interfaces';
import { PaginationService } from 'ngx-pagination';

import * as fromSearch from '@core/ngrx/selectors/search.selectors';
import * as SearchActions from '@core/ngrx/actions/search.actions';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})

export class SearchResultComponent implements OnInit, OnDestroy {

  @Input() grid: boolean;  // Display GRID
  @Output() count = new EventEmitter<number>();
  page = 1;
  itemsPerPage = 4;

  private unsubscribe$ = new Subject<void>();
  articles$: Observable<Article[]>;

  constructor(
    private store: Store<AppState>,
    private pagination: PaginationService
  ) { }

  ngOnInit() {
    this.articles$ = this.store.select(fromSearch.getResult);
    this.checkData();
    this.getCurrentPage();
  }

  private checkData(): void {
    this.store.select(fromSearch.getSearched)
     .pipe(
       filter(res => !res),
       takeUntil(this.unsubscribe$)
      )
      .subscribe(_ => {
         this.store.dispatch(
          SearchActions.searchContent({request: {value: ''} })
        );
    });
  }

  private getCurrentPage(): void {
    this.pagination.change
     .pipe(
       takeUntil(this.unsubscribe$),
       filter(res => res && !!res)
      )
     .subscribe((res: string) =>
      this.page = this.pagination.getCurrentPage(res)
    );
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.store.dispatch(SearchActions.resetSearch());
  }

}
