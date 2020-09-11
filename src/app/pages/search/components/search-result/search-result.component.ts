import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  EventEmitter,
  Output
} from '@angular/core';

import { Subject, Observable } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import { PaginationService } from 'ngx-pagination';
import { SearchFacade } from '@store/search/search.facade';

import { Article } from '@shared/interfaces/interfaces';

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
    private searchFacade: SearchFacade,
    private pagination: PaginationService
  ) { }

  ngOnInit() {
    this.articles$ = this.searchFacade.result$;
    this.checkData();
    this.getCurrentPage();
  }

  private checkData(): void {
    this.searchFacade.searched$
     .pipe(
       filter(res => !res),
       takeUntil(this.unsubscribe$)
      )
      .subscribe(_ => this.searchFacade.search({value: ''}));
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
    this.searchFacade.reset();
  }

}
