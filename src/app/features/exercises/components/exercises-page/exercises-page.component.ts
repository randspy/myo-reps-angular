import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'myo-exercises-page',
  standalone: true,
  imports: [],
  templateUrl: './exercises-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercisesPageComponent {}
