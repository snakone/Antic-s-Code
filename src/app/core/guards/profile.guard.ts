import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as fromUsers from '@core/ngrx/selectors/user.selectors';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '@app/shared/interfaces/interfaces';

@Injectable({providedIn: 'root'})

export class ProfileGuard implements CanActivate {

  private unsubscribe$ = new Subject<void>();

  constructor(private store: Store<AppState>,
              private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.store.select(fromUsers.getUser)
      .pipe(map((res: User) => {
        if (!res) { this.router.navigateByUrl('/home'); }
        return res ? true : false;
    }));
  }

}
