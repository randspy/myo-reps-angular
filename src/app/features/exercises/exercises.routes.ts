import { Routes } from '@angular/router';
import { ExercisesPageComponent } from '@app/features/exercises/components/exercises-page/exercises-page.component';

export const EXERCISES_ROUTES: Routes = [
  {
    path: '',
    component: ExercisesPageComponent,
  },
];
