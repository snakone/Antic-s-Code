import { Component, OnInit, Input } from '@angular/core';
import { Article } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-articles-sidebar',
  templateUrl: './articles-sidebar.component.html',
  styleUrls: ['./articles-sidebar.component.scss']
})

export class ArticlesSidebarComponent implements OnInit {

  @Input() single: boolean;
  @Input() article: Article;

  constructor() { }

  ngOnInit() { }

}
