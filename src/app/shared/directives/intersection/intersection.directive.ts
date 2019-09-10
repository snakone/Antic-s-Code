import { Directive, ElementRef, AfterViewInit } from '@angular/core';
import { ScrollSpyService } from '@layout/article-layout/services/scrollspy.service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[Intersection]'
})

export class IntersectionDirective implements AfterViewInit {

  constructor(private el: ElementRef,
              private scrollSpy: ScrollSpyService) { }

  ngAfterViewInit(): void {
    this.observerSection();
  }

  observerSection(): void {
    try {
      const id = this.el.nativeElement.getAttribute('id');
      const inter = new IntersectionObserver((int) => {
        if (!int[0].isIntersecting) { return; }
        this.scrollSpy.hasEntered.next({ onViewport: int[0].isIntersecting, id });
      });
      inter.observe(this.el.nativeElement);
    } catch (err) { }
  }
}
