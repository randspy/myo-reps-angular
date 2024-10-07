import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'myo-workouts-page',
  standalone: true,
  imports: [],
  templateUrl: './workouts-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkoutsPageComponent {}
