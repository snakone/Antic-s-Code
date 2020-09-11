import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { environment } from '@env/environment';

import {
  User,
  UserResponse,
  MostActiveResponse,
  MostActive,
  MessageRequest
 } from '@shared/interfaces/interfaces';

import { Observable } from 'rxjs';
import { StorageService } from '@core/storage/storage.service';
import { map, filter, tap } from 'rxjs/operators';
import { PushService } from '../push/push.service';
import { UsersFacade } from '@app/core/ngrx/users/users.facade';

@Injectable({providedIn: 'root'})

export class UserService {

  readonly API_USERS = environment.api + 'users';
  readonly API_TOKEN = environment.api + 'token';
  private user: User;
  public chatUser: string;

  constructor(
    private http: HttpService,
    private ls: StorageService,
    private userFacade: UsersFacade,
    private sw: PushService
  ) { }

  public getById(id: string): Observable<User> {
    return this.http
      .get<UserResponse>(environment.api + `user/${id}`)
      .pipe(
        filter(res => res && !!res.ok),
        map(_ => _.user)
      );
  }

  public getByName(name: string): Observable<User> {
    return this.http
      .get<UserResponse>(this.API_USERS + `/public/${name}`)
      .pipe(
        filter(res => res && !!res.ok),
        map(_ => _.user)
      );
  }

  public getUsers(): Observable<User[]> {
    return this.http
      .get<UserResponse>(this.API_USERS)
      .pipe(
        filter(res => res && !!res.ok),
        map(_ => _.users)
      );
  }

  public update(user: User): Observable<UserResponse> {
    return this.http
      .put<UserResponse>(this.API_USERS, user)
      .pipe(
        filter(res => res && !!res.ok),
        tap(res => {
          this.ls.setKey('token', res.token);
          this.userFacade.set(res.user);
        })
      );
  }

  public delete(): Observable<User> {
    return this.http
      .delete<UserResponse>(this.API_USERS)
      .pipe(
        filter(res => res && !!res.ok),
        map(_ => _.user)
      );
  }

  public getMostActive(): Observable<MostActive[]> {
    return this.http
      .get<MostActiveResponse>(this.API_USERS + '/active')
      .pipe(
        filter(res => res && !!res.ok),
        map(_ => _.users)
      );
  }

  public refreshToken(id: string): Observable<UserResponse> {
    return this.http
      .post<UserResponse>(this.API_TOKEN + `/${id}`, null)
      .pipe(
        filter(res => res && !!res.ok),
        tap(res => this.setToken(res))
      );
  }

  public verifyToken(): Observable<User> {
    return this.http
      .get<UserResponse>(this.API_TOKEN)
      .pipe(
        filter(res => res && !!res),
        map(res => res.user),
        tap(res => this.setUser(res))
      );
  }

  public sendMeAMessage(request: MessageRequest): Observable<UserResponse> {
    return this.http
    .post<UserResponse>(environment.api + 'message', request)
    .pipe(
      filter(res => res && !!res.ok)
    );
  }

  public getUser(): User {
    return this.user || null;
  }

  public getChatUser(): string {
    return this.chatUser || null;
  }

  private setUser(user: User): void {
    this.user = user;
    this.chatUser = user.name;
  }

  public setChatUser(name: string): void {
    this.chatUser = name;
  }

  public login(
    data: UserResponse,
    remember: boolean = false
  ): void {
      this.userFacade.set(data.user);
      this.setUser(data.user);
      this.ls.setKey('token', data.token);
      this.ls.setKey('user', data.user._id);
      this.ls.setKey('remember', remember);
      this.sw.showPrompt();
  }

  public logout(): void {
    this.ls.setKey('token', null);
    this.ls.setKey('welcome', false);
    this.ls.setKey('chat', true);
    this.userFacade.logOut();
    this.user = null;
    this.chatUser = null;
  }

  private setToken(data: UserResponse): void {
    this.ls.setKey('token', data.token);
    this.setUser(data.user);
  }

}


