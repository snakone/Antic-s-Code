import { Component, OnInit, Input } from '@angular/core';
import { Article } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-articles-content',
  templateUrl: './articles-content.component.html',
  styleUrls: ['./articles-content.component.scss']
})

export class ArticlesContentComponent implements OnInit {

  @Input() articles: Article[];

  constructor() { }

  ngOnInit() { }

}
