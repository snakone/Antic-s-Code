import { Component, OnInit, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { UserService } from '@core/services/user/user.service';

@Component({
  selector: 'app-inbox-welcome',
  templateUrl: './inbox-welcome.component.html',
  styleUrls: ['./inbox-welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class InboxWelcomeComponent implements OnInit {

  @Output() new = new EventEmitter<void>();
  user: string;

  constructor(private userSrv: UserService) { }

  ngOnInit(): void {
    this.user = this.userSrv.getUser().name;
  }

  public emitNew(): void {
    this.new.emit();
  }

}
