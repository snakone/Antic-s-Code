import { Component, OnInit, Input } from '@angular/core';
import { Index } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-article-index-box',
  templateUrl: './article-index-box.component.html',
  styleUrls: ['./article-index-box.component.scss']
})

export class ArticleIndexBoxComponent implements OnInit {

  @Input() index: Index;
  @Input() mobile: boolean;

  constructor() { }

  ngOnInit() { }

}
