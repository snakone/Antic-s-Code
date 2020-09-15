import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-maker',
  templateUrl: './content-maker.component.html'
})

export class ContentMakerComponent {

  @Input() template?: string;
  @Input() args?: string;

  constructor() { }

}

