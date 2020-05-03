import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { StorageService } from '@core/storage/storage.service';

@Injectable({providedIn: 'root'})

export class ThemeService {

  renderer: Renderer2;
  theme: string;

  constructor(
    rendererFactory: RendererFactory2,
    private ls: StorageService
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  public get(): string {
    if (!this.theme) { return this.ls.get('theme'); }
    return this.theme;
  }

  public set(theme: string = 'default'): void {
    this.remove(this.get());
    this.renderer.addClass(document.body, theme);
    this.ls.setKey('theme', theme);
  }

  public remove(theme: string): void {
    this.renderer.removeClass(document.body, theme);
  }

}
