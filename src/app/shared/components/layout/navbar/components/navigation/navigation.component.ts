import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material/menu';
import { MENU, HOME_MENU } from '@app/shared/shared.data';
import { User } from '@app/shared/interfaces/interfaces';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as fromUsers from '@core/ngrx/selectors/user.selectors';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {

  @ViewChild('homeMenu', { static: true }) menu: MatMenu;
  user$: Observable<User>;
  collapse = false;
  items = MENU;
  dropdown = HOME_MENU;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.listenCloseMenu();
    this.getUser();
  }

  private listenCloseMenu(): void {
    this.menu.closed.subscribe(() => this.collapse = !this.collapse);
  }

  private getUser(): void {
    this.user$ = this.store.select(fromUsers.getUser);
  }

}
