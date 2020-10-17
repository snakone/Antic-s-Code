import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { TestFacade } from '../ngrx/test/test.facade';
import { CrafterService } from '../services/crafter/crafter.service';
import { TestService } from '../services/test/test.service';

@Injectable({providedIn: 'root'})

export class EntryGuard implements CanActivate {

  constructor(
    private testSrv: TestService,
    private testFacade: TestFacade,
    private crafter: CrafterService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.testFacade.entryLoaded$
     .pipe(
       switchMap(res => res ? of(true) :
       this.testSrv.checkDone(route.params.uid)
        .pipe(map(_ => _ ? (this.showModal(), false) : true)
       )
     ));
  }

  private showModal(): void {
    this.crafter.modal(
      'ERRORS.ENTRY_DONE.TITLE',
      'ERRORS.ENTRY_DONE.MESSAGE',
      'info');
    this.router.navigateByUrl('/');
  }

}
