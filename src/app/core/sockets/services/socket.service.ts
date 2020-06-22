import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})

export class SocketService {

  public isOn: boolean;

  constructor(private socket: Socket) {
    this.isOn = false;
    this.check();
  }

  private check(): void {
    this.socket.on('connect', () => this.isOn = true);
    this.socket.on('disconnect', () => this.isOn = false);
  }

  public emit(event: string, payload?: any, cb?: () => void): void {
    this.socket.emit(event, payload, cb);
  }

  public listen<T>(event: string): Observable<T> {
    return this.socket.fromEvent(event);
  }

}
