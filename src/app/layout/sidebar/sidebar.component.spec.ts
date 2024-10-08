import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent, RouteType } from './sidebar.component';
import { By } from '@angular/platform-browser';
import { LogoComponent } from '@app/ui/components/logo/logo.component';
import { provideRouter, RouterLink } from '@angular/router';

class DummyComponent {}

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  const mockTabs: RouteType[] = [
    { url: '/home', title: 'Home' },
    { url: '/about', title: 'About' },
    { url: '/contact', title: 'Contact' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarComponent, LogoComponent],
      providers: [provideRouter([{ path: 'home', component: DummyComponent }])],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('tabs', mockTabs);
    fixture.componentRef.setInput('path', '/home');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct number of tabs', () => {
    const tabElements = fixture.debugElement.queryAll(By.directive(RouterLink));
    const items = tabElements.map((el) => el.injector.get(RouterLink));

    expect(tabElements.length).toBe(mockTabs.length);
    expect(items[0].href).toBe('/home');
    expect(items[1].href).toBe('/about');
    expect(items[2].href).toBe('/contact');
  });

  it('should correctly identify the active tab', () => {
    const activeTabElement = fixture.debugElement.query(By.css('.bg-primary'));
    expect(activeTabElement).toBeTruthy();
    expect(activeTabElement.nativeElement.textContent.trim()).toBe('Home');

    const inactiveTabElements = fixture.debugElement.queryAll(
      By.css('.hover\\:bg-accent'),
    );
    expect(inactiveTabElements.length).toBe(2);
    expect(inactiveTabElements[0].nativeElement.textContent.trim()).toBe(
      'About',
    );
    expect(inactiveTabElements[1].nativeElement.textContent.trim()).toBe(
      'Contact',
    );
  });

  it('should emit close event when a tab is clicked', () => {
    const closeSpy = jest.spyOn(component.close, 'emit');
    const firstTab = fixture.debugElement.query(By.css('a'));
    firstTab.nativeElement.click();
    expect(closeSpy).toHaveBeenCalled();
  });

  it('should update active tab when path changes', () => {
    fixture.componentRef.setInput('path', '/about');
    fixture.detectChanges();

    const activeTabElement = fixture.debugElement.query(By.css('.bg-primary'));
    expect(activeTabElement).toBeTruthy();
    expect(activeTabElement.nativeElement.textContent.trim()).toBe('About');

    const inactiveTabElements = fixture.debugElement.queryAll(
      By.css('.hover\\:bg-accent'),
    );
    expect(inactiveTabElements.length).toBe(2);
    expect(inactiveTabElements[0].nativeElement.textContent.trim()).toBe(
      'Home',
    );
    expect(inactiveTabElements[1].nativeElement.textContent.trim()).toBe(
      'Contact',
    );
  });
});
