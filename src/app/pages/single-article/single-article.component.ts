import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';

import { Article } from '@app/shared/interfaces/interfaces';
import { Subject, combineLatest } from 'rxjs';
import { takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.scss']
})

export class SingleArticleComponent implements OnInit, OnDestroy {

  article: Article;
  private unsubscribe$ = new Subject<void>();

  constructor(private route: ActivatedRoute,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.getArticlyBySlug();
  }

  private getArticlyBySlug(): void {
    const store$ = this.store.select('articleState');
    const route$ = this.route.params;
    // tslint:disable-next-line: deprecation
    combineLatest(store$, route$)
     .pipe(takeUntil(this.unsubscribe$))
      .subscribe(([s, r]: any) => {
        this.article = null;
        setTimeout(() => {
          this.article = s.articles
            .filter((x: Article) => x.slug === r.slug)[0] || null;
        }, 500);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
