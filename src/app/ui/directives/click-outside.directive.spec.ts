import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ClickOutsideDirective } from './click-outside.directive';

@Component({
  template: `
    <div myoClickOutside (myoClickOutside)="onClickOutside()">
      <button>Inside</button>
    </div>
    <button id="outside">Outside</button>
  `,
})
class TestComponent {
  onClickOutside = jest.fn();
}

describe('ClickOutsideDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let directiveElement: DebugElement;
  let directive: ClickOutsideDirective;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [ClickOutsideDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    directiveElement = fixture.debugElement.query(
      By.directive(ClickOutsideDirective),
    );
    directive = directiveElement.injector.get(ClickOutsideDirective);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should not emit when clicking inside the element', () => {
    const emitSpy = jest.spyOn(directive.myoClickOutside, 'emit');
    const insideButton = directiveElement.query(By.css('button')).nativeElement;

    insideButton.click();

    expect(emitSpy).not.toHaveBeenCalled();
  });

  it('should emit when clicking outside the element', () => {
    const emitSpy = jest.spyOn(directive.myoClickOutside, 'emit');
    const outsideButton = fixture.debugElement.query(
      By.css('#outside'),
    ).nativeElement;

    outsideButton.click();

    expect(emitSpy).toHaveBeenCalled();
  });
});
