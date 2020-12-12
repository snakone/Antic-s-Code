import { NgModule, SecurityContext } from '@angular/core';

import {
  MarkdownModule,
  MarkedOptions,
  MarkdownModuleConfig,
  MarkedRenderer } from 'ngx-markdown';

const options: MarkdownModuleConfig = {
  markedOptions: {
    provide: MarkedOptions,
    useFactory: markedOptionsFactory
  },
  sanitize: SecurityContext.NONE
};

export function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();
  const linkRenderer = renderer.link;
  renderer.link = (href, title, text) => {
    const html = linkRenderer.call(renderer, href, title, text);
    return html.replace(/^<a /,
      '<a role="link" tabindex="0" target="_blank" rel="nofollow noopener noreferrer" ');
  };

  renderer.heading = (text, level, raw, selector) => {
    if (level >= 3 || level === 1) { return `<h${level}>${text}</h${level}>`; }
    const id = slugify(text);
    return `
      <div class="anchor" id="${id}"></div>
      <h${level}>${text}</h${level}>
    `;
  };

  return {
    renderer,
    gfm: true,
    breaks: false,
    pedantic: false,
    smartLists: true,
    smartypants: false,
  };
}

@NgModule({
  imports: [MarkdownModule.forRoot(options)]
})

export class NgMarkdownModule { }

const slugify = ( text: string ) => {
  return text
  .toString()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .trim()
  .replace('.', '-')
  .replace(/\s+/g, '-')
  .replace(/[^\w\-]+/g, '')
  .replace(/\-\-+/g, '-');
};
