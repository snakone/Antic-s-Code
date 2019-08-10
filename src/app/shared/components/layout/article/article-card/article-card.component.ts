import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})

export class ArticleCardComponent implements OnInit {

  @Input() article: Article;
  @Input() shadow: boolean;
  @Input() padding: number;

  constructor(private router: Router) { }

  ngOnInit() { }

  goToArticle(article: string): void {
    this.router.navigateByUrl('/article/' + article);
  }

}
