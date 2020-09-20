import { Component, OnInit } from '@angular/core';
import { NewsFacade } from '@core/ngrx/news/news.facade';
import { News } from '@shared/interfaces/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news-home',
  templateUrl: './news-home.component.html',
  styleUrls: ['./news-home.component.scss']
})
export class NewsHomeComponent implements OnInit {

  news$: Observable<News[]>;

  constructor(private newsFacade: NewsFacade) { }

  ngOnInit(): void {
    this.news$ = this.newsFacade.viewed$;
  }

}
