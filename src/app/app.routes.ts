import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'workouts',
  },
  {
    path: 'exercises',
    loadChildren: () =>
      import('./features/exercises/exercises.routes').then(
        (m) => m.EXERCISES_ROUTES,
      ),
  },
  {
    path: 'sessions',
    loadChildren: () =>
      import('./features/sessions/sessions.routes').then(
        (m) => m.SESSIONS_ROUTES,
      ),
  },
  {
    path: 'workouts',
    loadChildren: () =>
      import('./features/workouts/workouts.routes').then(
        (m) => m.WORKOUTS_ROUTES,
      ),
  },
];
