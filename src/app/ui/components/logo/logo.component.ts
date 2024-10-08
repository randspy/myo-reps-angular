import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  lucideDumbbell,
  lucideMedal,
  lucideTrophy,
  lucideAward,
  lucideLandPlot,
} from '@ng-icons/lucide';

@Component({
  selector: 'myo-logo',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './logo.component.html',
  providers: [
    provideIcons({
      lucideDumbbell,
      lucideMedal,
      lucideTrophy,
      lucideAward,
      lucideLandPlot,
    }),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {}
