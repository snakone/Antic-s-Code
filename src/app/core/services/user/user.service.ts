import { Injectable } from '@angular/core';
import { APP_CONSTANTS, AppState } from '@app/app.config';
import { HttpService } from '../http/http.service';
import { User, UserResponse } from '@app/shared/interfaces/interfaces';
import { Observable, of } from 'rxjs';
import { StorageService } from '@app/core/storage/storage.service';
import { Store } from '@ngrx/store';
import * as UserActions from '@core/ngrx/actions/user.actions';
import { map } from 'rxjs/operators';

@Injectable()

export class UserService {

  readonly API_USERS = APP_CONSTANTS.END_POINT + 'users';
  readonly API_TOKEN = APP_CONSTANTS.END_POINT + 'token';

  constructor(private http: HttpService,
              private ls: StorageService,
              private store: Store<AppState>) {
      console.log('UserService');
  }

  public getUserById(id: string): Observable<UserResponse> {
    return this.http.get(this.API_USERS + `/${id}`);
  }

  public updateUser(user: User): Observable<UserResponse> {
    return this.http.put(this.API_USERS, user);
  }

  public refreshToken(id: string): Observable<UserResponse> {
    return this.http.post(this.API_TOKEN + `/${id}`, null);
  }

  public verifyToken(): Observable<UserResponse> {
    if (!this.ls.get('token')) { return of(null); }
    return this.http.get(this.API_TOKEN)
      .pipe(map((res: UserResponse) => {
        if (res.ok) {
          this.store.dispatch(UserActions.setUser({ user: res.user }));
          return res;
        }
    }));
  }

  public logout(): void {
    this.ls.setKey('token', null);
    this.store.dispatch(UserActions.userLogOut());
    this.ls.loadStorage();
  }

}


