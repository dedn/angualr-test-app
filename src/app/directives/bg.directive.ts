import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBg]'
})
export class BgDirective {


@Input() fontSize;
@Input('appBg') bgColor;

  constructor(
      private element: ElementRef,
      private renderer: Renderer2
  ) {


  }

  @HostListener('click') onClick() {

    this.element.nativeElement.style.background = 'lime';
    this.renderer.setStyle(this.element.nativeElement, 'background' , this.bgColor)
  }

}
