import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { User, UserStats } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-user-stats-box',
  templateUrl: './user-stats-box.component.html',
  styleUrls: ['./user-stats-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class UserStatsBoxComponent {

  @Input() title: string;
  @Input() user: User;
  @Input() stats: UserStats;
  objectKeys = Object.keys;

  constructor() { }

}
