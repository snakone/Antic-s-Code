import { Component, OnInit } from '@angular/core';
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

  articles$: Observable<Article[]>;

  constructor(store: Store<AppState>) {
    this.articles$ = store.select('AppState')
    .pipe(map((res: AppState) => res.articles.slice(0, 4)));
   }

  ngOnInit() { }

}
