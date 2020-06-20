import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})

export class SocketService {

  isOn: boolean;

  constructor(private socket: Socket) {
    this.isOn = false;
    this.check();
  }

  private check(): void {
    this.socket.on('connect', () => {
      console.log('Socket conectado');
      this.isOn = true;
    });

    this.socket.on('disconnect', () => {
      console.log('Socket desconectado');
      this.isOn = false;
    });
  }

  public emit(event: string, payload?: any, cb?: () => void): void {
    this.socket.emit(event, payload, cb);
  }

  public listen<T>(event: string): Observable<T> {
    return this.socket.fromEvent(event);
  }

}
