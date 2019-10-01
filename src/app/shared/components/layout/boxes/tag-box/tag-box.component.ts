import { Component, OnInit } from '@angular/core';
import { TAGS_ICON } from '@app/shared/shared.data';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import { Router } from '@angular/router';
import * as SearchActions from '@core/ngrx/actions/search.actions';

@Component({
  selector: 'app-tag-box',
  templateUrl: './tag-box.component.html',
  styleUrls: ['./tag-box.component.scss']
})

export class TagBoxComponent implements OnInit {

  tags = TAGS_ICON;

  constructor(private store: Store<AppState>,
              private router: Router) { }

  ngOnInit() { }

  search(value: string): void {
    this.store.dispatch(SearchActions
      .searchContent({ request: { value } }));
    this.router.navigateByUrl('/search');
  }

}
