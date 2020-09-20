import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import {  URI } from '@app/app.config';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CrafterService } from '@core/services/crafter/crafter.service';
import { UserService } from '@core/services/user/user.service';
import { IntersService } from '@core/services/inters/inters.service';
import { PushService } from '@core/services/push/push.service';

import { NoAccountComponent } from '../../dialogs/no-account/no-account.component';

import {
  User,
  Article,
  Interaction,
  NotificationPayload
 } from '@shared/interfaces/interfaces';

import { LIKE_PUSH } from '@shared/data/notifications';

@Component({
  selector: 'app-article-reactions',
  templateUrl: './article-reactions.component.html',
  styleUrls: ['./article-reactions.component.scss']
})

export class ArticleReactionsComponent implements OnInit, OnDestroy {

  @Input() article: Article;
  @Input() single: boolean;
  liked: boolean;
  private unsubscribe$ = new Subject<void>();
  user: User;

  constructor(
    private crafter: CrafterService,
    private userSrv: UserService,
    private intersSrv: IntersService,
    private sw: PushService
  ) { }

  ngOnInit() {
    this.user = this.userSrv.getUser();
    this.liked = this.article.inters.liked;
  }

  public doLike(value: number): void {
    if (!this.user) {
      this.crafter.dialog(NoAccountComponent, {
        type: 'like',
        author: this.article.author
      });
      return;
    }

    const int: Interaction = {
      content: this.article._id,
      user: this.user._id,
      type: 'like',
      value
    };

    this.intersSrv.make(int)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(_ => {
          this.crafter.toaster('SUCCESS', 'THANKS.MUCH', 'info');
          this.liked = !this.liked;

          if (value === 1) {
            this.sw.sendNotification(
              this.setNotification(Object.assign({}, LIKE_PUSH))
            ).toPromise().then();
          }
      });
  }

  setNotification(payload: NotificationPayload): NotificationPayload {
    payload.body = payload.body.concat(`.\n${this.article.title}`);
    payload.data.url = `${URI}/article/${this.article.slug}`;
    payload.user = this.article.user;
    return payload;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
