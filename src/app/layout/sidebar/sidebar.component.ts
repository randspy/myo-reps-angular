import { Component, input, output, computed, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LogoComponent } from '@app/ui/components/logo/logo.component';

export interface RouteType {
  url: string;
  title: string;
}

@Component({
  selector: 'myo-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, LogoComponent],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  tabs = input<RouteType[]>([]);
  path = input<string>('');
  close = output<void>();

  activeTab: Signal<RouteType | undefined> = computed(() =>
    this.tabs().find((tab) => this.path().includes(tab.url)),
  );

  isActiveTab(tab: RouteType): boolean {
    return this.activeTab()?.title === tab.title;
  }

  onClose() {
    this.close.emit();
  }
}
