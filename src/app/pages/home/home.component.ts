import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as ArticleActions from '@core/ngrx/actions/article.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.getStoreData();
  }

  private getStoreData(): void {
    this.store.dispatch(ArticleActions.getArticlesCount());
    this.store.dispatch(ArticleActions.getMostLikedArticles());
    this.store.dispatch(ArticleActions.getLastArticles());
  }

}
