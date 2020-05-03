import { Component, OnInit, Input } from '@angular/core';
import { Category } from '@shared/interfaces/interfaces';
import * as moment from 'moment';

@Component({
  selector: 'app-single-category-info-box',
  templateUrl: './single-category-info-box.component.html',
  styleUrls: ['./single-category-info-box.component.scss']
})

export class SingleCategoryInfoBoxComponent implements OnInit {

  @Input() category: Category;
  updated: string;

  constructor() { }

  ngOnInit() {
    if (this.category) {
      this.fromNow();
    }
  }

  private fromNow(): void {
    moment.locale('es');
    this.updated = moment(
      this.category.updated, 'DD/MM/YYYY'
    ).startOf('day').fromNow();
    if (this.updated.startsWith('Invalid')) {
      this.updated = null;
    }
  }

}
