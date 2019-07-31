import { BackgroundPipe } from './background.pipe';
import { DomSanitizer } from '@angular/platform-browser';

describe('BackgroundPipe', () => {
  it('create an instance', () => {
    // tslint:disable-next-line: prefer-const
    let sanitizer: DomSanitizer;
    const pipe = new BackgroundPipe(sanitizer);
    expect(pipe).toBeTruthy();
  });
});
