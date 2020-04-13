import { Injectable, Inject } from '@angular/core';
import { APP_CONSTANTS } from '@app/app.config';
import { HttpService } from '../http/http.service';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { StorageService } from '@core/storage/storage.service';
import { SwUpdate, SwPush } from '@angular/service-worker';
import { DOCUMENT } from '@angular/common';
import { NotificationPayload } from '@app/shared/interfaces/interfaces';
import { WELCOME } from '@app/shared/shared.data';

@Injectable()

export class PushService {

  readonly API_SUBSCRIPTION = APP_CONSTANTS.END_POINT + 'subscription';
  readonly API_NOTIFICATION = APP_CONSTANTS.END_POINT + 'notification';
  readonly pushKey = APP_CONSTANTS.PUSH_KEY;

  constructor(@Inject(DOCUMENT) private document: Document,
              private http: HttpService,
              private ls: StorageService,
              private swUpdate: SwUpdate,
              private swPush: SwPush) {
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
    if (this.ls.get('user') && !this.ls.get('welcome')) {
      setTimeout(() => {
        this.swPush.requestSubscription({
          serverPublicKey: this.pushKey
        }).then((sub: PushSubscription) => {
          if (sub) {
            this.saveSubscription(sub).subscribe();
            this.sendUserNotification(WELCOME).subscribe();
            this.ls.setKey('welcome', true);
          }
        })
        .catch(err => console.error(err));
      }, 10000);
    }
  }

  public saveSubscription(
    sub: PushSubscription
    ): Observable<any> {
    return this.http.post(
      this.API_SUBSCRIPTION,
      { sub, user: this.ls.get('user')}
    );
  }

  public sendUserNotification(
    payload: NotificationPayload
    ): Observable<any> {
    return this.http.post(
      this.API_NOTIFICATION,
      this.setUserNotification(payload)
    );
  }

  public sendBroadCastNotification(
    payload: NotificationPayload
    ): Observable<any> {
    return this.http.post(
      this.API_NOTIFICATION,
      this.setBroadCastNotification(payload)
    );
  }

  private setUserNotification(
    notification: NotificationPayload
    ): NotificationPayload {
    notification.broadcast = false;
    notification.user = this.ls.get('user');
    return notification;
  }

  private setBroadCastNotification(
    notification: NotificationPayload
    ): NotificationPayload {
    notification.broadcast = true;
    return notification;
  }

}
