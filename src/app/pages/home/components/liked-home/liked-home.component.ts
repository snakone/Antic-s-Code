import { Component, OnInit, OnDestroy } from '@angular/core';

import { ArticlesFacade } from '@store/articles/article.facade';

import { Subject, Observable } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import { Article } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-liked-home',
  templateUrl: './liked-home.component.html',
  styleUrls: ['./liked-home.component.scss']
})

export class LikedHomeComponent implements OnInit {

  articles$: Observable<Article[]>;

  constructor(private articleFacade: ArticlesFacade) { }

  ngOnInit() {
    this.articles$ = this.articleFacade.mostLiked$;
  }

}
