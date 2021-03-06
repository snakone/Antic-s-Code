import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { CustomError } from '@shared/interfaces/interfaces';
import { APP_CONSTANTS } from '@app/app.config';
import { StorageService } from '@core/storage/storage.service';
import { environment } from '@env/environment';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable({providedIn: 'root'})

export class ErrorService {

  readonly API_ERRORS = environment.api + 'errors/';
  readonly HttpStatus = [400, 406, 409, 500];

  constructor(
    private http: HttpService,
    private ls: StorageService
  ) { }

  public saveError(err: Error | HttpErrorResponse): void {
    if ((err instanceof HttpErrorResponse &&
        (err.status === 0 ||
         !this.HttpStatus.includes(err.status)))) { return; }
    const error = this.manageError(err);
    this.http.post(this.API_ERRORS, error, null, null, false)
     .pipe(catchError(() => EMPTY)).toPromise().then();
  }

  private manageError(err: Error | HttpErrorResponse): CustomError {
    if (err instanceof HttpErrorResponse) {
      return new CustomError(
        err?.name || 'Error',
        err?.error?.message || 'Unkwon Error',
        err?.statusText,
        this.ls.get('user') || null,
        err?.status,
        err?.url,
        APP_CONSTANTS.PLATFORM
      );
    } else {
      return new CustomError(
        err?.name || 'Error',
        err?.message || 'Unknown Error',
        err?.stack,
        this.ls.get('user') || null,
        null,
        null,
        APP_CONSTANTS.PLATFORM
      );
    }
  }

}
