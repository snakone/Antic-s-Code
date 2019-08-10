import { Component, OnDestroy, ViewChild, AfterViewInit, Injector, NgModuleRef,
         ViewContainerRef, NgModule, Compiler, Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { Subscription } from 'rxjs';
import { Article, Code } from '@app/shared/interfaces/interfaces';
import { CommonModule } from '@angular/common';
import { ARTICLE_STYLES } from './article-maker.styles';

declare var ClipboardJS: any;

@Component({
  selector: 'app-article-maker',
  template: `<div highlightChildren><ng-container #vc></ng-container></div>`
})

export class ArticleMakerComponent implements AfterViewInit, OnDestroy {

  @Input() article: Article;
  @ViewChild('vc', { read: ViewContainerRef, static: true }) vc: ViewContainerRef;
  routerOb: Subscription = null;
  clipboard = new ClipboardJS('.btn');

  constructor(private route: ActivatedRoute,
              private compiler: Compiler,
              private injector: Injector,
              private module: NgModuleRef<any>) {}

  ngAfterViewInit() {
      this.routerOb = this.route.params.subscribe(() => {
        const tmpCmp = Component({
          template: this.article.message,
          styles: [ARTICLE_STYLES]
        })(class TempComponent {
          public code: Code[];
          showTooltip(code: Code): void {
             code.tooltip = true;
             setTimeout(() => {
               code.tooltip = false;
             }, 2000);
          }
        });
        const tmpModule = NgModule({
          declarations: [tmpCmp],
          imports: [
            SharedModule,
            RouterModule,
            CommonModule
          ],
        })(class {});
        this.compiler.compileModuleAndAllComponentsAsync(tmpModule)
          .then((factories) => {
            this.vc.clear();
            const f = factories.componentFactories[factories.componentFactories.length - 1];
            const cmpRef = f.create(this.injector, [], null, this.module);
            cmpRef.instance.name = 'dynamic';
            cmpRef.instance.code = this.article.code;
            cmpRef.instance.clipboard = this.clipboard;
            this.vc.insert(cmpRef.hostView);
          });
        });
  }

  ngOnDestroy() {
    if (this.routerOb) {
      this.routerOb.unsubscribe();
    }

    if (this.clipboard) {
      this.clipboard.destroy();
    }
  }

}

