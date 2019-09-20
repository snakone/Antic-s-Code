import { Component, Inject, OnInit, AfterViewInit } from '@angular/core';
import { SwipeMenuService } from '@layout/navbar/services/swipe-menu/swipe-menu.service';
import { DOCUMENT } from '@angular/common';
import { AppState } from './app.config';
import { Store } from '@ngrx/store';

import * as UserActions from '@core/ngrx/actions/user.actions';
import { StorageService } from './core/storage/storage.service';
import { TranslateService } from '@ngx-translate/core';
import { LanguageSnackComponent } from '@layout/snackbars/language-snack/language-snack.component';
import { ThemeService, CrafterService } from './core/services/services.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, AfterViewInit {

  constructor(@Inject(DOCUMENT) private document: Document,
              private swipeService: SwipeMenuService,
              private ls: StorageService,
              private translate: TranslateService,
              private crafter: CrafterService,
              private theme: ThemeService,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.checkUserToken();
    this.setTheme();
  }

  ngAfterViewInit() {
    this.openLanguageSnack();
  }

  swipe(e: any): void {
    const x = e.center.x;
    const w = this.document.body.clientWidth;
    if (x >= 200 || w >= 789) { return; }
    this.swipeService.showMenuOnSwipe(true);
  }

  private checkUserToken(): void {
    if (this.ls.get('token')) {
      this.store.dispatch(UserActions.verifyToken());
    }
  }

  private openLanguageSnack(): void {
    if (!(this.ls.get('lang') === 'es') || this.ls.get('user_lang')) { return; }
    setTimeout(() => {
      this.crafter.snack(LanguageSnackComponent, -1);  // Infinite
    }, 8000);
  }

  private setTheme(): void {
    this.theme.set(this.ls.get('theme'));
  }

}


