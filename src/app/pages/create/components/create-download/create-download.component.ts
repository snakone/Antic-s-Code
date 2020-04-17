import { Component } from '@angular/core';
import { DESKTOP_VERSION } from '@app/app.config';
import { DOWNLOAD_BUTTONS } from '@app/shared/shared.data';

@Component({
  selector: 'app-create-download',
  templateUrl: './create-download.component.html',
  styleUrls: ['./create-download.component.scss']
})

export class CreateDownloadComponent {

  version = DESKTOP_VERSION;
  buttons = DOWNLOAD_BUTTONS;

  constructor() { }

}
