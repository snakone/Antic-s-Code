import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Article, ArticleResponse } from '@app/shared/interfaces/interfaces';
import { BottomSheetComponent } from '../../sheets/bottom-sheet/bottom-sheet.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
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
  @Input() padding: number;
  @Input() stars: boolean;
  private unsubscribe$ = new Subject<void>();

  constructor(private articleService: ArticleService,
              private bottomSheet: MatBottomSheet) { }

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
