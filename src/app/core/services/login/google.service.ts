import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';
import { UserResponse } from '@shared/interfaces/interfaces';
import { filter } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class GoogleService {

  readonly API_GOOGLE = environment.api + 'google';
  public loaded = false;
  public auth2: any;

  constructor(private http: HttpService) { }

  public signIn(token: string): Observable<UserResponse> {
    return this.http
      .post<UserResponse>(this.API_GOOGLE, {token})
      .pipe(
        filter(res => res && !!res.ok)
      );
  }

}
