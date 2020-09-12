import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import {  URI } from '@app/app.config';
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';

import { CrafterService } from '@core/services/crafter/crafter.service';
import { UserService } from '@core/services/user/user.service';
import { InteractionService } from '@core/services/interaction/interaction.service';
import { PushService } from '@core/services/push/push.service';
import { InterFacade } from '@store/interactions/interaction.facade';

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
    private interFacade: InterFacade,
    private intSrv: InteractionService,
    private sw: PushService
  ) { }

  ngOnInit() {
    this.user = this.userSrv.getUser();
    this.getIntByUser();
  }

  private getIntByUser(): void {
    this.interFacade.byUser$
      .pipe(
        takeUntil(this.unsubscribe$),
        filter(res => res && !!res.length)
      )
      .subscribe((res: Interaction[]) => this.markInteraction(res));
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

    this.intSrv.make(int)
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

  private markInteraction(ints: Interaction[]): void {
    const cb = (int: Interaction) => int.content === this.article._id &&
                                     int.type === 'like' &&
                                     int.value === 1;
    this.liked = ints.some(cb);
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
