import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsPageComponent } from './sessions-page.component';

describe('SessionsPageComponent', () => {
  let component: SessionsPageComponent;
  let fixture: ComponentFixture<SessionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SessionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
