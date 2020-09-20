import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TestEntry } from '@shared/interfaces/interfaces';
import { TestFacade } from '../ngrx/test/test.facade';

@Injectable()

export class EntryGuard implements CanActivate {

  constructor(
    private testFacade: TestFacade,
    private router: Router
  ) { }

  canActivate(): Observable<boolean> {
    return this.testFacade.entry$
      .pipe(map((res: TestEntry) =>
    !res ? (this.router.navigateByUrl('/test'), false) : true));
  }

}
