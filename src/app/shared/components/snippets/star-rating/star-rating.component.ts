import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { URI } from '@app/app.config';

import { UserService } from '@core/services/user/user.service';
import { CrafterService } from '@core/services/crafter/crafter.service';
import { PushService } from '@core/services/push/push.service';
import { ReactionService } from '@core/services/reaction/reaction.service';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { STAR_PUSH } from '@shared/data/notifications';
import { Article, User, Reaction, NotificationPayload, Category } from '@shared/interfaces/interfaces';

import { NoAccountComponent } from '@layout/dialogs/no-account/no-account.component';
import { environment } from '@env/environment';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})

export class StarRatingComponent implements OnInit, OnDestroy {

  @Input() content: Article | Category;
  @Input() type: string;
  stars: number;
  user: User;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private userSrv: UserService,
    private crafter: CrafterService,
    private reactionSrv: ReactionService,
    private sw: PushService
  ) { }

  ngOnInit() {
    this.user = this.userSrv.getUser();
  }

  public doStar(star: number): void {
    if (!this.user) {
      this.crafter.dialog(NoAccountComponent, {
        type: 'star',
        author: this.type === 'article' ?
                this.content.author :
                'Antic\'s Code'
      });
      return;
    }

    const react: Reaction = {
      source: this.content._id,
      user: this.user._id,
      type: 'star',
      value: star,
      target: this.type
    };

    this.reactionSrv.make(react)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(_ => {
          this.crafter.toaster('SUCCESS', 'THANKS.MUCH', 'info');
          this.sw.send(
            this.setNotification(Object.assign({}, STAR_PUSH))
          ).toPromise().then();
      });
  }

  setNotification(payload: NotificationPayload): NotificationPayload {
    payload.body = payload.body.concat(`.\n${this.content.title}`);

    switch (this.type) {
      case 'article':
        payload.data.url = `${URI}/article/${this.content.slug}`;
        payload.user = this.content.user;
        break;
      case 'category':
        payload.data.url = `${URI}/category/${this.content.category}`;
        payload.user = environment.id;
        payload.body = `Nueva Puntuación en la categoría ${this.content.category}`;
    }

    return payload;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
