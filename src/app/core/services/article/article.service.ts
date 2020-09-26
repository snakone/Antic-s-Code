import { Injectable} from '@angular/core';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

import {
  ArticleResponse,
  Article,
  TagRequest,
  ArticlesDataResponse
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

  public getData(): Observable<ArticlesDataResponse> {
    return this.http
      .get<ArticlesDataResponse>(environment.api + 'articles-data')
      .pipe(
        filter(res => res && !!res.ok)
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

  public resetPage(): void {
    this.page = 0;
  }

}
