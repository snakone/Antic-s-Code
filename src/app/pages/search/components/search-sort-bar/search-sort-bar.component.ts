import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { SearchFacade } from '@store/search/search.facade';
import { Input } from '@angular/core';

@Component({
  selector: 'app-search-sort-bar',
  templateUrl: './search-sort-bar.component.html',
  styleUrls: ['./search-sort-bar.component.scss']
})

export class SearchSortBarComponent implements OnInit {

  @Input() active = true;
  @Output() grid = new EventEmitter<boolean>();
  count$: Observable<number>;

  constructor(private searchFacade: SearchFacade) { }

  ngOnInit() {
    this.count$ = this.searchFacade.count$;
  }

  public sort(): void {
    this.active = !this.active;
    this.grid.emit(this.active);
  }

  public reset(): void {
    this.searchFacade.reset();
  }

}
