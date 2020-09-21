import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NewsFacade } from '@store/news/news.facade';
import { News } from '@shared/interfaces/interfaces';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, filter, switchMap, takeUntil, takeWhile } from 'rxjs/operators';
import { NewsService } from '@core/services/news/news.service';

@Component({
  selector: 'app-news-preview',
  templateUrl: './news-preview.component.html',
  styleUrls: ['./news-preview.component.scss']
})

export class NewsPreviewComponent implements OnInit, OnDestroy {

  @Input() news: News[];
  private unsubscribe$ = new Subject<void>();
  section: HTMLElement;

  constructor(
    private newsFacade: NewsFacade,
    private newsSrv: NewsService
  ) { }

  ngOnInit(): void {
    this.section = document.getElementById('news-content');
    this.checkData();
    this.hasEnded();
  }

  private checkData(): void {
    this.newsFacade.newsLoaded$
     .pipe(
       filter(res => !res),
       takeUntil(this.unsubscribe$)
      )
     .subscribe(_ => {
       this.newsFacade.get();
    });
  }

  private hasEnded(): void {
    this.newsFacade.getFull$
    .pipe(
      takeUntil(this.unsubscribe$),
      switchMap(_ => (
        fromEvent(window, 'scroll')
          .pipe(
            takeWhile(() => !_),
            debounceTime(300),
            takeUntil(this.unsubscribe$)
          )
        )
    )).subscribe(e => this.makeScroll(e));
  }

  private makeScroll(e: any): void {
    const bottom = this.fromBottom();
    try {
      const top = e.target.scrollingElement.scrollTop;
      if (this.section.offsetHeight - top <= bottom) {
        setTimeout(() => {
          this.newsFacade.get();
        }, 300);
     }
    } catch (err) { console.log(err); }
  }

  private fromBottom(): number {
    let bottom = 450;
    if (window.document.body.clientWidth < 985) { bottom = 1400; }
    return bottom;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.newsSrv.resetPage();
  }

}
