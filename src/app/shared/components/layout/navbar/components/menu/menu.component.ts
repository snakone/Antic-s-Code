import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material/menu';
import { MENU } from '@app/shared/shared.data';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  @ViewChild('menu', { static: true }) menu: MatMenu;
  collapse = false;
  items = MENU;

  constructor() { }

  ngOnInit() {
    this.menu.closed.subscribe(() => this.collapse = !this.collapse);
  }

}
