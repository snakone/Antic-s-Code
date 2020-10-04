import { ChangeDetectionStrategy, Component, Input, OnInit, OnDestroy } from '@angular/core';
import { NewsFacade } from '@store/news/news.facade';
import { News } from '@shared/interfaces/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-news-sidebar',
  templateUrl: './single-news-sidebar.component.html',
  styleUrls: ['./single-news-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SingleNewsSidebarComponent implements OnInit, OnDestroy {

  @Input() notice: News;
  byCategory$: Observable<News[]>;

  constructor(private newsFacade: NewsFacade) { }

  ngOnInit() {
    this.byCategory$ = this.newsFacade.byCategory$;
    this.getNewsByCategory();
  }

  private getNewsByCategory(): void {
    if (this.notice) {
      this.newsFacade.getByCategory(this.notice.category);
    }
  }

  ngOnDestroy() {
    this.newsFacade.resetByCategory();
  }

}
