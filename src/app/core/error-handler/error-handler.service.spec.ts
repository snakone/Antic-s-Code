import { TestBed } from '@angular/core/testing';

import { ErrorHandlerService } from '@app/core/error-handler/error-handler.service';
import { HttpErrorResponse } from '@angular/common/http';

describe('SlashErrorHandlerService', () => {
  let spies;
  let mocks;
  let handlerService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorHandlerService]
    });
  });

  beforeEach( () => {
    handlerService = TestBed.get(ErrorHandlerService);
  });

  beforeEach(() => {
    loadMocks();
    initSpies();
  });

  describe('create', () => {
    it('should create service', () => {
      expect(ErrorHandlerService).toBeTruthy();
    });
  });

  describe('should handle errors', () => {
    it('should handle HttpErrorResponse', () => {
      try {
        handlerService.handleError(mocks.httpError);
        expect(spies.console.error)
          .toHaveBeenCalledWith('There was an HTTP error.', mocks.httpError.message, 'Status code: ', mocks.httpError.status);
      } catch (error) {}
    });

    it('should handle TypeError', () => {
      try {
        handlerService.handleError(mocks.typeError);
        expect(spies.console.error).toHaveBeenCalledWith('There was a Type error.', mocks.typeError.message);
      } catch (error) {}
    });

    it('should handle Error', () => {
      try {
        handlerService.handleError(mocks.error);
        expect(spies.console.error).toHaveBeenCalledWith('There was a general error.', mocks.error.message);
      } catch (error) {}
    });

    it('should handle default', () => {
      try {
        handlerService.handleError(mocks.defaultError);
        expect(spies.console.error).toHaveBeenCalledWith('Nobody threw an Error but something happened!', mocks.defaultError);
      } catch (error) {}
    });

  });

  function loadMocks() {
    mocks = {
      httpError: { constructor: HttpErrorResponse, message: 'Http error message', status: 400},
      typeError: { constructor: TypeError, message: 'TypeError message'},
      error: { constructor: Error, message: 'Error message'},
      defaultError: 'Default message'
    };
  }

  function initSpies() {
    spies = {
      console: {
        error: spyOn(console, 'error')
      }
    };
  }
});
