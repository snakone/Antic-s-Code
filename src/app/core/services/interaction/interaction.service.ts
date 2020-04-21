import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { APP_CONSTANTS } from '@app/app.config';
import { Interaction, InteractionResponse } from '@app/shared/interfaces/interfaces';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})

export class InteractionService {

  readonly API_INTERACTION = environment.api + 'interaction';

  constructor(private http: HttpService) {
    if (!environment.production) { console.log('InteractionService'); }
  }

  public doInteraction(interaction: Interaction): Observable<InteractionResponse> {
    return this.http.post(this.API_INTERACTION, interaction);
  }

  public getInteractionByUser(): Observable<InteractionResponse> {
    return this.http.get(this.API_INTERACTION);
  }

}
