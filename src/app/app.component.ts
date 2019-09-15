import { Component, Inject, OnInit } from '@angular/core';
import { SwipeMenuService } from '@layout/navbar/services/swipe-menu/swipe-menu.service';
import { DOCUMENT } from '@angular/common';
import { AppState } from './app.config';
import { Store } from '@ngrx/store';
import * as UserActions from '@core/ngrx/actions/user.actions';
import { StorageService } from './core/storage/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document,
              private swipeService: SwipeMenuService,
              private ls: StorageService,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.checkUserToken();
  }

  private checkUserToken(): void {
    if (this.ls.get('token')) {
      this.store.dispatch(UserActions.verifyToken());
    }
  }

  swipe(e: any): void {
    const x = e.center.x;
    const w = this.document.body.clientWidth;
    if (x >= 200 || w >= 789) { return; }
    this.swipeService.showMenuOnSwipe(true);
  }

  goTop(): void {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

}


