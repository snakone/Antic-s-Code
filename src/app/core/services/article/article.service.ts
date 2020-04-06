import { Injectable} from '@angular/core';
import { APP_CONSTANTS } from '@app/app.config';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

import {
  ArticleResponse,
  CountResponse,
  CategoryCountResponse,
} from '@shared/interfaces/interfaces';

@Injectable()

export class ArticleService {

  readonly API_ARTICLES = APP_CONSTANTS.END_POINT + 'articles/';
  public page = 0;

  constructor(private http: HttpService) {
    if (!environment.production) { console.log('ArticleService'); }
  }

  public getArticles(): Observable<ArticleResponse> {
    this.page++;
    return this.http.get(this.API_ARTICLES + '?page=' + this.page);
  }

  public publishArticle(id: string, draft: boolean): Observable<ArticleResponse> {
    return this.http.post(this.API_ARTICLES + 'publish/' + id, {draft});
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

  public getArticlesByUser(id: string): Observable<ArticleResponse> {
    return this.http.get(this.API_ARTICLES + 'user/' + id);
  }

  public getArticleBySlug(slug: string): Observable<ArticleResponse> {
    return this.http.get(APP_CONSTANTS.END_POINT + 'article/' + slug);
  }

  public getArticlesByCategory(category: string): Observable<ArticleResponse> {
    return this.http.get(this.API_ARTICLES + 'category/' + category);
  }

  public getArticlesByCategoryCount(): Observable<CategoryCountResponse> {
    return this.http.get(this.API_ARTICLES + 'categories/count');
  }

  public sendLike(id: string): Observable<ArticleResponse> {
    return this.http.post(this.API_ARTICLES + 'likes/' + id, null);
  }

  public resetPage(): void {
    this.page = 0;
  }

}
