import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Article, User, Interaction, InteractionResponse } from '@app/shared/interfaces/interfaces';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NoAccountComponent } from '@layout/dialogs/no-account/no-account.component';
import { CrafterService, InteractionService, UserService } from '@app/core/services/services.index';
import { HttpErrorResponse } from '@angular/common/http';

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

  constructor(private userService: UserService,
              private crafter: CrafterService,
              private interaction: InteractionService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
   }

  doStar(s: number): void {
    if (!this.user) {
      this.crafter.dialog(NoAccountComponent, {
        type: 'star',
        author: this.article.author
      });
      return;
    }
    if (s) {
      const int: Interaction = {
        content: this.article._id,
        user: this.userService.getUser()._id,
        type: 'star',
        value: s
      };

      this.interaction.doInteraction(int)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((res: InteractionResponse) => {
          if (res.ok) {
            this.crafter.toaster('success', 'thanks.much', 'info');
          }
        }, (err: HttpErrorResponse) => {
          err.status === 0 ?
          this.handleError('server') : this.handleError();
      });
    }
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
