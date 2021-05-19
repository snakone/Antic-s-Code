import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { CREATE_STEPS } from '@shared/data/download';

@Component({
  selector: 'app-create-intro-desktop',
  templateUrl: './create-intro-desktop.component.html',
  styleUrls: ['./create-intro-desktop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CreateIntroDesktopComponent {

  steps = CREATE_STEPS;

  constructor() { }

}
