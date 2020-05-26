import { Component, Input } from '@angular/core';
import { User } from '@shared/interfaces/interfaces';
import { CrafterService } from '@core/services/crafter/crafter.service';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})

export class UserCardComponent {

  @Input() user: User;
  @Input() skeleton: boolean;
  @Input() last: boolean;

  constructor(private crafter: CrafterService) { }

  public show(): void {
    console.log('hey');
  }

}
