import { Component, OnInit } from '@angular/core';
import { AppState } from './app.config';
import { Store } from '@ngrx/store';

import * as UserActions from '@core/ngrx/actions/user.actions';
import { StorageService } from '@core/storage/storage.service';
import { LanguageSnackComponent } from '@layout/snackbars/language-snack/language-snack.component';
import { MaintenanceComponent } from '@layout/dialogs/maintenance/maintenance.component';
import { CrafterService } from '@core/services/crafter/crafter.service';
import { ThemeService } from '@core/services/theme/theme.service';
import { PushService } from '@core/services/push/push.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  loaded = false;

  constructor(private ls: StorageService,
              private crafter: CrafterService,
              private theme: ThemeService,
              private store: Store<AppState>,
              private sw: PushService) { }

  ngOnInit() {
    this.checkUserToken();
    this.setTheme();
    this.serviceWorker();

    window.onload = () => {
      this.onLoad();
    }
  }

  private checkUserToken(): void {
    if (this.ls.get('token')) {
      this.store.dispatch(UserActions.verifyToken());
    }
  }

  private openLanguageSnack(): void {
    if (!(this.ls.get('lang') === 'es') ||
          this.ls.get('user_lang')) { return; }
    setTimeout(() => {
      this.crafter.snack(LanguageSnackComponent, -1);  // Infinite
    }, 8000);
  }

  private setTheme(): void {
    this.theme.set(this.ls.get('theme'));
  }

  private serviceWorker(): void {
    this.sw.updateSW();
    this.sw.showPrompt();
  }

  private onLoad(): void {
    document.getElementById('app').classList.remove('hide');
    this.loaded = true;
    this.openLanguageSnack();

    if (environment.maintenance) {
      this.sorryMaintenance();
    }
  }

  private sorryMaintenance(): void {
    setTimeout(() => {
      this.crafter.dialog(
        MaintenanceComponent, { cause: 'Google Sign In'}
      );
    }, 4000);
  }

}


