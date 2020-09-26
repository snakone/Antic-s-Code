import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star-show',
  templateUrl: './star-show.component.html',
  styleUrls: ['./star-show.component.scss']
})

export class StarShowComponent implements OnInit {

  @Input() stars: number;

  constructor() { }

  ngOnInit(): void {
  }

}
