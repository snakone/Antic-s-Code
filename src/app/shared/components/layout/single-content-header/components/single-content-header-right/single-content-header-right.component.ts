import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { URI } from '@app/app.config';
import { CrafterService } from '@core/services/crafter/crafter.service';
import { PushService } from '@core/services/push/push.service';
import { ReactionService } from '@core/services/reaction/reaction.service';
import { UserService } from '@core/services/user/user.service';
import { LIKE_PUSH } from '@shared/data/notifications';
import { Article, Category, NotificationPayload, Reaction, User } from '@shared/interfaces/interfaces';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NoAccountComponent } from '@layout/dialogs/no-account/no-account.component';

@Component({
  selector: 'app-single-content-header-right',
  templateUrl: './single-content-header-right.component.html',
  styleUrls: ['./single-content-header-right.component.scss']
})

export class SingleContentHeaderRightComponent implements OnInit {

  @Input() content: Article | Category;
  @Input() type: string;
  private unsubscribe$ = new Subject<void>();
  user: User;

  constructor(
    private crafter: CrafterService,
    private userSrv: UserService,
    private reactionSrv: ReactionService,
    private sw: PushService
  ) { }

  ngOnInit() {
    this.user = this.userSrv.getUser();
  }

  public doLike(value: number): void {
    if (this.type === 'category') { return; }
    if (!this.user) {
      this.crafter.dialog(NoAccountComponent, {
        type: 'like',
        author: this.content.author
      });
      return;
    }

    const react: Reaction = {
      source: this.content._id,
      user: this.user._id,
      type: 'like',
      value,
      target: this.type
    };

    this.reactionSrv.make(react)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(_ => {
          this.crafter.toaster('SUCCESS', 'THANKS.MUCH', 'info');
          if (value === 1) {
            this.sw.sendNotification(
              this.setNotification(Object.assign({}, LIKE_PUSH))
            ).toPromise().then();
          }
      });
  }

  private setNotification(payload: NotificationPayload): NotificationPayload {
    payload.body = payload.body.concat(`.\n${this.content.title}`);
    payload.data.url = `${URI}/article/${this.content.slug}`;
    payload.user = this.content.user;
    return payload;
  }

}
