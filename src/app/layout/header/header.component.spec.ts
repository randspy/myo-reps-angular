import { TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { provideRouter } from '@angular/router';
import { HlmButtonDirective } from '@components/hlm-button.directive';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { SidebarComponent } from '@app/layout/sidebar/sidebar.component';
import { lucideMenu } from '@ng-icons/lucide';
import { RouterTestingHarness } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

const titleSelector = '[data-testid="title"]';
const sidebarToggleSelector = '[data-testid="sidebar-toggle"]';
const sidebarContainerSelector = '[data-testid="sidebar"]';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let harness: RouterTestingHarness;

  function query(selector: string) {
    return harness.fixture.nativeElement.querySelector(selector);
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, HlmButtonDirective, NgIconComponent],
      providers: [
        provideRouter([
          { path: 'workouts', component: HeaderComponent },
          { path: 'exercises', component: HeaderComponent },
        ]),
        provideIcons({ lucideMenu }),
      ],
    }).compileComponents();

    harness = await RouterTestingHarness.create();
    component = await harness.navigateByUrl('/workouts', HeaderComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct title', () => {
    expect(query(titleSelector).textContent).toContain('Workouts');
  });

  it('should change the title when the path changes', async () => {
    await harness.navigateByUrl('/exercises', HeaderComponent);

    expect(query(titleSelector).textContent).toContain('Exercises');
  });

  it('should open the sidebar when the button is clicked', () => {
    const button = query(sidebarToggleSelector);

    button.click();
    harness.fixture.detectChanges();

    const sidebarElement = query(sidebarContainerSelector);
    expect(sidebarElement.classList.contains('translate-x-0')).toBe(true);
  });

  it('should close the sidebar when a link is clicked', () => {
    const button = query(sidebarToggleSelector);
    button.click();
    harness.fixture.detectChanges();

    const sidebarComponent = harness.fixture.debugElement.query(
      By.directive(SidebarComponent),
    ).componentInstance;

    sidebarComponent.close.emit();
    harness.fixture.detectChanges();

    expect(
      query(sidebarContainerSelector).classList.contains('translate-x-0'),
    ).toBe(false);
  });
});
