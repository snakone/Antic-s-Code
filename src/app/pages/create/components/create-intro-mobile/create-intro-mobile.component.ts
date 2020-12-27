import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CREATE_STEPS_MOBILE } from '@shared/data/download';

@Component({
  selector: 'app-create-intro-mobile',
  templateUrl: './create-intro-mobile.component.html',
  styleUrls: ['./create-intro-mobile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CreateIntroMobileComponent implements OnInit {

  steps = CREATE_STEPS_MOBILE;

  constructor() { }

  ngOnInit(): void { }

}
