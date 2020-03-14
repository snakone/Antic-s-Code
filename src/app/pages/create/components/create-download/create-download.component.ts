import { Component, OnInit } from '@angular/core';
import { APP_CONSTANTS } from '@app/app.config';
import { DOWNLOAD_BUTTONS } from '@app/shared/shared.data';

@Component({
  selector: 'app-create-download',
  templateUrl: './create-download.component.html',
  styleUrls: ['./create-download.component.scss']
})

export class CreateDownloadComponent implements OnInit {

  version = APP_CONSTANTS.APP_VERSION;
  buttons = DOWNLOAD_BUTTONS;

  constructor() { }

  ngOnInit() { }

}
