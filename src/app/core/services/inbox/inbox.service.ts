import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Observable, of } from 'rxjs';
import { environment } from '@env/environment';
import { filter, map } from 'rxjs/operators';
import { Inbox, InboxMessage, InboxResponse, ServerResponse } from '@shared/interfaces/interfaces';
import { UserService } from '../user/user.service';

@Injectable({ providedIn: 'root'})

export class InboxService {

  readonly API_INBOX = environment.api + 'inbox/';

  constructor(private http: HttpService, private userSrv: UserService) { }

  public send(
    message: InboxMessage
  ): Observable<ServerResponse> {
    return this.http
      .post<ServerResponse>(this.API_INBOX, { message })
      .pipe(
        filter(res => res && !!res.ok)
      );
  }

  public getInbox(): Observable<InboxMessage[]> {
    return this.http
      .get<InboxResponse>(this.API_INBOX)
      .pipe(
        filter(res => res && !!res.ok),
        map(res => res.inbox)
      );
  }

  public get(): Observable<InboxMessage[]> {
    return of(
      [
        {
          _id: '1',
          sender: this.userSrv.getUser(),
          subject: 'Esto es una prueba',
          message: 'Hello my name is Sergio, i develop this app to post articles....',
          date: '11:12 AM',
          read: true,
          receiver: 'Allison'
        },
        {
          _id: '2',
          sender: this.userSrv.getUser(),
          subject: 'Esto es una prueba',
          message: 'Hello my name is Sergio, i develop this app to post articles....',
          date: '18:45 AM',
          read: true,
          receiver: 'Pepito'
        },
        {
          _id: '3',
          sender: this.userSrv.getUser(),
          subject: 'Develop Website',
          message: 'I\'m develiping a webite about technology....',
          date: '08:05 AM',
          read: false,
          receiver: 'Juan'
        },
        {
          _id: '4',
          sender: this.userSrv.getUser(),
          subject: 'Esto es una prueba',
          message: 'Hello my name is Sergio, i develop this app to post articles....',
          date: '11:12 AM',
          read: false,
          receiver: 'Allison'
        },
        {
          _id: '5',
          sender: this.userSrv.getUser(),
          subject: 'Esto es una prueba',
          message: 'Hello my name is Sergio, i develop this app to post articles....',
          date: '11:12 AM',
          read: true,
          receiver: 'Allison'
        },
        {
          _id: '6',
          sender: this.userSrv.getUser(),
          subject: 'Esto es una prueba',
          message: 'Hello my name is Sergio, i develop this app to post articles....',
          date: '11:12 AM',
          read: true,
          receiver: 'Allison'
        },
        {
          _id: '7',
          sender: this.userSrv.getUser(),
          subject: 'Esto es una Linkin',
          message: 'Hello my name is Sergio, i develop this app to post articles....',
          date: '11:12 AM',
          read: true,
          receiver: 'Allison'
        },
        {
          _id: '8',
          sender: this.userSrv.getUser(),
          subject: 'Esto es una prueba',
          message: 'Hello my name is Sergio, i develop this app to post articles....',
          date: '11:12 AM',
          read: false,
          receiver: 'Allison'
        },
      ]
    );
  }

}

