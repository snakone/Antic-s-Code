import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-expansion-box',
  templateUrl: './expansion-box.component.html',
  styleUrls: ['./expansion-box.component.scss']
})

export class ExpansionBoxComponent implements OnInit {

  @Input() title: string;
  @Input() icon: string;

  constructor() { }

  ngOnInit(): void { }

}
