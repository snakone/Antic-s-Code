import { Injectable} from '@angular/core';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

import {
  ArticleResponse,
  CountResponse,
  CategoryCountResponse,
  Article,
  TagRequest,
} from '@shared/interfaces/interfaces';

import { filter, map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class ArticleService {

  readonly API_ARTICLES = environment.api + 'articles/';
  public page = 0;

  constructor(private http: HttpService) { }

  public get(): Observable<Article[]> {
    this.page++;
    return this.http
      .get<ArticleResponse>(this.API_ARTICLES + '?page=' + this.page)
      .pipe(
        filter(res => res && !!res.ok),
        map(_ => _.articles)
      );
  }

  public getLast(): Observable<Article[]> {
    return this.http
      .get<ArticleResponse>(this.API_ARTICLES + 'last')
      .pipe(
        filter(res => res && !!res.ok),
        map(_ => _.articles)
      );
  }

  public getCount(): Observable<number> {
    return this.http
      .get<CountResponse>(this.API_ARTICLES + 'count')
      .pipe(
        filter(res => res && !!res.ok),
        map(_ => _.count)
      );
  }

  public getMostLiked(): Observable<Article[]> {
    return this.http
      .get<ArticleResponse>(this.API_ARTICLES + 'liked')
      .pipe(
        filter(res => res && !!res.ok),
        map(_ => _.articles)
      );
  }

  public getMostViewed(): Observable<Article[]> {
    return this.http
      .get<ArticleResponse>(this.API_ARTICLES + 'viewed')
      .pipe(
        filter(res => res && !!res.ok),
        map(_ => _.articles)
      );
  }

  public getByUser(id: string): Observable<Article[]> {
    return this.http
      .get<ArticleResponse>(this.API_ARTICLES + 'user/' + id)
      .pipe(
        filter(res => res && !!res.ok),
        map(_ => _.articles)
      );
  }

  public getBySlug(slug: string): Observable<Article> {
    return this.http
      .get<ArticleResponse>(environment.api + 'article/' + slug)
      .pipe(
        filter(res => res && !!res.ok),
        map(_ => _.article)
      );
  }

  public getByCategory(category: string): Observable<Article[]> {
    return this.http
      .get<ArticleResponse>(this.API_ARTICLES + 'category/' + category)
      .pipe(
        filter(res => res && !!res.ok),
        map(_ => _.articles)
      );
  }

  public getByTags(request: TagRequest): Observable<Article[]> {
    return this.http
      .post<ArticleResponse>(this.API_ARTICLES + 'tags', request)
      .pipe(
        filter(res => res && !!res.ok),
        map(_ => _.articles)
      );
  }

  public getByCategoryCount(): Observable<object> {
    return this.http
      .get<CategoryCountResponse>(this.API_ARTICLES + 'categories/count')
      .pipe(
        filter(res => res && !!res.ok),
        map(_ => _.count)
      );
  }

  public resetPage(): void {
    this.page = 0;
  }

}
