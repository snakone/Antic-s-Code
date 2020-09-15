import { Component, Input, OnInit } from '@angular/core';
import { News } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-news-grid-card',
  templateUrl: './news-grid-card.component.html',
  styleUrls: ['./news-grid-card.component.scss']
})

export class NewsGridCardComponent implements OnInit {

  @Input() first: boolean;
  @Input() new: News;

  constructor() { }

  ngOnInit(): void {
  }

}
