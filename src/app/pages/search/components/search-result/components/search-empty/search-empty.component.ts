import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { SearchFacade } from '@store/search/search.facade';

import { SearchRequest } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-search-empty',
  templateUrl: './search-empty.component.html',
  styleUrls: ['./search-empty.component.scss']
})

export class SearchEmptyComponent implements OnInit {

  request$: Observable<SearchRequest>;

  constructor(private searchFacade: SearchFacade) { }

  ngOnInit() {
    this.request$ = this.searchFacade.request$;
  }

}
