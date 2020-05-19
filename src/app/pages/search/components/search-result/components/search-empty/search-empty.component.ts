import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import { SearchRequest } from '@shared/interfaces/interfaces';
import { Observable } from 'rxjs';
import * as fromSearch from '@core/ngrx/selectors/search.selectors';

@Component({
  selector: 'app-search-empty',
  templateUrl: './search-empty.component.html',
  styleUrls: ['./search-empty.component.scss']
})

export class SearchEmptyComponent implements OnInit {

  request$: Observable<SearchRequest>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.request$ = this.store.select(fromSearch.getRequest);
  }

}
