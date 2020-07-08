import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';

import * as UserActions from '@core/ngrx/actions/user.actions';
import * as fromUsers from '@core/ngrx/selectors/user.selectors';
import { User } from '@shared/interfaces/interfaces';

@Injectable({providedIn: 'root'})

export class UsersFacade {

  public user$ = this.store.select(fromUsers.get);
  public all$ = this.store.select(fromUsers.getAll);
  public byName$ = this.store.select(fromUsers.getByName);
  public email$ = this.store.select(fromUsers.getEmail);
  public allLoaded$ = this.store.select(fromUsers.getAllLoaded);
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

  public set(user: User): void {
    this.store.dispatch(UserActions.set({user}));
  }

  public setEmail(email: string): void {
    this.store.dispatch(UserActions.setEmail({email}));
  }

  public logOut(): void {
    this.store.dispatch(UserActions.userLogOut());
  }

  public resetByName(): void {
    this.store.dispatch(UserActions.resetUserName());
  }

}
