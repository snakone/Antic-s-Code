import { Component, OnInit, Input } from '@angular/core';
import { Article } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-article-links-box',
  templateUrl: './article-links-box.component.html',
  styleUrls: ['./article-links-box.component.scss']
})

export class ArticleLinksBoxComponent implements OnInit {

  @Input() article: Article;

  constructor() { }

  ngOnInit() { }

}
