import { HammerGestureConfig } from '@angular/platform-browser';

export class HammerConfig extends HammerGestureConfig {
  overrides = {
      pan: { direction: 6 },
      pinch: { enable: false },
      rotate: { enable: false }
  };
}
