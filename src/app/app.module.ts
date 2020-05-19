import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_CONFIG, APP_CONSTANTS } from './app.config';
import { CoreModule } from '@core/core.module';
import { HammerConfig } from './core/hammer.config';

import { ComponentsModule } from '@shared/components/components.module';
import { SharedModule } from '@shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HomeModule } from './pages/home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ComponentsModule,
    SharedModule,
    HomeModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false
      }
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    { provide: APP_CONFIG, useValue: APP_CONSTANTS },
    { provide: HAMMER_GESTURE_CONFIG, useClass: HammerConfig }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
