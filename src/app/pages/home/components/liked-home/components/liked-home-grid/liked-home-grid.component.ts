import { Component, OnInit, Input } from '@angular/core';
import { Article } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-liked-home-grid',
  templateUrl: './liked-home-grid.component.html',
  styleUrls: ['./liked-home-grid.component.scss']
})

export class LikedHomeGridComponent implements OnInit {

  @Input() articles: Article[];

  constructor() { }

  ngOnInit() { }

}
