import { Component, OnInit, Input } from '@angular/core';
import { Article } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-best-home-grid',
  templateUrl: './best-home-grid.component.html',
  styleUrls: ['./best-home-grid.component.scss']
})

export class BestHomeGridComponent implements OnInit {

  @Input() articles: Article[];

  constructor() { }

  ngOnInit() { }

}
