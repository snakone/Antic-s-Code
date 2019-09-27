import { Component, OnInit } from '@angular/core';

import { SwipeMenuService } from './services/swipe-menu.service';
import { MENU } from '@app/shared/shared.data';
import { LoginComponent } from '../../login/login.component';
import { AppState } from '@app/app.config';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '@app/shared/interfaces/interfaces';
import * as fromUser from '@core/ngrx/selectors/user.selectors';
import { CrafterService } from '@core/services/services.index';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavBarComponent implements OnInit {

  show = false;
  items = MENU;
  user$: Observable<User>;

  constructor(private crafter: CrafterService,
              private swipeMenu: SwipeMenuService,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.listenMenu();
    this.user$ = this.store.select(fromUser.getUser);
  }

  private listenMenu(): void {
    this.swipeMenu.show
      .subscribe((res: boolean) => this.show = res);
  }

  openLogin(): void {
    this.crafter.dialog(LoginComponent);
  }

}
