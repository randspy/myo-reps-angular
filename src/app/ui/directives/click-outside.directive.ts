import {
  Directive,
  ElementRef,
  Output,
  EventEmitter,
  HostListener,
  inject,
} from '@angular/core';

@Directive({
  selector: '[myoClickOutside]',
  standalone: true,
})
export class ClickOutsideDirective {
  @Output() myoClickOutside = new EventEmitter<void>();

  private elementRef = inject(ElementRef);

  @HostListener('document:click', ['$event.target'])
  public onClick(target: unknown) {
    const clickedInside = this.elementRef.nativeElement.contains(target);
    if (!clickedInside) {
      this.myoClickOutside.emit();
    }
  }
}
