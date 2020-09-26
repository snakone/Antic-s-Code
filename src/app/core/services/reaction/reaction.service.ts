import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { filter } from 'rxjs/operators';
import { Reaction, ReactionResponse } from '@app/shared/interfaces/interfaces';

@Injectable({providedIn: 'root'})

export class ReactionService {

  readonly API_REACTION = environment.api + 'reaction';

  constructor(private http: HttpService) { }

  public make(
    reaction: Reaction
  ): Observable<ReactionResponse> {
    return this.http
      .post<ReactionResponse>(this.API_REACTION, reaction)
      .pipe(
        filter(res => res && !!res.ok)
      );
  }

}
