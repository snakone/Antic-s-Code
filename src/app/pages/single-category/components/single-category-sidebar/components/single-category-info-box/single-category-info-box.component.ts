import { Component, OnInit, Input } from '@angular/core';
import { Category } from '@shared/interfaces/interfaces';
import * as moment from 'moment';
import { StorageService } from '@core/storage/storage.service';

@Component({
  selector: 'app-single-category-info-box',
  templateUrl: './single-category-info-box.component.html',
  styleUrls: ['./single-category-info-box.component.scss']
})

export class SingleCategoryInfoBoxComponent implements OnInit {

  @Input() category: Category;
  updated: string = null;

  constructor(private ls: StorageService) { }

  ngOnInit() {
    if (this.category?.updated) {
      this.fromNow();
    }
  }

  private fromNow(): void {
    moment.locale(this.ls.get('lang'));
    this.updated = moment(
      this.category.updated, 'DD/MM/YYYY'
    ).startOf('day').fromNow();
  }

}
