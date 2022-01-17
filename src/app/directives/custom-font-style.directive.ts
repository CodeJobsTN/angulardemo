import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomFontStyle]'
})
export class CustomFontStyleDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.fontSize = '24px';
 }

}
