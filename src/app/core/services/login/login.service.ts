import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { User, UserResponse } from '@shared/interfaces/interfaces';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})

export class LoginService {

  readonly API_LOGIN = environment.api + 'login';
  readonly API_USER = environment.api + 'users';

  constructor(private http: HttpService) { }

  public signIn(
    email: string,
    password: string
  ): Observable<UserResponse> {
    const body = { email, password };
    return this.http
      .post<UserResponse>(this.API_LOGIN, body)
      .pipe(
        filter(res => res && !!res.ok)
      );
  }

  public signUp(body: User): Observable<UserResponse> {
    return this.http
      .post<UserResponse>(this.API_USER, body)
      .pipe(
        filter(res => res && !!res.ok)
      );
  }

}
