import { Injectable } from '@angular/core';

import {
  HttpHeaders,
  HttpClient,
  HttpParams,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { StorageService } from '@core/storage/storage.service';
import { catchError } from 'rxjs/operators';
import { CrafterService } from '../crafter/crafter.service';

@Injectable({providedIn: 'root'})

export class HttpService {

  private readonly auth = 'x-Token';
  private readonly content = 'Content-type';
  private readonly accept = 'Accept';
  private readonly type = 'application/json';
  private readonly default = 'application/json';

  constructor(
    private http: HttpClient,
    private storage: StorageService,
    private crafter: CrafterService
  ) { }

  public get<T>(url: string,
                headers?: HttpHeaders,
                params?: HttpParams,
                handler: boolean = true): Observable<T> {
    return this.http
      .get<T>(url, { headers: this.createHeaders(headers), params })
      .pipe(catchError((err: HttpErrorResponse) => {
        if (handler) { this.error(err); }
        throw err;
      }
    ));
  }

  public post<T>(url: string,
                 body: any | null,
                 headers?: HttpHeaders,
                 params?: HttpParams,
                 handler: boolean = true): Observable<T> {
    return this.http
      .post<T>(url, body, { headers: this.createHeaders(headers), params })
      .pipe(catchError((err: HttpErrorResponse) => {
        if (handler) { this.error(err); }
        throw err;
      }
    ));
  }

  public put<T>(url: string,
                body: any | null,
                headers?: HttpHeaders,
                params?: HttpParams,
                handler: boolean = true): Observable<T> {
    return this.http
      .put<T>(url, body, { headers: this.createHeaders(headers), params })
      .pipe(catchError((err: HttpErrorResponse) => {
        if (handler) { this.error(err); }
        throw err;
      }
    ));
  }

  public delete<T>(url: string,
                   headers?: HttpHeaders,
                   params?: HttpParams,
                   handler: boolean = true): Observable<T> {
    return this.http
      .delete<T>(url, { headers: this.createHeaders(headers), params })
      .pipe(catchError((err: HttpErrorResponse) => {
        if (handler) { this.error(err); }
        throw err;
      }
    ));
  }

// tslint:disable-next-line: variable-name
  private createHeaders(_headers?: HttpHeaders): HttpHeaders {
    const contentType = _headers ? (_headers.get(this.type) || this.default) : this.default;
    const accept = _headers ? (_headers.get(this.accept) || this.default) : this.default;
    const headers = _headers || new HttpHeaders();

    return headers
      .set(this.auth, this.storage.get('token') || '')
      .set(this.content, contentType)
      .set(this.accept, accept);
  }

  private error(err: HttpErrorResponse): void {
    switch (err.status) {
      case 0: this.crafter
                    .modal('errors.web.title',
                           'errors.web.message');
       break;
      case 400: case 406: this.crafter
                    .modal('errors.request.title',
                           'errors.request.message',
                           'help');
       break;
      case 409: case 500: this.crafter
                    .modal('errors.server.title',
                           'errors.server.message');
       break;
      default: console.log(err)
    }
  }
}
