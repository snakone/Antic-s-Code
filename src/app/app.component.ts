import { Component, Inject, OnInit } from '@angular/core';
import { SwipeMenuService } from '@layout/navbar/services/swipe-menu/swipe-menu.service';
import { IntersectionService } from '@layout/intersection-observer/services/intersection.service';
import { DOCUMENT } from '@angular/common';
import { ArticleService } from './core/services/services.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  disabled: boolean;

  constructor(@Inject(DOCUMENT) private document: Document,
              private swipeService: SwipeMenuService,
              private intersection: IntersectionService,
              private article: ArticleService) { }

  ngOnInit(): void {
    this.subscribeIntersection();
  }

  swipe(e: any): void {
    const x = e.center.x;
    const w = this.document.body.clientWidth;
    if (x >= 200 || w >= 789 || this.disabled) { return; }
    this.swipeService.showMenuOnSwipe(true);
  }

  goTop(): void {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  private subscribeIntersection(): void {
    this.intersection.hasEntered.subscribe((res: boolean) => this.disabled = res );
  }

}


