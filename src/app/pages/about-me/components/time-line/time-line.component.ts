import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { AOS_SETTINGS } from '@app/shared/shared.data';
import { TIME_LINE } from '@shared/shared.data';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss']
})

export class TimeLineComponent implements OnInit {

  constructor() { }

  TL = TIME_LINE;

  ngOnInit() {
    AOS.init(AOS_SETTINGS);
  }

}
