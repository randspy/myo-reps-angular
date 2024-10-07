import { Routes } from '@angular/router';
import { WorkoutsPageComponent } from '@app/features/workouts/components/workouts-page/workouts-page.component';

export const WORKOUTS_ROUTES: Routes = [
  {
    path: '',
    component: WorkoutsPageComponent,
  },
];
