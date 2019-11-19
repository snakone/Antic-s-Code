import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Article, Interaction, InteractionResponse } from '@app/shared/interfaces/interfaces';
import { CrafterService, InteractionService, UserService } from '@app/core/services/services.index';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as fromUser from '@core/ngrx/selectors/user.selectors';
import { NoAccountComponent } from '../../dialogs/no-account/no-account.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

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

  constructor(private crafter: CrafterService,
              private userService: UserService,
              private store: Store<AppState>,
              private interaction: InteractionService) { }

  ngOnInit() {
    this.getArticleLiked();
  }

  private getArticleLiked(): void {
    this.store.select(fromUser.getInteractionByUser)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res: Interaction[]) => {
        if (res) {
         const int = res.filter((i: Interaction) => {
           return i.article === this.article._id &&
                  i.user === this.userService.getUser()._id &&
                  i.type === 'like';
         });
         if (int.length === 0) { return; }
         int[0].value === 1 ? this.liked = true : this.liked = false;
        }
    });
  }

  doLike(value: number): void {
    if (!this.userService.getUser()) {
      this.crafter.dialog(NoAccountComponent, {
        type: 'like',
        author: this.article.author
      });
      return;
    }

    const int: Interaction = {
      article: this.article._id,
      user: this.userService.getUser()._id,
      type: 'like',
      value
    };

    this.interaction.doInteraction(int)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res: InteractionResponse) => {
        if (res.ok) {
          this.crafter.toaster('success', 'thanks.much', 'info');
          this.liked = !this.liked;
        }
      }, (err: HttpErrorResponse) => {
        err.status === 0 ?
        this.handleError('server') : this.handleError();
    });
  }

  private handleError(type?: string): void {
    if (type === 'server') {
      this.crafter.toaster('server.error',
                           'server.bad',
                           'error');
    } else {
      this.crafter.toaster('update.failed',
                           'try.again',
                           'error');
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
