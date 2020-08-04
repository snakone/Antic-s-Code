import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '@shared/interfaces/interfaces';
import { UsersFacade } from '../ngrx/users/users.facade';
import { CrafterService } from '../services/crafter/crafter.service';

@Injectable({providedIn: 'root'})

export class TestGuard implements CanActivate {

  constructor(
    private userFacade: UsersFacade,
    private crafter: CrafterService,
    private router: Router
  ) { }

  canActivate(): Observable<boolean> {
    return this.userFacade.user$
      .pipe(map((res: User) =>
    !res ? (this.showModal(), false) : true));
  }

  private showModal(): void {
    this.crafter.modal(
      'ERRORS.TEST.TITLE',
      'ERRORS.TEST.MESSAGE',
      'info');
    this.router.navigateByUrl('/');
  }

}
