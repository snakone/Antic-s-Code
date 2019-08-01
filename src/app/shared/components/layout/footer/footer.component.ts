import { Component, OnInit } from '@angular/core';
import { FOOTER_LIST } from '@app/shared/shared.data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

  list = FOOTER_LIST;

  constructor() { }

  ngOnInit() { }

}
