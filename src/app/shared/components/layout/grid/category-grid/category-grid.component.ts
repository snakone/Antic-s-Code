import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs';
import { ArticlesFacade } from '@store/articles/article.facade';
import { MAIN_CATEGORIES } from '@shared/data/categories';

@Component({
  selector: 'app-category-grid',
  templateUrl: './category-grid.component.html',
  styleUrls: ['./category-grid.component.scss']
})

export class CategoryGridComponent implements OnInit {

  @Input() isHome = false;
  categories = MAIN_CATEGORIES;
  count$: Observable<object>;

  constructor(private articlesFacade: ArticlesFacade) { }

  ngOnInit() {
    this.count$ = this.articlesFacade.byCategoryCount$;
  }

}
