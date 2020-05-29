import { Component, OnInit, Input } from '@angular/core';
import { User } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-favorite-lang-box',
  templateUrl: './favorite-lang-box.component.html',
  styleUrls: ['./favorite-lang-box.component.scss']
})

export class FavoriteLangBoxComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit(): void {
  }

}
