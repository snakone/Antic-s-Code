import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from '../services/error/error.service';

@Injectable()

export class ErrorHandlerService implements ErrorHandler {

  chunkFailedMessage = /Loading chunk [\d]+ failed/;

  constructor(private injector: Injector) { }

  handleError(error: Error | HttpErrorResponse): void {
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
    }

    if (error instanceof HttpErrorResponse) { return; }
    service.saveError(error);

    if (this.chunkFailedMessage.test(error?.message || null)) {
      window.location.reload();
      return;
    }
  }

}
