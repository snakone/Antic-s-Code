import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { SearchFacade } from '@core/ngrx/facade/search.facade';

@Component({
  selector: 'app-search-sort-bar',
  templateUrl: './search-sort-bar.component.html',
  styleUrls: ['./search-sort-bar.component.scss']
})

export class SearchSortBarComponent implements OnInit {

  @Output() grid = new EventEmitter<boolean>();
  count$: Observable<number>;
  active = true;

  constructor(private searchFacade: SearchFacade) { }

  ngOnInit() {
    this.count$ = this.searchFacade.count$;
  }

  sort(): void {
    this.active = !this.active;
    this.grid.emit(this.active);
  }

  reset(): void {
    this.searchFacade.reset();
  }

}
