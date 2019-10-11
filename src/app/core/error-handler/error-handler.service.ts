import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ErrorService } from '../services/error/error.service';

@Injectable()

export class ErrorHandlerService implements ErrorHandler {

  constructor(private injector: Injector) { }

  handleError(error: Error | HttpErrorResponse): void {
    const router = this.injector.get(Router);
    const ngZone = this.injector.get(NgZone);
    const service = this.injector.get(ErrorService);
    switch (error.constructor) {
      case TypeError: {
        console.error('Type Error! ', error);
        break;
      }
      case Error: {
        console.error('General Error!. ', error);
        break;
      }
      default: {
        console.error('Something went Wrong! ', error);
        break;
      }
    }
    if (error instanceof HttpErrorResponse) { return; }
    service.saveError(error);
    ngZone.run(() => router.navigate(['error'], { queryParams: { error } })
      .then(() => { }).catch((e) => { }));
  }

}
