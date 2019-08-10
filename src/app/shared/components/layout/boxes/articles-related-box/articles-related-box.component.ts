import { Component, OnInit } from '@angular/core';
import { RELATED_ARTICLES } from '@app/shared/shared.data';

@Component({
  selector: 'app-articles-related-box',
  templateUrl: './articles-related-box.component.html',
  styleUrls: ['./articles-related-box.component.scss']
})

export class ArticlesRelatedBoxComponent implements OnInit {

  relateds = RELATED_ARTICLES;

  constructor() { }

  ngOnInit() { }

}
