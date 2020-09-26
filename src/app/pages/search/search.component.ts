import { Component, OnInit } from '@angular/core';
import { SearchFacade } from '@store/search/search.facade';
import { Article } from '@shared/interfaces/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

  grid = true;
  articles$: Observable<Article[]>;

  constructor(private searchFacade: SearchFacade) { }

  ngOnInit() {
    this.articles$ = this.searchFacade.result$;
  }

}
