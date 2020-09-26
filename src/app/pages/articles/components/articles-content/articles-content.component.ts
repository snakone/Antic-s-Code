import { Component, OnInit, OnDestroy, Input, ChangeDetectionStrategy } from '@angular/core';
import { Subject, fromEvent } from 'rxjs';
import { takeUntil, debounceTime, switchMap, takeWhile, filter } from 'rxjs/operators';

import { ArticlesFacade } from '@store/articles/article.facade';
import { Article } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-articles-content',
  templateUrl: './articles-content.component.html',
  styleUrls: ['./articles-content.component.scss']
})

export class ArticlesContentComponent implements OnInit, OnDestroy {

  @Input() articles: Article[];
  @Input() grid: boolean;  // Display GRID
  private unsubscribe$ = new Subject<void>();
  section: HTMLElement;

  constructor(private articleFacade: ArticlesFacade) { }

  ngOnInit() {
    this.hasEnded();
    this.section = document.getElementById('articles-section');
  }

  private hasEnded(): void {
    this.articleFacade.getFull$
    .pipe(
      takeUntil(this.unsubscribe$),
      switchMap((full: boolean) => (
        fromEvent(window, 'scroll')
          .pipe(
            filter(_ => !!this.articles.length),
            takeWhile(() => !full),
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
          this.articleFacade.get();
        }, 300);
     }
    } catch (err) { console.log(err); }
  }

  private fromBottom(): number {
    let bottom = 450;
    if (this.grid) { bottom = 850; }
    if (window.document.body.clientWidth < 985) { bottom = 1400; }
    return bottom;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
