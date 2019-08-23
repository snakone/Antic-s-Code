import { Injectable} from '@angular/core';
import { APP_CONSTANTS } from '@app/app.config';
import { HttpService } from '../http/http.service';
import { Observable, combineLatest } from 'rxjs';
import { CategoryResponse, ArticleResponse, AppData } from '@app/shared/interfaces/interfaces';
import { map } from 'rxjs/operators';

@Injectable()

export class DataService {

  readonly API_ARTICLES = APP_CONSTANTS.END_POINT + 'articles';
  readonly API_CATEGORIES = APP_CONSTANTS.END_POINT + 'categories';

  articles = this.http.get<ArticleResponse>(this.API_ARTICLES);
  categories = this.http.get<CategoryResponse>(this.API_CATEGORIES);

  constructor(private http: HttpService) {
    console.log('DataService');
  }

  public getData(): Observable<AppData> {
    console.log('API');
    return combineLatest([this.articles, this.categories])
      .pipe(map((res) => {
        if (res[0].ok && res[1].ok) {
          const data: AppData = {
            articles: res[0].articles,
            categories: res[1].categories
          };
          return data;
        }
    }));
  }

}
