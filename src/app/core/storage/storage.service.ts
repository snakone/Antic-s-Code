import { Injectable } from '@angular/core';
import { STORAGE_CONSTANTS, Storage } from './storage.config';
import { LocalStorage } from 'ngx-webstorage';
import { environment } from '@env/environment';

@Injectable()

export class StorageService {

  @LocalStorage(STORAGE_CONSTANTS.KEY)
  public storage: Storage;

  constructor() {
    if (!environment.production) { console.log('StorageService'); }
    this.loadStorage();
  }

  loadStorage() {
    if (!this.storage) {
      this.storage = new Storage();
    }
  }

  setKey(key: string, value: any) {
    if (value === undefined || !this.storage) { return; }
    this.storage[key] = value;
    this.storage = this.storage;
  }

  get(value: string) {
    if (!this.storage) { this.storage = new Storage(); }
    if (this.storage[value] === undefined) { return; }
    return this.storage[value];
  }

  reset(): void {
    this.storage = new Storage();
  }

}
