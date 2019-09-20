import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Article } from '@app/shared/interfaces/interfaces';
import { ArticleService } from '@app/core/services/services.index';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})

export class ArticleCardComponent implements OnInit, OnDestroy {

  @Input() article: Article;
  @Input() shadow: boolean;
  @Input() single: boolean;
  private unsubscribe$ = new Subject<void>();

  constructor(private articleService: ArticleService) { }

  ngOnInit() { }

  doLike(article: Article): void {
    this.articleService.sendLike(article._id)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
