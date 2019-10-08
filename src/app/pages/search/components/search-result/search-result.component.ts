import { Component, OnInit, OnDestroy, Input, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import { Subject, of } from 'rxjs';
import * as fromSearch from '@core/ngrx/selectors/search.selectors';
import * as SearchActions from '@core/ngrx/actions/search.actions';
import { takeUntil, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { SearchResponse, Article, Category } from '@app/shared/interfaces/interfaces';
import { PaginationService } from 'ngx-pagination';

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
  articles: Article[];
  categories: Category[];

  constructor(private store: Store<AppState>,
              private pagination: PaginationService) { }

  ngOnInit() {
    this.checkData();
    this.getResult();
    this.getCurrentPage();
  }

  private checkData(): void {
    this.store.select(fromSearch.getResultSearched)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res: boolean) => {
        if (!res) {
          this.store.dispatch(SearchActions.searchContent({request: {value: ''} }));
        }
    });
  }

  private getResult(): void {
    this.store.select(fromSearch.getSearchResultLoaded)
      .pipe(
        switchMap((res: boolean) => {
          return res ? this.store.select(fromSearch.getSearchResult) :
          of({ok: false});
        }),
        distinctUntilChanged(),
        takeUntil(this.unsubscribe$))
      .subscribe((res: SearchResponse) => {
        if (res.ok) {
          setTimeout(() => {
            this.articles = res.articles;
          }, 1000);
        }
    });
  }

  private getCurrentPage(): void {
    this.pagination.change
     .pipe(takeUntil(this.unsubscribe$))
     .subscribe((res: string) => {
        if (res) {
          this.page = this.pagination.getCurrentPage(res);
       }
     });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.store.dispatch(SearchActions.resetSearch());
  }

}
