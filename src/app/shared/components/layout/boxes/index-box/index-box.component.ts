import { Component, Input, AfterContentInit } from '@angular/core';
import { Index } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-index-box',
  templateUrl: './index-box.component.html',
  styleUrls: ['./index-box.component.scss']
})

export class IndexBoxComponent implements AfterContentInit {

  @Input() index: Index[];
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
    if (this.mobile || !this.index) { return; }
    setTimeout(() => {
      const anchors = document.querySelectorAll('.anchor');
      try {
        const inter = new IntersectionObserver((int) => {
          if (!int[0].isIntersecting) { return; }
          this.scrollSpy = int[0].target.id;
        });
        anchors.forEach((el: Element) => {
          inter.observe(el)
        });
      } catch (err) { console.log(err); }
    }, 2500);

  }

}
