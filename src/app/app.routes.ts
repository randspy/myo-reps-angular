import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'workouts',
        pathMatch: 'full',
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
    ],
  },
];
