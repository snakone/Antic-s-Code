import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpService } from './http/http.service';
import { Observable } from 'rxjs';
import { UserResponse } from '@app/shared/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})

export class GoogleService {

  readonly API_GOOGLE = environment.api + 'google';
  public loaded = false;
  public auth2: any;

  constructor(private http: HttpService) {
    if (!environment.production) { console.log('GoogleService'); }
  }

  public googleSignIn(token: string): Observable<UserResponse> {
    return this.http.post(this.API_GOOGLE, {token});
  }

}
