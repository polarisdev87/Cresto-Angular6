import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appLable]',
  exportAs: 'lable'
})
export class LableDirective implements OnInit {

  public active = false;

  public constructor(
    private _elementRef: ElementRef
  ) {
  }

  public ngOnInit() {
    Promise.resolve().then(() => this.onBlur());

  }

  @HostListener('focus')
  public onFocus() {
    this.active = true;
  }

  @HostListener('blur')
  public onBlur() {
    const value: string = this._elementRef.nativeElement.value;
    this.active = value
      ? true
      : false;
  }
}
