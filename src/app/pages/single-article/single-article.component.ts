import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '@app/core/services/services.index';
import { ArticleResponse, Article } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.scss']
})

export class SingleArticleComponent implements OnInit {

  article: Article;

  constructor(private route: ActivatedRoute,
              private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getArticleBySlug(this.getRoute())
      .subscribe((res: ArticleResponse) => {
        if (res.ok) { this.article = res.article[0]; }
      });
  }

  getRoute(): string {
    return this.route.snapshot.params.slug;
  }

}
