import { Component } from '@angular/core';
import { FOOTER_LIST } from '@app/shared/shared.data';
import { LoginComponent } from '../../login/login.component';
import { Router } from '@angular/router';
import { CrafterService } from '@app/core/services/crafter/crafter.service';
import { UserService } from '@app/core/services/user/user.service';
import { MatDialogRef } from '@angular/material/dialog';
import { AlreadyLoggedComponent } from '../dialogs/already-logged/already-logged.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {

  list = FOOTER_LIST;

  constructor(private crafter: CrafterService,
              private router: Router,
              private user: UserService) { }

  manage(value: string):
    MatDialogRef<LoginComponent> |
    MatDialogRef<AlreadyLoggedComponent> {
      if (value === 'register') {
        return !this.user.getUser() ?
        this.crafter.dialog(LoginComponent, {register: true}) :
        this.crafter.dialog(AlreadyLoggedComponent);
  }

    this.router.navigateByUrl(`/${value}`);
  }

}
