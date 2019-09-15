import { Component, OnInit, ViewChild } from '@angular/core';

import { MatMenu } from '@angular/material/menu';
import { MENU, HOME_MENU } from '@app/shared/shared.data';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {

  @ViewChild('menu', { static: true }) menu: MatMenu;
  collapse = false;
  items = MENU;
  dropdown = HOME_MENU;

  constructor() { }

  ngOnInit() {
    this.listenCloseMenu();
  }

  private listenCloseMenu(): void {
    this.menu.closed.subscribe(() => this.collapse = !this.collapse);
  }

}
