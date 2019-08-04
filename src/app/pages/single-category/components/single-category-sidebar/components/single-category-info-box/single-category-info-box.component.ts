import { Component, OnInit } from '@angular/core';
import { CATEGORY_INFO } from '@app/shared/shared.data';

@Component({
  selector: 'app-single-category-info-box',
  templateUrl: './single-category-info-box.component.html',
  styleUrls: ['./single-category-info-box.component.scss']
})

export class SingleCategoryInfoBoxComponent implements OnInit {

  list = CATEGORY_INFO;

  constructor() { }

  ngOnInit() { }

}
