import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
@Component({
  selector: 'myo-root',
  standalone: true,
  imports: [RouterOutlet, HlmButtonDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'myo-reps-angular';
}
