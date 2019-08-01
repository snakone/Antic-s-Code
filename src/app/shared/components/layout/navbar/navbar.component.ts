import { Component, OnInit } from '@angular/core';

import { SwipeMenuService } from './services/swipe-menu/swipe-menu.service';
import { MENU } from '@app/shared/shared.data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavBarComponent implements OnInit {

  show = false;
  items = MENU;

  constructor(private swipeMenu: SwipeMenuService) { }

  ngOnInit() {
    this.listenMenu();
  }

  private listenMenu(): void {
    this.swipeMenu.show.subscribe((res: boolean) => this.show = res);
  }

}
