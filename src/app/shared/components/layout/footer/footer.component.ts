import { Component } from '@angular/core';
import { FOOTER_LIST } from '@app/shared/shared.data';
import { LoginComponent } from '../../login/login.component';
import { Router } from '@angular/router';
import { CrafterService } from '@app/core/services/crafter/crafter.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {

  list = FOOTER_LIST;

  constructor(private crafter: CrafterService,
              private router: Router) { }

  manage(value: string): void {
    if (value === 'register') {
      this.crafter.dialog(LoginComponent, {register: true});
      return;
    }

    this.router.navigateByUrl(`/${value}`);
  }

}
