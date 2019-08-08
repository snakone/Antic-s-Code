import { Component, OnInit } from '@angular/core';
import { RELATED_ARTICLES } from '@app/shared/shared.data';

@Component({
  selector: 'app-single-category-related-box',
  templateUrl: './single-category-related-box.component.html',
  styleUrls: ['./single-category-related-box.component.scss']
})

export class SingleCategoryRelatedBoxComponent implements OnInit {

  relateds = RELATED_ARTICLES;

  constructor() { }

  ngOnInit() { }

}
