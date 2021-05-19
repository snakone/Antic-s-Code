import { Component, Input, OnInit, OnDestroy } from '@angular/core';
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
import { ShareService } from '@core/services/share/share.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-single-content-header-right',
  templateUrl: './single-content-header-right.component.html',
  styleUrls: ['./single-content-header-right.component.scss']
})

export class SingleContentHeaderRightComponent implements OnInit, OnDestroy {

  @Input() content: Article | Category;
  @Input() type: string;
  private unsubscribe$ = new Subject<void>();
  user: User;

  constructor(
    private crafter: CrafterService,
    private userSrv: UserService,
    private reactionSrv: ReactionService,
    private sw: PushService,
    private shareSrv: ShareService
  ) { }

  ngOnInit() {
    this.user = this.userSrv.getUser();
  }

  public doLike(value: number): void {
    this.content.userLiked = !this.content.userLiked;
    if (!this.user) {
      this.crafter.dialog(NoAccountComponent, {
        type: 'like',
        author: this.type === 'article' ?
                this.content.author :
                'Antic\'s Code'
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
            this.sw.send(
              this.setNotification(Object.assign({}, LIKE_PUSH))
            ).toPromise().then();
          }
      });
  }

  private setNotification(payload: NotificationPayload): NotificationPayload {
    payload.body = payload.body.concat(`.\n${this.content.title}`);

    switch (this.type) {
      case 'article':
        payload.data.url = `${URI}/article/${this.content.slug}`;
        payload.user = this.content.user;
        break;
      case 'category':
        payload.data.url = `${URI}/category/${this.content.category}`;
        payload.user = environment.id;
        payload.body = `Nuevo Like en la categoría ${this.content.category}`;
    }

    return payload;
  }

  public async share(): Promise<void> {
    const payload: ShareData = {
      title: this.type === 'article' ?
             `Antic\'s Code - ${this.content.title}` :
             `Antic\'s Code - ${this.content.category}`,
      url: this.type === 'article' ?
           `${URI}/article/${this.content.slug}` :
           `${URI}/category/${this.content.category}`,
      text: this.type === ' article' ?
            `Antic\'s Code - ${this.content.title}` :
            `Antic\'s Code - ${this.content.category}`
    };

    await this.shareSrv.share(payload);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
