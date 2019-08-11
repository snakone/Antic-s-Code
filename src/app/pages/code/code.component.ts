import { Component, OnInit } from '@angular/core';
import { Article } from '@app/shared/interfaces/interfaces';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})

export class CodeComponent implements OnInit {

  articles$: Observable<Article[]>;

  constructor(store: Store<AppState>) {
    this.articles$ = store.select(state => state.articles)
      .pipe(map((res: any) => res.articles));
  }

  ngOnInit() { }

}
