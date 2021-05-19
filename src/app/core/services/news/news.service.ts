import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { filter, map } from 'rxjs/operators';
import { NewsResponse, News } from '@shared/interfaces/interfaces';

@Injectable({ providedIn: 'root'})

export class NewsService {

  readonly API_NEWS = environment.api + 'news/';
  public page = 0;

  constructor(private http: HttpService) { }

  public get(): Observable<News[]> {
    this.page++;
    return this.http
      .get<NewsResponse>(this.API_NEWS + '?page=' + this.page)
      .pipe(
        filter(res => res && !!res.ok),
        map(_ => _.news)
      );
  }

  public getData(): Observable<NewsResponse> {
    return this.http
      .get<NewsResponse>(environment.api + 'news-data')
      .pipe(
        filter(res => res && !!res.ok)
      );
  }

  public getBySlug(slug: string): Observable<News> {
    return this.http
      .get<NewsResponse>(this.API_NEWS + slug)
      .pipe(
        filter(res => res && !!res.ok),
        map(_ => _.notice)
      );
  }

  public getByCategory(category: string): Observable<News[]> {
    return this.http
      .get<NewsResponse>(this.API_NEWS + 'category/' + category)
      .pipe(
        filter(res => res && !!res.ok),
        map(_ => _.news)
      );
  }

  public resetPage(): void {
    this.page = 0;
  }

}
