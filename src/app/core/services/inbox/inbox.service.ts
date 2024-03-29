import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Observable, of } from 'rxjs';
import { environment } from '@env/environment';
import { filter, map } from 'rxjs/operators';
import { Inbox, InboxMessage, InboxResponse, ServerResponse } from '@shared/interfaces/interfaces';

@Injectable({ providedIn: 'root'})

export class InboxService {

  readonly API_INBOX = environment.api + 'mail/';

  constructor(private http: HttpService) { }

  public send(
    message: InboxMessage
  ): Observable<ServerResponse> {
    return this.http
      .post<ServerResponse>(this.API_INBOX, { message })
      .pipe(
        filter(res => res && !!res.ok)
      );
  }

  public get(): Observable<Inbox[]> {
    return this.http
      .get<InboxResponse>(this.API_INBOX)
      .pipe(
        filter(res => res && !!res.ok),
        map(res => {
          res.mail.forEach(i => i.messages.reverse());
          return res.mail;
        })
      );
  }

  public markUnread(
    id: string, mark: boolean
  ): Observable<ServerResponse> {
    return this.http
      .post<ServerResponse>(this.API_INBOX + 'mark', {id, mark})
      .pipe(
        filter(res => res && !!res.ok)
      );
  }

}

