import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLable]',
  exportAs: 'lable'
})
export class LableDirective {

  public active = false;

  public constructor(
    private _elementRef: ElementRef
  ) {
  }


  @HostListener('focus')
  public onFocus() {
    this.active = true;
  }

  @HostListener('blur')
  public onBlur() {
    this.active = this._elementRef.nativeElement.value
      ? true
      : false;
  }
}
