import { Injectable, Inject } from '@angular/core';
import { APP_CONSTANTS } from '@app/app.config';
import { HttpService } from '../http/http.service';
import { environment } from '@env/environment';
import { Observable, of } from 'rxjs';
import { StorageService } from '@core/storage/storage.service';
import { SwUpdate, SwPush } from '@angular/service-worker';
import { DOCUMENT } from '@angular/common';
import { NotificationPayload, SWResponse } from '@app/shared/interfaces/interfaces';
import { WELCOME_PUSH } from '@app/shared/shared.data';
import { switchMap } from 'rxjs/operators';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable({
  providedIn: 'root'
})

export class PushService {

  readonly API_SUBSCRIPTION = APP_CONSTANTS.END_POINT + 'subscription';
  readonly API_NOTIFICATION = APP_CONSTANTS.END_POINT + 'notification';
  readonly pushKey = APP_CONSTANTS.PUSH_KEY;

  constructor(@Inject(DOCUMENT) private document: Document,
              private http: HttpService,
              private ls: StorageService,
              private swUpdate: SwUpdate,
              private swPush: SwPush,
              private deviceDetector: DeviceDetectorService) {
    if (!environment.production) { console.log('NotificationService'); }
  }

  public updateSW(): void {
    this.swUpdate.available
     .subscribe(event => {
      if (event) {
          this.swUpdate.activateUpdate()
          .then(() => this.document.location.reload());
        }
    });
  }

  public showPrompt(): void {
    if (this.ls.get('token')) {
      setTimeout(() => {
        this.swPush.requestSubscription({
          serverPublicKey: this.pushKey
        }).then((sub: PushSubscription) => {
          if (sub) {
            this.saveSubscription(sub)
             .pipe(switchMap((res: SWResponse) =>
               res.ok && !this.ls.get('welcome') ?
               this.sendNotification(WELCOME_PUSH) :
               of({ok: false})
             ))
             .subscribe((res: SWResponse) => {
               if (res.ok) {
                this.ls.setKey('welcome', true);
               }
             });
          }
        })
        .catch(err => console.error(err));
      }, 10000);
    }
  }

  public saveSubscription(sub: PushSubscription): Observable<SWResponse> {
    return this.http.post(this.API_SUBSCRIPTION, { sub, device: this.setDevice() });
  }

  public sendNotification(payload: NotificationPayload): Observable<SWResponse> {
    return this.http.post(this.API_NOTIFICATION, { payload, device: this.setDevice() });
  }

  private setDevice(): string {
    return this.deviceDetector.isDesktop() ? 'Desktop' : 'Mobile';
  }

}
