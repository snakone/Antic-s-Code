import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { APP_CONSTANTS } from '@app/app.config';
import { User, UserResponse } from '@app/shared/interfaces/interfaces';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable()

export class LoginService {

  readonly API_LOGIN = APP_CONSTANTS.END_POINT + 'login';
  readonly API_USER = APP_CONSTANTS.END_POINT + 'users';

  constructor(private http: HttpService) {
    if (!environment.production) { console.log('LoginService'); }
  }

  public signIn(email: string, password: string): Observable<UserResponse> {
    const body = { email, password };
    return this.http.post(this.API_LOGIN, body);
  }

  public signUp(body: User): Observable<UserResponse> {
    return this.http.post(this.API_USER, body);
  }

}
