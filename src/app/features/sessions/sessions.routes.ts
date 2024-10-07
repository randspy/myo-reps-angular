import { Routes } from '@angular/router';
import { SessionsPageComponent } from '@app/features/sessions/components/sessions-page/sessions-page.component';

export const SESSIONS_ROUTES: Routes = [
  {
    path: '',
    component: SessionsPageComponent,
  },
];
