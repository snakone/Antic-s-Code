import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';

import * as UserActions from './user.actions';
import * as fromUsers from './user.selectors';
import { User } from '@shared/interfaces/interfaces';

@Injectable({providedIn: 'root'})

export class UsersFacade {

  public user$ = this.store.select(fromUsers.get);
  public users$ = this.store.select(fromUsers.getUsers);
  public filtered$ = this.store.select(fromUsers.getFiltered);
  public byName$ = this.store.select(fromUsers.getByName);
  public email$ = this.store.select(fromUsers.getEmail);
  public last$ = this.store.select(fromUsers.getLast);
  public lastLoaded$ = this.store.select(fromUsers.getLastLoaded);
  public usersLoaded$ = this.store.select(fromUsers.getUsersLoaded);
  public mostActive$ = this.store.select(fromUsers.getMostActive);
  public mostActiveLoaded$ = this.store.select(fromUsers.getMostActiveLoaded);

  constructor(private store: Store<AppState>) { }

  public verifyToken(): void {
    this.store.dispatch(UserActions.verifyToken());
  }

  public refreshToken(id: string): void {
    this.store.dispatch(UserActions.refreshToken({id}));
  }

  public get(): void {
    this.store.dispatch(UserActions.get());
  }

  public getByName(name: string): void {
    this.store.dispatch(UserActions.getByName({name}));
  }

  public getMostActive(): void {
    this.store.dispatch(UserActions.getMostActive());
  }

  public getLast(): void {
    this.store.dispatch(UserActions.getLast());
  }

  public set(user: User): void {
    this.store.dispatch(UserActions.set({user}));
  }

  public setEmail(email: string): void {
    this.store.dispatch(UserActions.setEmail({email}));
  }

  public search(value: string): void {
    this.store.dispatch(UserActions.search({value}));
  }

  public sort(rol: string): void {
    this.store.dispatch(UserActions.sort({rol}));
  }

  public logOut(): void {
    this.store.dispatch(UserActions.userLogOut());
  }

  public resetByName(): void {
    this.store.dispatch(UserActions.resetUserName());
  }

}
