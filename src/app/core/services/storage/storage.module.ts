import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from './storage.service';
import { STORAGE_CONFIG, STORAGE_CONSTANTS } from './storage.config';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    StorageService,
    { provide: STORAGE_CONFIG, useValue: STORAGE_CONSTANTS },
  ]
})

export class StorageModule { }
