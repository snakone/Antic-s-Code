import { Injectable } from '@angular/core';
import { AppState } from '@app/app.config';
import { Store } from '@ngrx/store';
import * as UserActions from '@core/ngrx/actions/user.actions';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { StorageService } from '../../storage/storage.service';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private store: Store<AppState>,
              private ls: StorageService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(tap(((res: HttpResponse<any>) => {
    }), ((error: HttpErrorResponse) => {
        if (error.status === 401) {
          const id = this.ls.get('user');
          if (!id) { return throwError(error); }
          this.store.dispatch(UserActions.refreshToken({id}));
      } else { return throwError(error); }
    })));
  }
}
