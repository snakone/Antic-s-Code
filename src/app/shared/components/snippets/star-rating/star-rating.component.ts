import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Article } from '@app/shared/interfaces/interfaces';
import { ArticleService } from '@app/core/services/article/article.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})

export class StarRatingComponent implements OnInit, OnDestroy {

  @Input() article: Article;
  private unsubscribe$ = new Subject<void>();

  constructor(private articleService: ArticleService) { }

  ngOnInit() { }

  doStar(star: number): void {
    this.articleService.sendStar(this.article._id, star)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
