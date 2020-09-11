import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '@shared/interfaces/interfaces';
import { UsersFacade } from '../ngrx/users/users.facade';

@Injectable({providedIn: 'root'})

export class UserGuard implements CanActivate {

  constructor(
    private userFacade: UsersFacade,
    private router: Router
  ) { }

  canActivate(): Observable<boolean> {
    return this.userFacade.user$
      .pipe(map((res: User) =>
    !res ? (this.router.navigateByUrl('/home'), false) : true));
  }

}
