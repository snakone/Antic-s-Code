import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { StorageService } from '@app/core/storage/storage.service';
import { environment } from '@env/environment';

@Injectable()

export class ThemeService {

  renderer: Renderer2;
  theme: string;

  constructor(rendererFactory: RendererFactory2,
              private ls: StorageService) {
    if (!environment.production) { console.log('ThemeService'); }
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  get(): string {
    if (!this.theme) { return this.ls.get('theme'); }
    return this.theme;
  }

  set(theme: string = 'default'): void {
    this.renderer.addClass(document.body, theme);
    this.ls.setKey('theme', theme);
  }

  remove(theme: string): void {
    this.renderer.removeClass(document.body, theme);
  }

}
