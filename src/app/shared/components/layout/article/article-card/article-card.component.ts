import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})

export class ArticleCardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  goToArticle(article: string): void {
    this.router.navigateByUrl('/article/' + article);
  }

}
