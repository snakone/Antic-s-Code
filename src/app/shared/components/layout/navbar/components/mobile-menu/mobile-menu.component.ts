import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { MENU, HOME_MENU } from '@app/shared/shared.data';
import { User } from '@app/shared/interfaces/interfaces';
import { Observable } from 'rxjs';
import * as fromUser from '@core/ngrx/selectors/user.selectors';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})

export class MobileMenuComponent implements OnInit {

  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  items = MENU;
  menu = HOME_MENU;
  user$: Observable<User>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.user$ = this.store.select(fromUser.getUser);
  }

  closeDrawer(): void {
    this.close.emit();
  }

}
