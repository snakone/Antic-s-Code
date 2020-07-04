import { Injectable, Inject } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';
import { environment } from '@env/environment';
import { DOCUMENT } from '@angular/common';

import { HttpService } from '../http/http.service';
import { StorageService } from '@core/storage/storage.service';
import { DeviceDetectorService } from 'ngx-device-detector';

import { Observable } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { NotificationPayload, SWResponse } from '@shared/interfaces/interfaces';
import { WELCOME_PUSH } from '@shared/data/notifications';

@Injectable({providedIn: 'root'})

export class PushService {

  readonly API_SUBSCRIPTION = environment.api + 'subscription';
  readonly API_NOTIFICATION = environment.api + 'notification';
  readonly pushKey = environment.keys.push;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private http: HttpService,
    private ls: StorageService,
    private swUpdate: SwUpdate,
    private swPush: SwPush,
    private deviceDetector: DeviceDetectorService
  ) { }

  public updateSW(): void {
    this.swUpdate.available
    .pipe(filter(event => event && !!event))
     .subscribe(_ => {
        this.swUpdate.activateUpdate()
        .then(() => this.document.location.reload());
    });
  }

  public showPrompt(): void {
    setTimeout(() => {
      this.swPush.requestSubscription({
        serverPublicKey: this.pushKey
      }).then((sub: PushSubscription) => {
        if (sub) {
          this.saveSubscription(sub)
            .pipe(
              filter(res => res && !this.ls.get('welcome')),
              switchMap(_ => this.sendNotification(
                this.setNotification(Object.assign({}, WELCOME_PUSH))
              ))
            )
            .subscribe(_ => this.ls.setKey('welcome', true));
        }
      })
      .catch(err => console.error(err));
    }, 10000);
  }

  public saveSubscription(
    sub: PushSubscription
  ): Observable<SWResponse> {
    return this.http
      .post<SWResponse>(
        this.API_SUBSCRIPTION,
        { sub, device: this.setDevice() }
      ).pipe(
        filter(res => res && !!res.ok)
      );
  }

  public sendNotification(
    payload: NotificationPayload
  ): Observable<SWResponse> {
    return this.http
      .post<SWResponse>(this.API_NOTIFICATION, { payload })
      .pipe(
        filter(res => res && !!res.ok)
      );
  }

  private setNotification(
    payload: NotificationPayload
  ): NotificationPayload {
    payload.user = this.ls.get('user');
    return payload;
  }

  private setDevice(): string {
    return this.deviceDetector.isDesktop() ? 'Desktop' : 'Mobile';
  }

}
