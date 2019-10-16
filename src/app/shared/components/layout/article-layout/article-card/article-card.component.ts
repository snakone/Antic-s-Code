import { Component, OnInit, Input } from '@angular/core';
import { Article } from '@app/shared/interfaces/interfaces';
import { AppState } from '@app/app.config';
import { Store } from '@ngrx/store';
import { UserService } from '@app/core/services/services.index';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})

export class ArticleCardComponent implements OnInit {

  @Input() article: Article;
  @Input() shadow: boolean;
  @Input() single: boolean;  // Single or GRID

  constructor(private store: Store<AppState>,
              private userService: UserService) { }

  ngOnInit() { }

}
