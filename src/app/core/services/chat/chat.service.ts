import { Injectable } from '@angular/core';
import { SocketService } from '@core/sockets/services/socket.service';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({providedIn: 'root'})

export class ChatService {

  constructor(
    private socket: SocketService,
    private userSrv: UserService
  ) { }

  public send(message: string): void {
    const payload = {
      user: this.userSrv.getUser().name,
      message
    };

    this.socket.emit('message', payload);
  }

  public listen(): Observable<any> {
    return this.socket.listen('new-message');
  }

}
