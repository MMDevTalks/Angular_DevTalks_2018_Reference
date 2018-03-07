import { Directive, OnInit, Renderer2, ViewChild, ElementRef, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[mmAutoFocus]'
})
export class AutoFocusDirective implements OnInit {
  constructor( @Inject(PLATFORM_ID) private platformId: Object, private _elementRef: ElementRef, private _renderer: Renderer2) { }

  ngOnInit() {

    if (isPlatformBrowser(this.platformId)) {
      this._renderer.selectRootElement(this._elementRef).nativeElement.focus();
    }
  }

}
