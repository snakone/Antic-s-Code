import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as fromUsers from '@core/ngrx/selectors/user.selectors';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '@shared/interfaces/interfaces';

@Injectable({providedIn: 'root'})

export class UserGuard implements CanActivate {

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  canActivate(): Observable<boolean> {
    return this.store.select(fromUsers.get)
      .pipe(map((res: User) =>
    !res ? (this.router.navigateByUrl('/home'), false) : true));
  }

}
