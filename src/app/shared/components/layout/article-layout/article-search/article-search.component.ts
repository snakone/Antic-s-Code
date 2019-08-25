import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as AppActions from '@core/ngrx/actions/app.actions';

@Component({
  selector: 'app-article-search',
  templateUrl: './article-search.component.html',
  styleUrls: ['./article-search.component.scss']
})

export class ArticleSearchComponent implements OnInit {

  value: string;
  valueChanged: Subject<string> = new Subject<string>();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.subscribeToChanges();
  }

  private subscribeToChanges(): void {
    this.valueChanged
      .pipe(
        debounceTime(2000),
        distinctUntilChanged()
      )
      .subscribe((change: string) => this.store.dispatch(AppActions.SeachArticles({value: change})));
  }

  changed(value: string): void {
    if (value === '') { value = null; }
    this.valueChanged.next(value);
  }

}
