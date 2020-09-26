import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { AOS_SETTINGS } from '@shared/data/app';
import { TIME_LINE } from '@shared/data/me';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TimeLineComponent implements OnInit {

  TL = TIME_LINE;

  constructor() { }

  ngOnInit() {
    AOS.init(AOS_SETTINGS);
  }

  public scroll(box: string): void {
    const el = document.getElementById(box);
    if (el) { el.scrollIntoView({ behavior: 'auto', block: 'start' }); }
  }

}
