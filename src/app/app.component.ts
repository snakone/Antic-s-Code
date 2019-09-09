import { Component, Inject, OnInit } from '@angular/core';
import { SwipeMenuService } from '@layout/navbar/services/swipe-menu/swipe-menu.service';
import { IntersectionService } from '@layout/intersection-observer/services/intersection.service';
import { DOCUMENT } from '@angular/common';
import { AppState } from './app.config';
import { Store } from '@ngrx/store';
import * as ArticleActions from '@core/ngrx/actions/article.actions';
import * as CategoryActions from '@core/ngrx/actions/category.actions';
import * as CodeActions from '@core/ngrx/actions/code.actions';

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
              private store: Store<AppState>) { }

  ngOnInit(): void {
    this.subscribeIntersection();
    this.getStoreData();
  }

  getStoreData(): void {
    this.store.dispatch(CategoryActions.getCategories());
    this.store.dispatch(ArticleActions.getLastArticles());
    this.store.dispatch(CodeActions.getCode());
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
    this.intersection.hasEntered
     .subscribe((res: boolean) => this.disabled = res);
  }

}


