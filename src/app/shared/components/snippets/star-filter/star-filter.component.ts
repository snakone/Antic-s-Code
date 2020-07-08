import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

import { STAR_LIST } from '@shared/data/search';
import { StarList } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-star-filter',
  templateUrl: './star-filter.component.html',
  styleUrls: ['./star-filter.component.scss']
})

export class StarFilterComponent implements OnInit {

  @Output() changed = new EventEmitter<MatCheckboxChange>();
  list: StarList[];

  constructor() { }

  ngOnInit() {
    this.list = this.resetList(STAR_LIST);
  }

  public starChanged(e:MatCheckboxChange): void {
    this.changed.emit(e);
  }

  private resetList(list: StarList[]): StarList[] {
    list.forEach((l: StarList) => l.active = false);
    return list;
  }

}
