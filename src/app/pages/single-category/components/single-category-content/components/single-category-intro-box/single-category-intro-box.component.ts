import { Component, OnInit, Input } from '@angular/core';
import { Category } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-single-category-intro-box',
  templateUrl: './single-category-intro-box.component.html',
  styleUrls: ['./single-category-intro-box.component.scss']
})

export class SingleCategoryIntroBoxComponent implements OnInit {

  @Input() category: Category;

  constructor() { }

  ngOnInit() { }

}
