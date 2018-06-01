import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCopypaste]',
  exportAs: 'copypaste'
})
export class CopypasteDirective {

  public constructor(
    private _elementRef: ElementRef
  ) {
  }

  public copy(): void {
    this._elementRef.nativeElement.select();
    document.execCommand('copy');
  }

}
