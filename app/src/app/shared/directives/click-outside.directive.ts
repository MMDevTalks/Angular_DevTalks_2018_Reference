import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';


@Directive({
  selector: '[mmClickOutside]'
})
export class ClickOutsideDirective {
    @Output()
    mmClickOutside = new EventEmitter();

    constructor(private _elementRef: ElementRef) { }

    @HostListener('document:click', ['$event.target'])
    onClick(targetElement) {
        const clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.mmClickOutside.emit(null);
        }
    }
}
