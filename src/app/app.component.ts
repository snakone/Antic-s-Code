import { Component, Inject, OnInit } from '@angular/core';
import { SwipeMenuService } from '@layout/navbar/services/swipe-menu/swipe-menu.service';
import { DOCUMENT } from '@angular/common';
import { IntersectionService } from '@shared/components/layout/intersection-observer/services/intersection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  disabled: boolean;

  constructor(private swipeService: SwipeMenuService,
              @Inject(DOCUMENT) private document: Document,
              private intersection: IntersectionService) { }

  ngOnInit(): void {
    this.intersection.hasEntered.subscribe((res: boolean) => { this.disabled = res; });
  }

  swipe(e: any) {
    if (e.center.x >= 200 || this.document.body.clientWidth >= 789 || this.disabled) { return; }
    this.swipeService.showMenuOnSwipe(true);
  }

}


