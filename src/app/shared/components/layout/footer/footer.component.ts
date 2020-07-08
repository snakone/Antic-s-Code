import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { CrafterService } from '@core/services/crafter/crafter.service';
import { UserService } from '@core/services/user/user.service';
import { FOOTER_LIST } from '@shared/data/footer';

import { LoginComponent } from '../../login/login.component';
import { MessageModalComponent } from '../dialogs/message-modal/message-modal.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {

  list = FOOTER_LIST;

  constructor(
    private crafter: CrafterService,
    private router: Router,
    private userSrv: UserService
  ) { }

  public manage(value: string):
    MatDialogRef<LoginComponent> |
    MatDialogRef<MessageModalComponent> {
      if (value === 'register') {
        return !this.userSrv.getUser() ?
        this.crafter.dialog(LoginComponent, {register: true}, 'Login') :
        this.crafter.modal('errors.register.title',
                           'errors.register.message',
                           'info');;
  }

    this.router.navigateByUrl(`/${value}`);
  }

}
