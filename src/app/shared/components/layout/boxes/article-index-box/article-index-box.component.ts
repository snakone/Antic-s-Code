import { Component, Input, AfterContentInit } from '@angular/core';
import { Index } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-article-index-box',
  templateUrl: './article-index-box.component.html',
  styleUrls: ['./article-index-box.component.scss']
})

export class ArticleIndexBoxComponent implements AfterContentInit {

  @Input() index: Index;
  @Input() mobile: boolean;
  public scrollSpy: string;

  constructor() { }

  ngAfterContentInit(): void {
    this.listenToScroll();
  }

  public scroll(box: string): void {
    const el = document.getElementById(box);
    if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  }

  private listenToScroll(): void {
    if (this.mobile) { return; }
    const anchors = document.querySelectorAll('.anchor');
    try {
      const inter = new IntersectionObserver((int, obs) => {
        if (!int[0].isIntersecting) { return; }
        this.scrollSpy = int[0].target.id;
      });
      anchors.forEach((el: Element) => {
        inter.observe(el)
      });
    } catch (err) { }
  }

}
