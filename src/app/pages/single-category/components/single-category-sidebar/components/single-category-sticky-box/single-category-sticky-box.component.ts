import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-single-category-sticky-box',
  templateUrl: './single-category-sticky-box.component.html',
  styleUrls: ['./single-category-sticky-box.component.scss']
})

export class SingleCategoryStickyBoxComponent implements OnInit {

  display = true;

  constructor() { }

  ngOnInit() {
    fromEvent(window, 'scroll').pipe(debounceTime(69)).subscribe(() => this.onScroll());
  }

  private onScroll(): void {
    const h = window.document.body.clientHeight;
    const s = window.scrollY;
    const w = window.document.body.clientWidth;
    if (w < 985) {
      this.display = true;
      return;
    }
    this.display = !((s / h) * 100 > 80);
  }

}
