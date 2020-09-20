import { Component } from '@angular/core';

@Component({
  selector: 'app-go-top',
  templateUrl: './go-top.component.html',
  styleUrls: ['./go-top.component.scss']
})

export class GoTopComponent {

  constructor() { }

  public goTop(): void {
    window.scrollTo({top: 0, behavior: 'auto'});
  }

}
