import { Injectable} from '@angular/core';
import { APP_CONSTANTS } from '@app/app.config';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

import {
  ArticleResponse,
  CodeResponse,
  CountResponse,
  CategoryCountResponse,
  Article
} from '@shared/interfaces/interfaces';
import { map, delay } from 'rxjs/operators';

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

  public getArticlesByUser(): Observable<ArticleResponse> {
    return this.http.get(this.API_ARTICLES + 'user');
  }

  public getArticlesToAdmin(): Observable<Article[]> {
    return this.http.get(this.API_ARTICLES + 'all')
      .pipe(map((res: ArticleResponse) => {
        return res.ok ? res.articles.filter((a: Article) => a.admin === true) : [];
      }));
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
