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

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
