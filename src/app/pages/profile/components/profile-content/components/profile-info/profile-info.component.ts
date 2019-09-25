import { Component, OnInit, Input } from '@angular/core';
import { User } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})

export class ProfileInfoComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() { }

}
