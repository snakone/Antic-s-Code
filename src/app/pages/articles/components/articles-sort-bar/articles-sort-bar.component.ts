import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { ArticlesFacade } from '@store/articles/article.facade';

@Component({
  selector: 'app-articles-sort-bar',
  templateUrl: './articles-sort-bar.component.html',
  styleUrls: ['./articles-sort-bar.component.scss']
})

export class ArticlesSortBarComponent implements OnInit {

  @Input() active = false;
  @Output() grid = new EventEmitter<boolean>();
  count$: Observable<number>;

  constructor(private articleFacade: ArticlesFacade) { }

  ngOnInit() {
    this.count$ = this.articleFacade.count$;
  }

  public sort(): void {
    this.active = !this.active;
    this.grid.emit(this.active);
  }

}
