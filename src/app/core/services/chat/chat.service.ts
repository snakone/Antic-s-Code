import { Injectable } from '@angular/core';
import { SocketService } from '@core/sockets/services/socket.service';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';
import { ChatMessage, ChatResponse, ServerResponse } from '@shared/interfaces/interfaces';
import { environment } from '@env/environment';
import { HttpService } from '@core/services/http/http.service';
import { filter, map } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Injectable({providedIn: 'root'})

export class ChatService {

  readonly API_CHAT = environment.api + 'chat';

  constructor(
    private socket: SocketService,
    private userSrv: UserService,
    private http: HttpService,
    private translate: TranslateService
  ) { }

  public getMessages(): Observable<ChatMessage[]> {
    return this.http
      .get<ChatResponse>(this.API_CHAT)
      .pipe(
        filter(res => res && !!res.ok),
        map(_ => _.messages)
      );
  }

  public deleteById(id: string): Observable<ServerResponse> {
    return this.http
      .delete<ServerResponse>(this.API_CHAT + '/' + id)
      .pipe(
        filter(res => res && !!res.ok)
      );
  }

  public send(message: string): string {
    const chatUser = this.userSrv.getChatUser();
    const user = this.userSrv.getUser();
    if (!chatUser) {
      this.userSrv.setChatUser(user?.name ||
                  `${this.translate.instant('GUEST')} ${Math.floor(Math.random() * 1000)}`);
    }

    const payload: ChatMessage = {
      user: this.userSrv.getChatUser(),
      message,
      own: true,
      avatar: user?.profile?.avatar || ''
    };

    this.socket.emit('message', payload);
    return message;
  }

  public listen(): Observable<ChatMessage> {
    return this.socket.listen('new-message');
  }

}
