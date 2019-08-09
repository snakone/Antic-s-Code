import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '@app/core/services/services.index';
import { Article } from '@app/shared/interfaces/interfaces';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.scss']
})

export class SingleArticleComponent implements OnInit, OnDestroy {

  article: Article;
  private unsubscribe$ = new Subject<void>();

  constructor(private route: ActivatedRoute,
              private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getArticleBySlug(this.getRoute())
    .pipe(takeUntil(this.unsubscribe$))
      .subscribe(res => {
        if (res.ok) { this.article = res.article[0]; }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getRoute(): string {
    return this.route.snapshot.params.slug;
  }

}
