import { Component, OnInit, Input } from '@angular/core';
import { Category } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-single-category-intro',
  templateUrl: './single-category-intro.component.html',
  styleUrls: ['./single-category-intro.component.scss']
})

export class SingleCategoryIntroComponent implements OnInit {

  @Input() category: Category;

  constructor() { }

  ngOnInit() { }

}
