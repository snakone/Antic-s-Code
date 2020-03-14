import { Component, OnInit, AfterContentInit } from '@angular/core';
import { FOOTER_LIST } from '@app/shared/shared.data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements AfterContentInit {

  list = FOOTER_LIST;
  show = false;

  constructor() { }

  ngAfterContentInit() {
    setTimeout(() => {
      this.show = true;
    }, 1000);
   }

}
