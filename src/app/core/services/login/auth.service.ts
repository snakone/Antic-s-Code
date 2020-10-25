import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';
import { User, UserResponse } from '@shared/interfaces/interfaces';
import { filter } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({providedIn: 'root'})

export class AuthService {

  readonly API_AUTH = environment.api + 'auth';

  constructor(
    private http: HttpService,
    private auth: AngularFireAuth) { }

  public signIn(user: User): Observable<UserResponse> {
    return this.http
      .post<UserResponse>(this.API_AUTH, user)
      .pipe(
        filter(res => res && !!res.ok)
      );
  }

  public logOut(): void {
    this.auth.signOut();
  }

}
