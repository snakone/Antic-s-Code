import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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

  @ViewChild('drawer') drawer: ElementRef;
  user$: Observable<User>;

  constructor(private crafter: CrafterService,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.user$ = this.store.select(fromUser.getUser);
  }

  openLogin(): void {
    this.crafter.dialog(LoginComponent, {register: false});
  }

  openDrawer(): void {
    try {
      this.drawer.nativeElement.open();
    } catch (err) { console.log(err); }
  }

  closeDrawer(): void {
    try {
      this.drawer.nativeElement.close();
    } catch (err) { console.log(err); }
  }

}
