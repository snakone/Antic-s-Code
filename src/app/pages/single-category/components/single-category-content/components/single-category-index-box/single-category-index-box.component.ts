import { Component, OnInit } from '@angular/core';
import { CATEGORY_TOC } from '@app/shared/shared.data';

@Component({
  selector: 'app-single-category-index-box',
  templateUrl: './single-category-index-box.component.html',
  styleUrls: ['./single-category-index-box.component.scss']
})

export class SingleCategoryIndexBoxComponent implements OnInit {

  toc = CATEGORY_TOC;

  constructor() { }

  ngOnInit() { }

  scroll(box: string): void {
    const el = document.getElementById(box);
    if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  }

}
