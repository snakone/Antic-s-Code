import { Injectable } from '@angular/core';
import { SocketService } from '@core/sockets/services/socket.service';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';
import { ChatMessage, ChatResponse } from '@shared/interfaces/interfaces';
import { environment } from '@env/environment';
import { HttpService } from '@core/services/http/http.service';
import { filter, map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class ChatService {

  readonly API_CHAT = environment.api + 'chat';

  constructor(
    private socket: SocketService,
    private userSrv: UserService,
    private http: HttpService
  ) { }

  public send(message: string): string {
    if (!this.userSrv.getChatUser()) {
      this.userSrv.setChatUser(this.userSrv.getUser()?.name ||
                  `Invitado ${Math.floor(Math.random() * 1000)}`);
    }

    const payload: ChatMessage = {
      user: this.userSrv.getChatUser(),
      message,
      own: true,
      avatar: this.userSrv.getUser()?.profile?.avatar || ''
    };

    this.socket.emit('message', payload);
    return message;
  }

  public listen(): Observable<ChatMessage> {
    return this.socket.listen('new-message');
  }

  public getMessages(): Observable<ChatMessage[]> {
    return this.http
      .get<ChatResponse>(this.API_CHAT)
      .pipe(
        filter(res => res && !!res.ok),
        map(_ => _.messages)
      );
  }

}
