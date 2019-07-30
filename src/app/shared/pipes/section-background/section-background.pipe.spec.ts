import { SectionBackgroundPipe } from './section-background.pipe';
import { DomSanitizer } from '@angular/platform-browser';

describe('SectionBackgroundPipe', () => {
  it('create an instance', () => {
    // tslint:disable-next-line: prefer-const
    let sanitizer: DomSanitizer;
    const pipe = new SectionBackgroundPipe(sanitizer);
    expect(pipe).toBeTruthy();
  });
});
