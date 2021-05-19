import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { URI } from '@app/app.config';
import { CrafterService } from '@core/services/crafter/crafter.service';
import { PushService } from '@core/services/push/push.service';
import { ReactionService } from '@core/services/reaction/reaction.service';
import { UserService } from '@core/services/user/user.service';
import { NoAccountComponent } from '@shared/components/layout/dialogs/no-account/no-account.component';
import { LIKE_NEWS_PUSH } from '@shared/data/notifications';
import { News, NotificationPayload, Reaction, User } from '@shared/interfaces/interfaces';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { environment } from '@env/environment';
import { ShareService } from '@core/services/share/share.service';

@Component({
  selector: 'app-single-news-content',
  templateUrl: './single-news-content.component.html',
  styleUrls: ['./single-news-content.component.scss']
})

export class SingleNewsContentComponent implements OnInit, OnDestroy {

  @Input() notice: News;
  private unsubscribe$ = new Subject<void>();
  user: User;

  constructor(
    private userSrv: UserService,
    private crafter: CrafterService,
    private reactionSrv: ReactionService,
    private sw: PushService,
    private shareSrv: ShareService
  ) { }

  ngOnInit() {
    this.user = this.userSrv.getUser();
  }

  public doLike(value: number): void {
    this.notice.userLiked = !this.notice.userLiked;
    if (!this.user) {
      this.crafter.dialog(NoAccountComponent, {
        type: 'like',
        author: 'Antic\'s Code'
      });
      return;
    }

    const react: Reaction = {
      source: this.notice._id,
      user: this.user._id,
      type: 'like',
      value,
      target: 'news'
    };

    this.reactionSrv.make(react)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(_ => {
          this.crafter.toaster('SUCCESS', 'THANKS.MUCH', 'info');
          if (value === 1) {
            this.sw.send(
              this.setNotification(Object.assign({}, LIKE_NEWS_PUSH))
            ).toPromise().then();
          }
      });
  }

  private setNotification(payload: NotificationPayload): NotificationPayload {
    payload.body = payload.body.concat(`.\n${this.notice.title}`);
    payload.data.url = `${URI}/news/${this.notice.slug}`;
    payload.user = environment.id;
    return payload;
  }

  public async share(): Promise<void> {
    const payload: ShareData = {
      title: `Antic\'s Code - ${this.notice.title}`,
      url: `${URI}/news/${this.notice.slug}`,
      text: `Antic\'s Code - ${this.notice.title}`
    };

    await this.shareSrv.share(payload);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
