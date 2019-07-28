import { Component, Inject } from '@angular/core';
import { SwipeMenuService } from '@layout/navbar/services/swipe-menu/swipe-menu.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(private swipeService: SwipeMenuService,
              @Inject(DOCUMENT) private document: Document) { }

  opened: boolean;

  swipe(e: any) {
    if (e.center.x >= 200 || this.document.body.clientWidth >= 789) { return; }
    this.swipeService.showMenuOnSwipe(true);
  }

}


