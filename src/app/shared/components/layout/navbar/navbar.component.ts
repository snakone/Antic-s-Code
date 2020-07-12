import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { CrafterService } from '@core/services/crafter/crafter.service';
import { UsersFacade } from '@store/users/users.facade';
import { Observable } from 'rxjs';

import { User } from '@shared/interfaces/interfaces';
import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavBarComponent implements OnInit {

  @ViewChild('drawer') drawer: ElementRef;
  user$: Observable<User>;

  constructor(
    private crafter: CrafterService,
    private usersFacade: UsersFacade
  ) { }

  ngOnInit() {
    this.user$ = this.usersFacade.user$;
  }

  public openLogin(): void {
    this.crafter.dialog(LoginComponent, {register: false}, 'Login');
  }

  public openDrawer(): void {
    try {
      this.drawer.nativeElement.open();
    } catch (err) { console.log(err); }
  }

  public closeDrawer(): void {
    try {
      this.drawer.nativeElement.close();
    } catch (err) { console.log(err); }
  }

}
