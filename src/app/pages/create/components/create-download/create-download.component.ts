import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DESKTOP_VERSION, MOBILE_VERSION } from '@app/app.config';
import { DESKTOP_DOWNLOAD_BUTTONS, MOBILE_DOWNLOAD_BUTTONS } from '@shared/data/download';

@Component({
  selector: 'app-create-download',
  templateUrl: './create-download.component.html',
  styleUrls: ['./create-download.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CreateDownloadComponent {

  desktopVersion = DESKTOP_VERSION;
  mobileVersion = MOBILE_VERSION;
  desktopButtons = DESKTOP_DOWNLOAD_BUTTONS;
  mobileButtons = MOBILE_DOWNLOAD_BUTTONS;

  constructor() { }

}
