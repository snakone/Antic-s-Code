import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ArticleResponse, Article } from '@app/shared/interfaces/interfaces';
import { takeUntil } from 'rxjs/operators';

import { ArticleService, CrafterService } from '@app/core/services/services.index';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-article-publish-box',
  templateUrl: './article-publish-box.component.html',
  styleUrls: ['./article-publish-box.component.scss']
})
export class ArticlePublishBoxComponent implements OnInit, OnDestroy {

  @Input() article: Article;
  private unsubscribe$ = new Subject<void>();

  constructor(private articleService: ArticleService,
              private crafter: CrafterService,
              private router: Router) { }

  ngOnInit() { }

  publish(id: string): void {
    this.articleService.publishArticle(id, false)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res: ArticleResponse) => {
        if (res.ok) {
          this.crafter.toaster('success', 'article.published', 'info');
          this.router.navigateByUrl('/admin');
        }
    }, (err: HttpErrorResponse) => {
      err.status === 0 ?
      this.handleError('server') : this.handleError();
    });
  }

  private handleError(type?: string): void {
    if (type === 'server') {
      this.crafter.toaster('server.error',
                           'server.bad',
                           'error');
    } else {
      this.crafter.toaster('update.error',
                           'server.bad',
                           'error');
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
