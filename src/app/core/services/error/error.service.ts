import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpError } from '@app/shared/interfaces/interfaces';
import { APP_CONSTANTS } from '@app/app.config';
import { HttpErrorResponse } from '@angular/common/http';
import { StorageService } from '@app/core/storage/storage.service';
import { map } from 'rxjs/operators';

@Injectable()

export class ErrorService {

  readonly API_ERRORS = APP_CONSTANTS.END_POINT + 'errors/';

  constructor(private http: HttpService,
              private ls: StorageService) { }

  saveHttpError(err: HttpErrorResponse): void {
    const error = this.manageError(err);
    this.http.post(this.API_ERRORS, error).subscribe();
  }

  private manageError(err: HttpErrorResponse): HttpError {
    return new HttpError(
      err.name,
      err.error.message,
      err.status,
      err.statusText,
      err.url,
      this.ls.get('user') || ''
    );
  }

}
