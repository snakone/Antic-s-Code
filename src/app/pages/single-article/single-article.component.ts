import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as ArticleActions from '@core/ngrx/actions/article.actions';
import { Article } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.scss']
})

export class SingleArticleComponent implements OnInit {

  article: Article;

  constructor(private route: ActivatedRoute,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(ArticleActions.getArticleBySlug({ slug: this.getRoute() }));
  }

  private getRoute(): string {
    return this.route.snapshot.params.slug;
  }

}
