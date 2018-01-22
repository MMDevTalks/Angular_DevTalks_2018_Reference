import { Directive, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Directive({
  selector: '[mmAutoFocus]'
})
export class AutoFocusDirective implements OnInit {
  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) { }

  ngOnInit() {
    this._renderer.selectRootElement(this._elementRef).nativeElement.focus();
  }

}
