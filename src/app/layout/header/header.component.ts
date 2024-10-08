import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
  computed,
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { lucideMenu } from '@ng-icons/lucide';
import { toSignal } from '@angular/core/rxjs-interop';
import { HlmButtonDirective } from '@components/hlm-button.directive';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { sideBarRoutePaths } from '@app/layout/sidebar-routes';
import { SidebarComponent } from '@app/layout/sidebar/sidebar.component';
import { ClickOutsideDirective } from '@app/ui/directives/click-outside.directive';

@Component({
  selector: 'myo-header',
  standalone: true,
  imports: [
    HlmButtonDirective,
    NgIconComponent,
    SidebarComponent,
    ClickOutsideDirective,
  ],
  templateUrl: './header.component.html',
  providers: [provideIcons({ lucideMenu })],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private router = inject(Router);

  isSidebarOpenInMobileView = signal(false);
  sideBarRoutePaths = sideBarRoutePaths;
  currentPath = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event: NavigationEnd) => event.url),
    ),
    { initialValue: '' },
  );

  activeSidebarElementPath = computed(
    () =>
      sideBarRoutePaths.find((tab) => this.currentPath().includes(tab.url))
        ?.title || '',
  );

  openSidebar() {
    this.isSidebarOpenInMobileView.set(true);
  }

  closeSidebar() {
    this.isSidebarOpenInMobileView.set(false);
  }
}
