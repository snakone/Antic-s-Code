import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-card-skeleton',
  templateUrl: './article-card-skeleton.component.html',
  styleUrls: ['./article-card-skeleton.component.scss']
})

export class ArticleCardSkeletonComponent implements OnInit {

  @Input() single: boolean;

  constructor() { }

  ngOnInit() { }

}
