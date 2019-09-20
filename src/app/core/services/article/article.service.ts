import { Injectable} from '@angular/core';
import { APP_CONSTANTS } from '@app/app.config';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';

import {
  ArticleResponse,
  CodeResponse,
  CountResponse,
  CategoryCountResponse
} from '@shared/interfaces/interfaces';

@Injectable()

export class ArticleService {

  readonly API_ARTICLES = APP_CONSTANTS.END_POINT + 'articles/';
  public page = 0;

  constructor(private http: HttpService) {
    console.log('ArticleService');
  }

  public getArticles(): Observable<ArticleResponse> {
    this.page++;
    return this.http.get(this.API_ARTICLES + '?page=' + this.page);
  }

  public getArticlesCode(): Observable<CodeResponse> {
    return this.http.get(this.API_ARTICLES + 'code');
  }

  public getLastArticles(): Observable<ArticleResponse> {
    return this.http.get(this.API_ARTICLES + 'last');
  }

  public getArticlesCount(): Observable<CountResponse> {
    return this.http.get(this.API_ARTICLES + 'count');
  }

  public getMostLikedArticles(): Observable<ArticleResponse> {
    return this.http.get(this.API_ARTICLES + 'liked');
  }

  public getArticleBySlug(slug: string): Observable<ArticleResponse> {
    return this.http.get(APP_CONSTANTS.END_POINT + 'article/' + slug);
  }

  public getArticlesByCategoryCount(): Observable<CategoryCountResponse> {
    return this.http.get(this.API_ARTICLES + 'categories/count');
  }

  public sendLike(id: string): Observable<ArticleResponse> {
    return this.http.post(this.API_ARTICLES + 'likes/' + id, null);
  }

  public sendStar(id: string, stars: number): Observable<ArticleResponse> {
    return this.http.post(this.API_ARTICLES + 'stars/' + id, {stars});
  }

  public resetPage(): void {
    this.page = 0;
  }

}
