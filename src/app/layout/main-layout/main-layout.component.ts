import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@app/layout/header/header.component';

@Component({
  selector: 'myo-main-layout',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './main-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {}
