import { Component, OnInit } from '@angular/core';
import { SearchFacade } from '@store/search/search.facade';
import { Article } from '@shared/interfaces/interfaces';
import { Observable } from 'rxjs';
import { StorageService } from '@core/storage/storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

  grid = true;
  articles$: Observable<Article[]>;

  constructor(
    private searchFacade: SearchFacade,
    private ls: StorageService
  ) { }

  ngOnInit() {
    this.articles$ = this.searchFacade.result$;
    this.grid = this.ls.get('visual');
  }

}
