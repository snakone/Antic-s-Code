import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { URI } from '@app/app.config';

import { UserService } from '@core/services/user/user.service';
import { CrafterService } from '@core/services/crafter/crafter.service';
import { IntersService } from '@core/services/inters/inters.service';
import { PushService } from '@core/services/push/push.service';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { STAR_PUSH } from '@shared/data/notifications';
import { Article, User, Interaction, NotificationPayload } from '@shared/interfaces/interfaces';

import { NoAccountComponent } from '@layout/dialogs/no-account/no-account.component';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})

export class StarRatingComponent implements OnInit, OnDestroy {

  @Input() article: Article;
  stars: number;
  user: User;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private userSrv: UserService,
    private crafter: CrafterService,
    private intersSrv: IntersService,
    private sw: PushService
  ) { }

  ngOnInit() {
    this.user = this.userSrv.getUser();
  }

  public doStar(star: number): void {
    if (!this.user) {
      this.crafter.dialog(NoAccountComponent, {
        type: 'star',
        author: this.article.author
      });
      return;
    }
    if (star) {
      const int: Interaction = {
        content: this.article._id,
        user: this.user._id,
        type: 'star',
        value: star
      };

      this.intersSrv.make(int)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(_ => {
            this.crafter.toaster('SUCCESS', 'THANKS.MUCH', 'info');
            this.sw.sendNotification(
              this.setNotification(Object.assign({}, STAR_PUSH))
            ).toPromise().then();
        });
    }
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
