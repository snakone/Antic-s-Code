import { Component, OnInit } from '@angular/core';
import { RELATED_ARTICLES } from '@app/shared/shared.data';
import { Observable } from 'rxjs';
import { Article } from '@app/shared/interfaces/interfaces';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-last-articles-box',
  templateUrl: './last-articles-box.component.html',
  styleUrls: ['./last-articles-box.component.scss']
})
export class LastArticlesBoxComponent implements OnInit {

  relateds = RELATED_ARTICLES;
  articles$: Observable<Article[]>;

  constructor(store: Store<AppState>) {
    this.articles$ = store.select('articleState')
    .pipe(map((res: AppState) => res.articles));
   }

  ngOnInit() { }

}
