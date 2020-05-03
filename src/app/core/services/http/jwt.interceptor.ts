import { Injectable } from '@angular/core';
import { AppState } from '@app/app.config';
import { Store } from '@ngrx/store';
import * as UserActions from '@core/ngrx/actions/user.actions';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { StorageService } from '../../storage/storage.service';
import { ErrorService } from '../error/error.service';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class JwtInterceptor implements HttpInterceptor {

  constructor(
    private store: Store<AppState>,
    private ls: StorageService,
    private errorSrv: ErrorService
  ) { }

  intercept<T>(
    request: HttpRequest<T>,
    next: HttpHandler): Observable<HttpEvent<T>> {
    return next.handle(request).pipe(tap((() => {
    }), ((error: HttpErrorResponse) => {
        if (error.status === 0) { return; }
        this.errorSrv.saveError(error);
        if (error.status === 401) {
          const id = this.ls.get('user');
          if (!id) { return throwError(error); }
          this.store.dispatch(UserActions.refreshToken({id}));
      } else { return throwError(error); }
    })));
  }
}
