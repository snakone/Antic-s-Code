import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { ArticleService } from '@core/services/article/article.service';
import { ArticlesFacade } from '@core/ngrx/facade/article.facade';
import { UsersFacade } from '@core/ngrx/facade/users.facade';
import { InteractionFacade } from '@core/ngrx/facade/interaction.facade';

import { Subject, fromEvent, Observable } from 'rxjs';
import { takeUntil, debounceTime, switchMap, filter, takeWhile } from 'rxjs/operators';
import { Article } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-articles-content',
  templateUrl: './articles-content.component.html',
  styleUrls: ['./articles-content.component.scss']
})

export class ArticlesContentComponent implements OnInit, OnDestroy {

  @Input() grid: boolean;  // Display GRID
  articles$: Observable<Article[]>;
  private unsubscribe$ = new Subject<void>();
  section: HTMLElement;

  constructor(
    private articleSrv: ArticleService,
    private userFacade: UsersFacade,
    private articleFacade: ArticlesFacade,
    private interactionFacade: InteractionFacade
  ) { }

  ngOnInit() {
    this.checkData();
    this.hasEnded();
    this.getInteraction();
    this.section = document.getElementById('articles-section');
    this.articles$ = this.articleFacade.articles$;
  }

  private checkData(): void {
    this.articleFacade.loaded$
     .pipe(
       filter(res => !res),
       takeUntil(this.unsubscribe$)
      )
     .subscribe(_ => this.articleFacade.get());
  }

  private getInteraction(): void {
    this.userFacade.user$
     .pipe(
       filter(res => !!res),
       takeUntil(this.unsubscribe$)
      )
     .subscribe(_ => this.interactionFacade.getByUser());
  }

  private hasEnded(): void {
    this.articleFacade.getFull$
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
          this.articleFacade.get();
        }, 300);
     }
    } catch (err) { console.log(err); }
  }

  private fromBottom(): number {
    let bottom = 450;
    if (this.grid) bottom = 850;
    if (window.document.body.clientWidth < 985) bottom = 1400;
    return bottom;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.articleSrv.resetPage();
    this.articleFacade.reset();
  }

}
