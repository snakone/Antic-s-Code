import { Injectable} from '@angular/core';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';

import {
  SearchResponse,
  SearchRequest,
  Article
} from '@shared/interfaces/interfaces';

import { environment } from '@env/environment';
import { filter, map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class SearchService {

  readonly API_SEARCH = environment.api + 'search/';

  constructor(private http: HttpService) { }

  public searchContent(request: SearchRequest): Observable<Article[]> {
    return this.http
      .post<SearchResponse>(this.API_SEARCH, request)
      .pipe(
        filter(res => res && !!res.ok),
        map(_ => _.articles)
      );
  }

}
