import { Component, OnInit } from '@angular/core';
import { TAGS } from '@app/shared/shared.data';

@Component({
  selector: 'app-single-category-tab-box',
  templateUrl: './single-category-tab-box.component.html',
  styleUrls: ['./single-category-tab-box.component.scss']
})

export class SingleCategoryTabBoxComponent implements OnInit {

  tags = TAGS;

  constructor() { }

  ngOnInit() { }

}
