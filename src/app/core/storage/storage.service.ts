import { Injectable } from '@angular/core';
import { STORAGE_CONSTANTS, Storage } from './storage.config';
import { LocalStorage } from 'ngx-webstorage';

@Injectable({providedIn: 'root'})

export class StorageService {

  @LocalStorage(STORAGE_CONSTANTS.KEY)
  public storage: Storage;

  constructor() {
    this.loadStorage();
  }

  private loadStorage(): void {
    if (!this.storage) {
      this.reset();
    }
  }

  public setKey(key: string, value: any): void {
    this.loadStorage();
    if (value === undefined) { return; }
    this.storage[key] = value;
    this.storage = this.storage;
  }

  public get(value: string) {
    this.loadStorage();
    if (this.storage[value] === undefined) { return; }
    return this.storage[value];
  }

  public reset(): void {
    this.storage = new Storage();
  }

}
