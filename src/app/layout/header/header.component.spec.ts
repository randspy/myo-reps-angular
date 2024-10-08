import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { RouterModule, provideRouter } from '@angular/router';
import { HlmButtonDirective } from '@components/hlm-button.directive';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { SidebarComponent } from '@app/layout/sidebar/sidebar.component';
import { ClickOutsideDirective } from '@app/ui/directives/click-outside.directive';
import { lucideMenu } from '@ng-icons/lucide';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HeaderComponent,
        RouterModule,
        HlmButtonDirective,
        NgIconComponent,
        SidebarComponent,
        ClickOutsideDirective,
      ],
      providers: [provideRouter([]), provideIcons({ lucideMenu })],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
