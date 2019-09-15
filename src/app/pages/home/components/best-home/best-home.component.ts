import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as fromArticles from '@core/ngrx/selectors/article.selectors';
import { Observable } from 'rxjs';
import { Article } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-best-home',
  templateUrl: './best-home.component.html',
  styleUrls: ['./best-home.component.scss']
})

export class BestHomeComponent implements OnInit {

  articles$: Observable<Article[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.articles$ = this.getMostLikedArticles();
   }

  private getMostLikedArticles(): Observable<Article[]> {
    return this.store.select(fromArticles.getMostLiked);
  }

}
