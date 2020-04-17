import { Injectable} from '@angular/core';
import { APP_CONSTANTS } from '@app/app.config';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';
import { SearchResponse, SearchRequest } from '@app/shared/interfaces/interfaces';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})

export class SearchService {

  readonly API_SEARCH = APP_CONSTANTS.END_POINT + 'search/';

  constructor(private http: HttpService) {
    if (!environment.production) { console.log('SearchService'); }
  }

  public searchContent(request: SearchRequest): Observable<SearchResponse> {
    return this.http.post(this.API_SEARCH, request);
  }

}
