import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'myo-sessions-page',
  standalone: true,
  imports: [],
  templateUrl: './sessions-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SessionsPageComponent {}
