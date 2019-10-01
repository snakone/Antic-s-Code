import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as fromUsers from '@core/ngrx/selectors/user.selectors';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { User } from '@app/shared/interfaces/interfaces';

@Injectable({providedIn: 'root'})

export class AdminGuard implements CanActivate {

  constructor(private store: Store<AppState>,
              private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.store.select(fromUsers.getUser)
      .pipe(map((res: User) => {
        if (res) {
          if (!(res.account === 'Admin' || res.account === 'Super')) {
            this.router.navigateByUrl('/home');
            return false;
          }
          return true;
        } else {
          this.router.navigateByUrl('/home');
          return false;
        }
    }));
  }

}
