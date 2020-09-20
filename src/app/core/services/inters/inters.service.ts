import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Interaction, InteractionResponse } from '@shared/interfaces/interfaces';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { filter } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class IntersService {

  readonly API_INTERACTION = environment.api + 'interaction';

  constructor(private http: HttpService) { }

  public make(
    interaction: Interaction
  ): Observable<InteractionResponse> {
    return this.http
      .post<InteractionResponse>(this.API_INTERACTION, interaction)
      .pipe(
        filter(res => res && !!res.ok)
      );
  }

}
