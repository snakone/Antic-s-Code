import { Component, OnDestroy, ViewChild, AfterViewInit, Injector, NgModuleRef,
         ViewContainerRef, NgModule, Compiler, Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { Subscription } from 'rxjs';
import { Article, Code, Category } from '@app/shared/interfaces/interfaces';
import { CommonModule } from '@angular/common';
import { BoxesModule } from '../layout/boxes/boxes.module';
import { CONTENT_STYLES } from './content-maker.styles';

@Component({
  selector: 'app-content-maker',
  template: `<div highlightChildren><ng-container #vc></ng-container></div>`
})

export class ContentMakerComponent implements AfterViewInit, OnDestroy {

  @Input() template?: Article | Category;
  @ViewChild('vc', { read: ViewContainerRef, static: true }) vc: ViewContainerRef;
  routerOb: Subscription = null;

  constructor(private route: ActivatedRoute,
              private compiler: Compiler,
              private injector: Injector,
              private module: NgModuleRef<any>) {}

  ngAfterViewInit() {
    this.routerOb = this.route.params.subscribe(() => {
      const tmpCmp = Component({
        template: this.template.message,
        styles: [CONTENT_STYLES]
      })(class TempComponent {  // Custom Component
        public code: Code[];
      });
      const tmpModule = NgModule({  // Custom Module
        declarations: [tmpCmp],
        imports: [
          SharedModule,
          RouterModule,
          CommonModule,
          BoxesModule
        ],
      })(class {});
      this.compiler.compileModuleAndAllComponentsAsync(tmpModule)
        .then((factories) => {
          this.vc.clear();
          const f = factories.componentFactories[factories.componentFactories.length - 1];
          const cmpRef = f.create(this.injector, [], null, this.module);
          cmpRef.instance.name = 'dynamic';
          cmpRef.instance.index = this.template.index;
          cmpRef.instance.code = this.template.code;
          this.vc.insert(cmpRef.hostView);
        });
      });
  }

  ngOnDestroy() {
    if (this.routerOb) {
      this.routerOb.unsubscribe();
    }
  }

}

