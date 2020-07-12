import { Component, OnInit, Input } from '@angular/core';
import { MAIN_CATEGORIES } from '@shared/data/categories';
import { List, Test } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-test-content',
  templateUrl: './test-content.component.html',
  styleUrls: ['./test-content.component.scss']
})

export class TestContentComponent implements OnInit {

  @Input() tests: Test[];

  categories: List[];

  constructor() { }

  ngOnInit(): void {
    this.categories = [...MAIN_CATEGORIES].filter(c => c.icon !== 'antics-logo.png');
  }

}
