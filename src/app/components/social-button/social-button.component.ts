import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SocialType } from '@website/models';

@Component({
  selector: 'social-button',
  templateUrl: './social-button.component.html',
  styleUrls: ['./social-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'social-button',
  },
})
export class SocialButtonComponent {
  @Input() type: keyof typeof SocialType;
  @Input() href: string;

  @Input() flat: boolean;
  @Input() isSVG: boolean = true;

  get icon() {
    return this.type.toLowerCase();
  }

  get class() {
    return this.type.toLowerCase();
  }
}
