import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IntersectionService } from './services/intersection.service';

@Component({
  selector: 'app-intersection-observer',
  templateUrl: './intersection-observer.component.html',
  styleUrls: ['./intersection-observer.component.scss']
})

export class IntersectionObserverComponent implements OnInit {

  @ViewChild('observer', { static: true }) element: ElementRef;


  constructor(private intersection: IntersectionService) { }

  ngOnInit() {
    this.observerSection();
  }

  observerSection() {
    const inter = new IntersectionObserver((int) => {
      int[0].isIntersecting ?
      this.intersection.hasEntered.emit(true) :
      this.intersection.hasEntered.emit(false);
    });

    inter.observe(this.element.nativeElement);
  }

}
