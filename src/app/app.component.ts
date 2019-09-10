import { Component, Inject, OnInit } from '@angular/core';
import { SwipeMenuService } from '@layout/navbar/services/swipe-menu/swipe-menu.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document,
              private swipeService: SwipeMenuService) { }

  ngOnInit() { }

  swipe(e: any): void {
    const x = e.center.x;
    const w = this.document.body.clientWidth;
    if (x >= 200 || w >= 789) { return; }
    this.swipeService.showMenuOnSwipe(true);
  }

  goTop(): void {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

}


