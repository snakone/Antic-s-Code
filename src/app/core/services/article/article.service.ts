import { Injectable} from '@angular/core';
import { APP_CONSTANTS } from '@app/app.config';
import { HttpService } from '../http/http.service';
import { ArticleResponse } from '@shared/interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable()

export class ArticleService {

  readonly API_ARTICLES = APP_CONSTANTS.END_POINT + 'articles';

  constructor(private http: HttpService) {
    console.log('ArticleService');
  }

  public getArticles(): Observable<ArticleResponse> {
    console.log('API');
    return this.http.get(this.API_ARTICLES);
  }

}
