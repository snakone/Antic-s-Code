import { Input } from '@angular/core';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserService } from '@core/services/user/user.service';

@Component({
  selector: 'app-inbox-welcome',
  templateUrl: './inbox-welcome.component.html',
  styleUrls: ['./inbox-welcome.component.scss']
})

export class InboxWelcomeComponent implements OnInit {

  @Input() show: boolean;
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
