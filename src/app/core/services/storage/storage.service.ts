import { Injectable } from '@angular/core';
import { STORAGE_CONSTANTS, LocalSettings } from './storage.config';
import { LocalStorage } from 'ngx-webstorage';

@Injectable()

export class StorageService {

  @LocalStorage(STORAGE_CONSTANTS.KEY)
  public localSettings: LocalSettings;

  constructor() {
    this.loadStorage();
   }

  loadStorage() {
    if (!this.localSettings) {
      this.localSettings = new LocalSettings();
    }
  }

  setKey(key: string, value: any) {
    this.localSettings[key] = value;
    this.localSettings = this.localSettings;
  }

  getSettings(): LocalSettings {
    return this.localSettings;
  }

}
