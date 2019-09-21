import { Injectable, OnDestroy } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as fromUsers from '@core/ngrx/selectors/user.selectors';
import { Subject, Observable } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { User } from '@app/shared/interfaces/interfaces';

@Injectable({providedIn: 'root'})

export class ProfileGuard implements CanActivate, OnDestroy {

  private unsubscribe$ = new Subject<void>();

  constructor(private store: Store<AppState>,
              private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.store.select(fromUsers.getUser)
      .pipe(takeUntil(this.unsubscribe$),
            map((res: User) => {
        if (!res) { this.router.navigateByUrl('/home'); }
        return res ? true : false;
    }));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
